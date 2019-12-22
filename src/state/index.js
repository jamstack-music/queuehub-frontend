import React, {
  useState, useContext, useEffect, useMemo,
} from 'react';
import { combineReducers } from 'redux';
import MembersReducer from './Members/reducer';
import SongsReducer from './Songs/reducer';
import RoomReducer from './Room/reducer';

export const rootReducer = combineReducers({
  members: MembersReducer,
  songs: SongsReducer,
  room: RoomReducer,
});

export const ReduxContainer = React.createContext();

function useStoreState() {
  const appStore = useContext(ReduxContainer);
  const [state, setState] = useState(appStore);

  appStore.subscribe(() => {
    setState(appStore.getState());
  });

  return state;
}

export function useDispatch() {
  const appStore = useContext(ReduxContainer);
  const dispatch = useMemo(() => appStore.dispatch, [appStore.dispatch]);

  return dispatch;
}

export function useSelector(selector) {
  const storeState = useStoreState();
  const [value, setValue] = useState(selector(storeState));

  useEffect(() => {
    const newValue = selector(storeState);
    if (newValue !== value) {
      setValue(newValue);
    }
  }, [selector, storeState, value]);

  return value;
}
