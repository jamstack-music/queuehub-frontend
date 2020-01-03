/* global document */
import React, { useState, useCallback, useMemo } from 'react';
import ToastContext from './context';
import Toast from './index';

const DEFAULT_STYLE = {
  position: 'absolute',
  zIndex: 9000,
};

/* Credit to Hristo Enev:
   https://medium.com/javascript-in-plain-english/react-custom-toast-notification-component-from-scratch-adccd1c452b8
*/
function generateUEID() {
  let first = (Math.random() * 46656) | 0;
  let second = (Math.random() * 46656) | 0;
  first = (`000${first.toString(36)}`).slice(-3);
  second = (`000${second.toString(36)}`).slice(-3);

  return first + second;
}

const ToastProvider = (props) => {
  const { children } = props;

  const [toasts, setToasts] = useState([]);

  const add = useCallback((message) => {
    const id = generateUEID();

    setToasts((t) => [...t, { id, message }]);
  }, []);

  const remove = useCallback((toastId) => (
    setToasts((t) => t.filter(({ id }) => id !== toastId))
  ), []);

  const producedToasts = useMemo(() => (
    <div className="toasts-container" style={DEFAULT_STYLE}>
      {toasts.map((toast) => <Toast key={toast.id} onRemove={remove} {...toast} />)}
    </div>
  ), [remove, toasts]);

  return (
    <ToastContext.Provider value={add}>
      {producedToasts}
      {children}
    </ToastContext.Provider>

  );
};

export default ToastProvider;
