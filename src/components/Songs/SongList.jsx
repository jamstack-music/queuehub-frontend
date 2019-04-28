import React, { memo } from 'react';
import uuidv4 from 'uuid/v4';

import Song from './Song';

const createSongs = songs => songs.map(song => <Song key={uuidv4()} {...song} />);

const SongList = (props) => {
  const {
    children,
    songs,
    style,
  } = props

  const render = children || createSongs(songs);

  return (
    <div style={{ width: '100vw', ...style }}>
      { render }
    </div>
  );
};

const shouldUpdate = (prev, next) => {
  if (prev.children) return prev.children === next.children;

  return prev.songs === next.songs;

};

export default memo(SongList, shouldUpdate);
