import React from 'react';

import withLoader from '../../hocs/withLoader';
import extractPlaylist from '../../data/extractors/playlist';
import { spotify } from '../../data/spotify';
import useSongAdder from '../../hooks/useSongAdder';
import AddList from '../../components/Songs/AddList';

const Playlist = (props) => {
  const {
    data: playlist,
  } = props;

  const addSong = useSongAdder();
  const handleAdd = song => addSong(song);

  const playlistImg = playlist.images[0].url;
  return (
    <div style={{ width: '100%' }}>
      <img src={playlistImg} alt={playlistImg} style={{ width: 250, height: 250 }} />
      <div>{playlist.name}</div>
      <AddList
        style={{ width: '100%' }}
        songs={playlist.songs}
        onAdd={handleAdd}
      />
    </div>
  );
};

const loader = match => spotify.getPlaylist(match.params.id).then(res => extractPlaylist(res));

export default withLoader(Playlist, loader);
