import React, { useState, useEffect } from 'react';

import useSongAdder from '../hooks/useSongAdder';
import extractSong from '../data/extractors/song';
import { spotify } from '../data/spotify';

import AddList from '../components/Songs/AddList';
import SearchBar from '../components/SearchBar';

const searchSpotify = (query, setResults) => {
  if (query === '') {
    setResults([]);
    return;
  }

  spotify.searchTracks(query, { market: 'US' }).then((res) => {
    const { tracks: { items } } = res;

    const searchResults = items.map(song => extractSong(song));
    setResults(searchResults);
  }).catch(({ status }) => {
    if (status === 400) setResults([]);
  });
};

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const addSong = useSongAdder();

  useEffect(() => {
    searchSpotify(query, setResults);
  }, [query]);

  const handleAdd = song => addSong(song);
  return (
    <div>
      <SearchBar onChange={setQuery} />
      <AddList
        onAdd={handleAdd}
        style={{ marginTop: '3em' }}
        songs={results}
      />
    </div>
  );
};

export default Search;
