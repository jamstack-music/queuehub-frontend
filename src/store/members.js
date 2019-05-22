import { useReducer } from 'react';

const initialState = {
  current: {},
  others: [],
};

function init(store, current) {
  const { members } = store;

  const others = members.filter(mem => mem.id !== current.id);
  
  return {
    others,
    current,
  };
}

function reducer(state, action) {
  switch (action.type) {
    case 'init':
      return init(action.payload, action.current)
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
