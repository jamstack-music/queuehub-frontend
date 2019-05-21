import React from 'react';

import extractAlbum from '../../data/extractors/album';
import { spotify } from '../../data/spotify';
import useSongAdder from '../../hooks/useSongAdder';

import withLoader from '../../hocs/withLoader';
import AddList from '../../components/Songs/AddList';
import AlbumCover from '../../components/Album';

const Album = (props) => {
  const {
    data: album,
  } = props;

  const addSong = useSongAdder();
  const handleAdd = song => addSong(song);

  return (
    <div style={{ width: '100%' }}>
      <AlbumCover dim={250} {...album} />
      <AddList
        style={{ width: '100%' }}
        songs={album.songs}
        onAdd={handleAdd}
      />
    </div>
  );
};

const loader = match => spotify.getAlbum(match.params.id).then(res => extractAlbum(res));

export default withLoader(Album, loader);
