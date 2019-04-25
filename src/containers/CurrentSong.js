import React from 'react';
import Column from '../components/Column';

const CurrentSong = (props) => {
  const {
    title,
    artist,
    images,
  } = props;


  const thumbnail = images[0].url;
  return (
    <Column style={{ margin: '10px 0' }}>
      <img src={thumbnail} alt={thumbnail} style={{ width: 200, height: 200 }} />
      <div style={{ fontSize: 20, fontWeight: 'bold', margin: '5px 0' }}>{title}</div>
      <div style={{ fontSize: 16, color: '#3C3C3C', margin: '3px 0' }}>{artist}</div>
    </Column>
  );
};

CurrentSong.defaultProps = {
  title: '--',
  artist: '--',
  images: [{ url: 'https://placeholder.com/200' }],
};
export default CurrentSong;
