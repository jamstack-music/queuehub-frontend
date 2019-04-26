import React from 'react';
import uuidv4 from 'uuid/v4';

import Song from './Song';

const SongList = (props) => {
  const {
    children,
    songs,
    style,
  } = props

  return (
    <div style={{ width: '100vw', ...style }}>
      { children && songs.map(song => <Song key={uuidv4()} {...song} />) }
    </div>
  );
};

export default SongList;
