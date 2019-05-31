/* global localStorage */
import { useReducer } from 'react';

const initialState = {
  current: {},
  queue: [],
};

const superBump = (queue) => {
  queue.sort((a, b) => b.bumps - a.bumps);
};

function init(store, alreadyBumped) {
  const { current_song: current, ...rest } = store;
  const queue = rest.queue.map(song => ({
    ...song,
    alreadyBumped: alreadyBumped[song.id] || false,
  }));

  const song = typeof current === 'string' ? {} : current;
  return { queue, current: song };
}

function next(state, alreadyBumped) {
  if (state.queue.length === 0) return state;

  const { id } = state.queue[0];
  const { [id]: omit, ...rest } = alreadyBumped;
  localStorage.setItem('alreadyBumped', JSON.stringify(rest));

  return {
    current: state.queue[0],
    queue: state.queue.slice(1, state.queue.length),
  };
}

function bump(state, id) {
  const queue = state.queue.map((song) => {
    if (song.id !== id) return song;

    return {
      ...song,
      bumps: song.bumps + 1,
      alreadyBumped: true,
    };
  });

  superBump(queue);
  return { ...state, queue };
}

function add(state, song) {
  if (state.queue.length === 0 && !state.current.uri) {
    return { ...state, current: song };
  }
  return { ...state, queue: [...state.queue, song] };
}

function reducer(state, action) {
  switch (action.type) {
    case 'init':
      return init(action.payload, action.alreadyBumped);
    case 'add':
      return add(state, action.payload);
    case 'bump':
      return bump(state, action.payload);
    case 'next':
      return next(state, action.alreadyBumped);
    default:
      throw new Error();
  }
}

function useSongs() {
  return useReducer(reducer, initialState);
}

export default useSongs;
