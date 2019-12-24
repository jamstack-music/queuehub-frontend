import React, {
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { createStore } from './index';

export const ReduxContext = React.createContext();

export const ReduxContainer = (props) => {
  const { children } = props;

  const store = createStore();

  return (
    <ReduxContext.Provider value={store}>
      {children}
    </ReduxContext.Provider>
  );
};

export function useDispatch() {
  const appStore = useContext(ReduxContext);
  const dispatch = useMemo(() => appStore.dispatch, [appStore.dispatch]);

  return dispatch;
}

const defaultEquality = (a, b) => a === b;
export function useSelector(selector, equalityFxn = defaultEquality) {
  const appStore = useContext(ReduxContext);
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
