const createThunkMiddleWare = extraArg => ({ dispatch, getState }) => next => (action) => {
  if (typeof action === 'function') {
    return action(dispatch, getState, extraArg);
  }
  return next(action);
};

const thunk = createThunkMiddleWare();

export default thunk;
