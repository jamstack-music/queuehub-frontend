import { wrapReducer } from '../lib';

import INIT_STATE from './state';

const membersReducer = {
  addMember: (state, member) => ({
    ...state,
    all: [...state.all, member],
  }),
  initMembers: state => state,
};

export default wrapReducer(membersReducer, INIT_STATE);
