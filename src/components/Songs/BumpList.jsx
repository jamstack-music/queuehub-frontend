import React from 'react';
import uuidv4 from 'uuid/v4';

import BumpButton from '../BumpButton';
import Song from './Song';
import SongList from './SongList';

const BumpList = (props) => {
  const {
    songs,
    style,
    onBump,
  } = props

  return (
    <SongList style={style}>
      {
        songs.map(song => (
          <Song key={uuidv4()} {...song}>
            <BumpButton
              disabled={song.alreadyBumped}
              onClick={() => onBump(song)}
            >
              {song.bumps || 0}
            </BumpButton>
          </Song>
        ))
      }
    </SongList>
  );
};

export default BumpList;
