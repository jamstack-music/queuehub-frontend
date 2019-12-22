import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Image from './Image';
import albumImg from '../assets/Music Note (Large).png';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.5em;
`;

const Name = styled.div`
 margin: 0.5em;
 font-weight: bold;
 text-align: center;
`;

const Album = (props) => {
  const {
    dim = 130,
    name,
    artist,
    images,
  } = props;

  const thumbnail = images[0].url;
  return (
    <Layout>
      <Image src={thumbnail} alt={albumImg} fallback={albumImg} dim={dim} />
      <Name>{name}</Name>
      <div>{artist}</div>
    </Layout>
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

export default Album;
