import { wrapReducer } from '../lib';

import INIT_STATE from './state';

const membersReducer = {
  addMember: (state, member) => ({
    ...state,
    all: [...state.all, member],
  }),
  fetchRoomSuccess: (state, room) => ({
    ...state,
    all: room.members,
  }),
};

export default wrapReducer(membersReducer, INIT_STATE);
