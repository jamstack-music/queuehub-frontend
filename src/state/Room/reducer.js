import { wrapReducer } from '../lib';

import INIT_STATE from './state';

const roomReducer = {
  setRoomName: (state, name) => ({
    ...state,
    name,
  }),
  setRoomCode: (state, code) => ({
    ...state,
    code,
  }),
  setRoomAsPrivate: state => ({
    ...state,
    isPrivate: true,
  }),
  setRoomAsPublic: state => ({
    ...state,
    isPrivate: false,
  }),
  fetchRoomLoading: state => ({
    ...state,
    loading: true,
  }),
  fetchRoomError: (state, error) => ({
    ...state,
    error,
    loading: false,
  }),
  fetchRoomSuccess: (state, room) => ({
    ...state,
    name: room.name,
    code: room.code,
    loading: false,
  }),
};

export default wrapReducer(roomReducer, INIT_STATE);
