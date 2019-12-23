import React, {
  useState,
  useContext,
  useEffect,
  useMemo,
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

export function useDispatch() {
  const appStore = useContext(ReduxContainer);
  const dispatch = useMemo(() => appStore.dispatch, [appStore.dispatch]);

  return dispatch;
}

const defaultEquality = (a, b) => a === b;
export function useSelector(selector, equalityFxn = defaultEquality) {
  const appStore = useContext(ReduxContainer);
  const value = selector(appStore.getState());
  const [currentValue, setCurrentValue] = useState(value);

  useEffect(() => {
    appStore.subscribe(() => {
      const nextState = appStore.getState();
      const nextValue = selector(nextState);

      if (!equalityFxn(currentValue, nextValue)) {
        setCurrentValue(nextValue);
      }
    });
  }, [appStore, currentValue, equalityFxn, selector]);

  return currentValue;
}
