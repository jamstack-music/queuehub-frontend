import React, { useMemo } from 'react';

const Queue = (props) => {
  const { songs, onBump } = props;

  const songList = useMemo(() => {
    songs.map((song) => (
      <li key={song.id}>
        <div>{song.title}</div>
        <div>{song.artist}</div>
        <button type="button" id="bump-song" value={song.id} onClick={onBump}>Bump</button>
      </li>
    ));
  }, [onBump, songs]);

  return (
    <div>
      { songList }
    </div>
  );
};

export default Queue;
