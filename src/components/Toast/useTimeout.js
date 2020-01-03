import { useRef, useEffect } from 'react';

function useTimeout(callback, duration) {
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      callback();
    }, duration);

    return () => clearTimeout(timerRef.current);
  }, [callback, duration]);
}

export default useTimeout;
