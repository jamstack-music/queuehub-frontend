import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Image from './Image';
import albumImg from '../assets/Music Note (Large).png';

const Container = styled.div`
  display: flex; 
  word-wrap: break-word; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.5em;
`;

const Name = styled.div`
  margin-top: 0.5em;
`;

const Playlist = (props) => {
  const {
    name,
    images,
  } = props;

  const thumbnail = images[0].url;
  return (
    <Container>
      <Image dim={130} src={thumbnail} alt={thumbnail} fallback={albumImg} />
      <Name>{name}</Name>
    </Container>
  );
};

Playlist.propTypes = {
  name: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.any),
};

Playlist.defaultProps = {
  name: '--',
  images: [{ url: 'https//placeholder.com/200' }],
};

export default Playlist;
