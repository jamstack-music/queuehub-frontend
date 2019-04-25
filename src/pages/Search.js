import React, { useState, useEffect } from 'react';
import { Subscribe } from 'unstated';
import { useAlert } from 'react-alert';
import { spotify } from '../data/spotify';
import AddList from '../components/Songs/AddList';
import SearchBar from '../components/SearchBar';
import extractSong from '../data/extractors/song';
import { RoomContainer } from '../store/room';
import { addSong as addSongRemote } from '../data/api';

const Search = () => {
  const alert = useAlert();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const addSong = (room, song) => {
    if (room.state.queue.find(({ id }) => id === song.id)) {
      alert.error('This song is already in the queue!');
    } else {
      addSongRemote(room.state.name, song).then((res) => {
        alert.success('Song added to queue!');
      });
    }
  };
  useEffect(() => {
    spotify.searchTracks(query, { market: 'US' }).then((results) => {
      const { tracks: { items } } = results;

      const searchResults = items.map(song => extractSong(song));

      setResults(searchResults);
    }).catch(({ status }) => {
      if (status === 400) setResults([]);
    });
  }, [query]);

  return (
    <Subscribe to={[RoomContainer]}>
      {
        room => (
          <div>
            <SearchBar onChange={e => setQuery(e.target.value)} />
            <AddList
              onAdd={song => addSong(room, song)}
              style={{ marginTop: '3em' }}
              songs={results}
            />
          </div>
        )
      }
    </Subscribe>
  );
};

export default Search;
