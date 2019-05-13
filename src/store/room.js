/* global EventSource localStorage */
import { useEffect, useRef, useReducer } from 'react';
import { createContainer } from 'unstated-next';

const superBump = (queue) => {
  queue.sort((a, b) => b.bumps - a.bumps);
};

const initialState = {
  queue: [],
  currentSong: {},
  members: [],
};

function init(state, store, alreadyBumped) {
  const { current_song: currentSong, ...rest } = store;
  const queue = rest.queue.map(song => ({
    ...song,
    alreadyBumped: alreadyBumped[song.id] || false,
  }));

  const song = typeof currentSong === 'string' ? {} : currentSong;
  return {
    ...state, ...rest, queue, currentSong: song,
  };
}

function setName(state, name) {
  return { ...state, name };
}

function addSong(state, song) {
  if (state.queue.length === 0 && !state.currentSong.uri) {
    return { ...state, currentSong: song };
  }
  return { ...state, queue: [...state.queue, song] };
}

function addMember(state, member) {
  if (!state.members.find(el => el === member)) {
    return { ...state, members: [...state.members, member] };
  }
  return state;
}

function bumpSong(state, id) {
  const { queue } = state;
  const newQueue = queue.map((song) => {
    if (song.id !== id) return song;

    return {
      ...song,
      bumps: song.bumps + 1,
      alreadyBumped: true,
    };
  });

  superBump(newQueue);

  return { ...state, queue: newQueue };
}

function nextSong(state, alreadyBumped) {
  if (state.queue.length === 0) return state;

  const { id } = state.queue[0];
  const { [id]: omit, ...rest } = alreadyBumped;
  localStorage.setItem('alreadyBumped', JSON.stringify(rest));

  return {
    ...state,
    currentSong: state.queue[0],
    queue: state.queue.slice(1, state.queue.length),
  };
}

function reducer(state, action) {
  switch (action.type) {
    case 'init':
      return init(state, action.payload, action.alreadyBumped);
    case 'bump':
      return bumpSong(state, action.payload);
    case 'add':
      return addSong(state, action.payload);
    case 'join':
      return addMember(state, action.payload);
    case 'next':
      return nextSong(state, action.alreadyBumped);
    case 'name':
      return setName(state, action.payload);
    case 'reset':
      localStorage.clear();
      return initialState;
    default:
      return state;
  }
}

function useRoomContainer() {
  const [room, dispatch] = useReducer(reducer, initialState);
  const eventSource = useRef(null);

  useEffect(() => {
    async function getAlreadyBumped() {
      const alreadyBumped = localStorage.getItem('alreadyBumped') || {};
      return JSON.parse(alreadyBumped);
    }

    if (room.name) {
      eventSource.current = new EventSource(`http://52.42.15.3:5000/stream?channel=${room.name}`);

      eventSource.current.addEventListener(
        'song',
        ({ data }) => {
          const { song } = JSON.parse(data);
          dispatch({ type: 'add', payload: song });
        },
        false,
      );

      eventSource.current.addEventListener(
        'join',
        ({ data }) => {
          const { user } = JSON.parse(data);
          dispatch({ type: 'join', payload: user });
        },
        false,
      );

      eventSource.current.addEventListener(
        'bump',
        ({ data }) => {
          dispatch({ type: 'bump', payload: data });
        },
        false,
      );

      eventSource.current.addEventListener(
        'next',
        () => {
          const alreadyBumped = getAlreadyBumped();
          dispatch({ type: 'next', alreadyBumped });
        },
        false,
      );

      return function unMount() {
        eventSource.current.removeAllListeners();
        eventSource.current.close();
      };
    }
  }, [room.name, dispatch]);

  return { room, dispatch };
}

export default createContainer(useRoomContainer);
