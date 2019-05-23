import React, { memo } from 'react';
import uuidv4 from 'uuid/v4';

import withAdd from '../../hocs/withAdd';

import Song from './Song';
import SongList from './SongList';

const SongAdd = withAdd(Song);

const createSongs = (songs, handleAdd) => songs.map(song => (
  <SongAdd
    key={uuidv4()}
    onAdd={handleAdd}
    data={song}
  />
));

const AddList = (props) => {
  const {
    songs,
    style,
    onAdd,
  } = props;

  const handleAdd = song => onAdd(song);

  const songlist = createSongs(songs, handleAdd);

  return (
    <SongList style={style}>
      { songlist }
    </SongList>
  );
};

const shouldUpdate = (prev, next) => prev.songs === next.songs;

export default memo(AddList, shouldUpdate);
