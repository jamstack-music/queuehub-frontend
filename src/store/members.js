import { useReducer } from 'react';

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'init':
      const { members } = action.payload
      return members;
    case 'add':
      return [...state, action.payload];
    default:
      throw new Error();
  }
}

function useMembers() {
  return useReducer(reducer, initialState);
}

export default useMembers;
