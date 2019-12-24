import React from 'react';

import { bumpSong } from '../data/api';

import { useSelector } from '../state';
import BumpList from '../components/Songs/BumpList';
import CurrentSong from '../components/Songs/CurrentSong';

const renderCurrentSong = currentSong => (
  currentSong
    ? <CurrentSong {...currentSong} />
    : <h3>No song currently playing</h3>
);

const CurrentPlaying = () => {
  const currentSong = useSelector(s => s.songs.current);
  const queue = useSelector(s => s.songs.queue);
  const roomName = useSelector(s => s.room.name);

  const handleBump = song => bumpSong(roomName, 'Jim', song.id);

  return (
    <div style={{
      width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
    }}
    >
      <h2>Current Song</h2>
      { renderCurrentSong(currentSong) }
      <h3>Current Queue</h3>
      <BumpList
        songs={queue}
        onBump={handleBump}
      />
    </div>
  );
};

export default CurrentPlaying;
