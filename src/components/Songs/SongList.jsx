import React from 'react';

import Song from './Song';

const createSongs = songs => songs.map(song => <Song key={song.id} {...song} />);

const SongList = (props) => {
  const {
    children,
    songs,
    style,
  } = props;

  const render = children || createSongs(songs);

  return (
    <div style={{ width: '100vw', ...style }}>
      { render }
    </div>
  );
};

export default SongList;
