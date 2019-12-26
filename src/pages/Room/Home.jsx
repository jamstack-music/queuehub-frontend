import React, { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'AppState/react';
import { useRoomChannel } from 'Components/RoomChannel';

import CurrentlyPlaying from 'Components/CurrentlyPlaying';
import Queue from 'Components/Queue';

const Home = () => {
  const dispatch = useDispatch();
  const channel = useRoomChannel();

  const currentSong = useSelector((s) => s.songs.current);
  const queue = useSelector((s) => s.songs.queue);

  const handleBump = useCallback((songId) => {
    dispatch({ type: 'bumpSong', payload: songId });
    channel.emit('bumpSong', songId);
  }, [dispatch, channel]);

  const handleSkip = useCallback(() => {
    dispatch({ type: 'skipSong' });
    channel.emit('skip');
  }, [dispatch, channel]);

  const handleLike = useCallback(() => {
    dispatch({ type: 'likeSong' });
    channel.emit('likeSong');
  }, [dispatch, channel]);

  const currentSongComp = useMemo(() => (
    currentSong
      ? <CurrentlyPlaying onLike={handleLike} onSkip={handleSkip} song={currentSong} />
      : <div>No Song playing</div>
  ), [currentSong, handleLike, handleSkip]);

  return (
    <div>
      { currentSongComp }
      <Queue songs={queue} onBump={handleBump} />
    </div>
  );
};

export default Home;
