import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { Subscribe } from 'unstated';

import { addSong as addSongRemote } from '../../data/api';
import extractPlaylist from '../../data/extractors/playlist';
import { spotify } from '../../data/spotify';
import RoomContainer from '../../store/room';

import AddList from '../../components/Songs/AddList';

const Playlist = (props) => {
  const {
    match,
  } = props;

  const [playlist, setPlaylist] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    spotify.getPlaylist(match.params.id).then((res) => {
      const newPlaylist = extractPlaylist(res);

      setPlaylist(newPlaylist);
      setLoading(false);
    });
  }, []);

  const alert = useAlert();
  const addSong = (room, song) => {
    if (room.state.queue.find(({ id }) => id === song.id)) {
      alert.error('This song is already in the queue!');
    } else {
      addSongRemote(room.state.name, song).then(() => {
        alert.success('Song added to queue!');
      });
    }
  };

  if (loading) return <div>Loading...</div>;

  const playlistImg = playlist.images[0].url;
  return (
    <Subscribe to={[RoomContainer]}>
      {
        room => (
          <div style={{ width: '100%' }}>
            <img src={playlistImg} alt={playlistImg} style={{ width: 250, height: 250 }} />
            <div>{playlist.name}</div>
            <AddList
              style={{ width: '100%' }}
              songs={playlist.songs}
              onAdd={song => addSong(room, song)}
            />
          </div>
        )
      }
    </Subscribe>
  );
};

export default Playlist;
