import React from 'react';

import { bumpSong } from '../data/api';

import BumpList from '../components/Songs/BumpList';
import CurrentSong from '../components/Songs/CurrentSong';

const CurrentPlaying = (props) => {
  const {
    room,
  } = props;

  const handleBump = song => bumpSong(room.state.name, 'Jim', song.id);

  return (
    <div style={{
      width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
    }}
    >
      <h2>Current Song</h2>
      {
        Object.keys(room.state.currentSong).length !== 0 ? (
          <CurrentSong {...room.state.currentSong} />
        ) : (
          <h3>No Song</h3>
        )
      }
      <h3>Current Queue</h3>
      <BumpList
        songs={room.state.queue}
        onBump={handleBump}
      />
    </div>
  );
};

export default CurrentPlaying;
