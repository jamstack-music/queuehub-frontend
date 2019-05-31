/* global EventSource localStorage */
import { useEffect, useRef, useReducer } from 'react';
import { createContainer } from 'unstated-next';

import useMembers from './members';
import useSongs from './songs';

const initialState = {
  name: '',
};

const removeAllListeners = (eventSource) => {
  eventSource.current.removeEventListener('song', () => null);
  eventSource.current.removeEventListener('join', () => null);
  eventSource.current.removeEventListener('bump', () => null);
  eventSource.current.removeEventListener('next', () => null);
};

function setName(state, name) {
  return { ...state, name };
}

function reducer(state, action) {
  switch (action.type) {
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
  const [songs, songsDispatch] = useSongs();
  const [members, membersDispatch] = useMembers();
  const [room, roomDispatch] = useReducer(reducer, initialState);
  const eventSource = useRef(null);

  useEffect(() => {
    function getAlreadyBumped() {
      return JSON.parse(localStorage.getItem('alreadyBumped') || '{}');
    }

    if (room.name) {
      eventSource.current = new EventSource(`http://52.42.15.3:5000/stream?channel=${room.name}`);

      eventSource.current.addEventListener(
        'song',
        ({ data }) => {
          const { song } = JSON.parse(data);
          songsDispatch({ type: 'add', payload: song });
        },
        false,
      );

      eventSource.current.addEventListener(
        'join',
        ({ data }) => {
          const { user } = JSON.parse(data);
          membersDispatch({ type: 'join', payload: user });
        },
        false,
      );

      eventSource.current.addEventListener(
        'bump',
        ({ data }) => {
          songsDispatch({ type: 'bump', payload: data });
        },
        false,
      );

      eventSource.current.addEventListener(
        'next',
        () => {
          const alreadyBumped = getAlreadyBumped();
          songsDispatch({ type: 'next', alreadyBumped });
        },
        false,
      );

      return function unMount() {
        removeAllListeners(eventSource);
        eventSource.current.close();
      };
    }
  }, [room.name, songsDispatch, membersDispatch]);

  return {
    room,
    members,
    songs,
    roomDispatch,
    membersDispatch,
    songsDispatch,
  };
}

export default createContainer(useRoomContainer);
