/* global window */
import {
  combineReducers,
  applyMiddleware,
  compose,
  createStore as createReduxStore,
} from 'redux';

import thunk from './lib/middleware/thunk';

import MembersReducer from './Members/reducer';
import SongsReducer from './Songs/reducer';
import RoomReducer from './Room/reducer';

export const rootReducer = combineReducers({
  members: MembersReducer,
  songs: SongsReducer,
  room: RoomReducer,
});

export const createStore = () => {
  const composeCreator = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createReduxStore(
    rootReducer,
    composeCreator(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );
};
