import { wrapReducer } from '../lib';

import INIT_STATE from './state';

const superBump = (queue) => {
  queue.sort((a, b) => b.bumps - a.bumps);
};

const songsReducer = {
  addSong: (state, song) => {
    if (state.queue.length === 0 && !state.current.uri) {
      return { ...state, current: song };
    }

    return { ...state, queue: [...state.queue, song] };
  },
  skipSong: (state) => {
    if (state.queue.length === 0) return state;

    return {
      current: state.queue[0],
      queue: state.queue.slice(1, state.queue.length),
    };
  },
  bumpSong: (state, songId) => {
    const queue = state.queue.map((song) => {
      if (song.id !== songId) return song;

      return {
        ...song,
        bumps: song.bumps + 1,
        alreadyBumped: true,
      };
    });

    if (state.superBumpEnabled) {
      superBump(queue);
    } else {
      // TODO: Implement regular bumping
    }
    return { ...state, queue };
  },
  initSongs: state => state,
};

export default wrapReducer(songsReducer, INIT_STATE);
