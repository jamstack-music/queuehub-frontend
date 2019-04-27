import React, { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';

import { addSong as addSongRemote } from '../data/api';
import extractSong from '../data/extractors/song';
import { spotify } from '../data/spotify';

import AddList from '../components/Songs/AddList';
import SearchBar from '../components/SearchBar';

const addSong = (alert, room, song) => {
  if (room.state.queue.find(({ id }) => id === song.id)) {
    alert.error('This song is already in the queue!');
  } else {
    addSongRemote(room.state.name, song).then(() => {
      alert.success('Song added to queue!');
    });
  }
};

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

const Search = (props) => {
  const {
    room,
  } = props;

  const alert = useAlert();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    searchSpotify(query, setResults);
  }, [query]);

  const handleAdd = song => addSong(alert, room, song);
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
