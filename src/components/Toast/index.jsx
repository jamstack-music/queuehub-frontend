import React, { useCallback } from 'react';
import useTimeout from './useTimeout';

const DEFAULT_STYLE = {
  position: 'relative',
  border: '1px solid black',
  padding: '10px',
  marginTop: '10px',
  alignSelf: 'center',
};

const Toast = (props) => {
  const {
    id,
    onRemove,
    message,
    duration = 2000,
    style = DEFAULT_STYLE,
  } = props;

  const removeToast = useCallback(() => onRemove(id), [id, onRemove]);

  useTimeout(() => removeToast(), duration);

  return (
    <div className="toast-container" style={style}>
      <div className="toast-message">
        {message}
      </div>
      <button type="button" onClick={removeToast}>X</button>
    </div>
  );
};

export default Toast;
