import { wrapReducer } from '../lib';

import INIT_STATE from './state';

const membersReducer = {
  addMember: (state, member) => ({
    ...state,
    members: [...state.members, member],
  }),
  initMembers: state => state,
};

export default wrapReducer(membersReducer, INIT_STATE);
