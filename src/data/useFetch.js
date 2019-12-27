import { useState, useCallback } from 'react';

import { authorize } from 'API/spotify';

function useFetch() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetch = useCallback((request, ...args) => {
    setIsLoading(true);
    return request(...args)
      .then(({ data: newData }) => newData)
      .catch((e) => {
        if (e.response.status === 401) {
          authorize();
        }
        setError(e.response.data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return {
    fetch,
    error,
    isLoading,
  };
}

export default useFetch;
