import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Image from '../components/Image';
import albumImg from '../assets/Music Note (Large).png';

const Album = (props) => {
  const {
    dim = 130,
    name,
    artist,
    images,
  } = props;

  const thumbnail = images[0].url;
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '0.5em',
    }}
    >
      <Image src={thumbnail} alt={albumImg} fallback={albumImg} style={{ width: dim, height: dim }} />
      <div style={{ margin: '0.5em', fontWeight: 'bold', textAlign: 'center' }}>{name}</div>
      <div>{artist}</div>
    </div>
  );
};

Album.propTypes = {
  name: PropTypes.string,
  artist: PropTypes.string,
  dim: PropTypes.number,
  images: PropTypes.arrayOf(PropTypes.string),
};

Album.defaultProps = {
  dim: 130,
  name: '--',
  artist: '--',
  images: [{ url: albumImg }],
};

function isSame(prev, next) {
  return prev.key === next.key
}

export default memo(Album, isSame);
