import React, { useState, useMemo, useCallback } from 'react';
import { searchSongs } from 'API/spotify';
import useFetch from 'API/useFetch';

const Search = () => {
  const { fetch, isLoading } = useFetch();
  const [results, setResults] = useState([]);

  const handleQuery = useCallback((e) => {
    const query = e.target.value;

    fetch(searchSongs, query)
      .then((newResults) => {
        if (newResults) setResults(newResults);
      });
  }, [fetch]);

  const searchResults = useMemo(() => {
    if (isLoading) return <div>Loading...</div>;
    if (results.length === 0) return <div>No results</div>;

    return results.map((result) => <div>{result}</div>);
  }, [isLoading, results]);

  return (
    <div>
      <div>Search</div>
      <label htmlFor="search-input">
        <input id="search-input" type="text" onChange={handleQuery} />
      </label>
      { searchResults }
    </div>
  );
};

export default Search;
