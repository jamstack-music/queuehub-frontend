import React from 'react';
import uuidv4 from 'uuid/v4';

import withBump from '../../hocs/withBump';

import Song from './Song';
import SongList from './SongList';

const SongBump = withBump(Song);
const createSongs = (songs, handleBump) => songs.map(song => (
  <SongBump
    key={uuidv4()}
    data={song}
    onBump={handleBump}
  />
));

const BumpList = (props) => {
  const {
    songs,
    style,
    onBump,
  } = props;

  const handleBump = song => onBump(song);

  const songlist = createSongs(songs, handleBump);

  return (
    <SongList style={style}>
      { songlist }
    </SongList>
  );
};

export default BumpList;
