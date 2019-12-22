export const wrapReducer = (reducer, INIT_STATE) => (state = INIT_STATE, action) => {
  const { type: actionType, payload } = action;

  return actionType in reducer ? reducer[actionType](state, payload) : state;
}
