import React from 'react';
import { useSelector } from 'AppState/react';

const CurrentlyPlaying = () => {
  const currentSong = useSelector((s) => s.songs.current);

  if (!currentSong) {
    return <div>No songs in the queue</div>;
  }

  return (
    <div>
      <div>Currently Playing</div>
      <image url="https://placeholder.com/200" />
      <button type="button" id="like-song">Like</button>
      <button type="button" id="vote-skip-song">skip</button>
    </div>
  );
};

export default CurrentlyPlaying;
