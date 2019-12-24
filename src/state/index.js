import {
  compose,
  applyMiddleware,
  combineReducers,
  createStore as createReduxStore,
} from 'redux';

import thunk from './lib/middleware/thunk';

import MembersReducer from './Members/reducer';
import SongsReducer from './Songs/reducer';
import RoomReducer from './Room/reducer';

const rootReducer = combineReducers({
  members: MembersReducer,
  songs: SongsReducer,
  room: RoomReducer,
});

export const createStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createReduxStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(thunk),
    ),
  );
};
