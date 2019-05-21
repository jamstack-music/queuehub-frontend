import { useReducer } from 'react';

const initialState = [];

function init(store) {
  const { members } = store;
  return members;
}

function reducer(state, action) {
  switch (action.type) {
    case 'init':
      return init(action.payload);
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
