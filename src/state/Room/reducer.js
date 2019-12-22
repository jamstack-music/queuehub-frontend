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
  initRoom: state => state,
};

export default wrapReducer(roomReducer, INIT_STATE);
