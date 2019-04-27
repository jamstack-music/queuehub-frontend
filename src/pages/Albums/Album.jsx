import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { Subscribe } from 'unstated';

import { addSong as addSongRemote } from '../../data/api';
import extractAlbum from '../../data/extractors/album';
import { spotify } from '../../data/spotify';
import RoomContainer from '../../store/room';

import AddList from '../../components/Songs/AddList';
import AlbumCover from '../../components/Album';

const Album = (props) => {
  const {
    match,
  } = props;

  const [album, setAlbum] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    spotify.getAlbum(match.params.id).then((res) => {
      const newAlbum = extractAlbum(res);

      setAlbum(newAlbum);
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
  return (
    <Subscribe to={[RoomContainer]}>
      {
        room => (
          <div style={{ width: '100%' }}>
            <AlbumCover dim={250} {...album} />
            <AddList
              style={{ width: '100%' }}
              songs={album.songs}
              onAdd={song => addSong(room, song)}
            />
          </div>
        )
      }
    </Subscribe>
  );
};

export default Album;
