import React, { memo } from 'react';

const CurrentlyPlaying = (props) => {
  const { song, onLike, onSkip } = props;

  return (
    <div>
      <div>Currently Playing</div>
      <image url="https://placeholder.com/200" />
      <div>{song.title}</div>
      <div>{song.artist}</div>
      <div>{song.addedBy}</div>
      <button onClick={onLike} type="button" id="like-song">Like</button>
      <button onClick={onSkip} type="button" id="vote-skip-song">skip</button>
    </div>
  );
};

export default memo(CurrentlyPlaying);
