import React, { memo, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Background = styled.div`
  background-color: #DBDAED;
  width: ${props => props.dim}px;
  height: ${props => props.dim}px;
`;

const Img = styled.img`
  display: ${props => (props.loading ? 'none' : 'inline-block')};
  width: ${props => props.dim}px;
  height: ${props => props.dim}px;
  animation: ${props => !props.loading && fadeIn};
  animation-duration: 0.75s;
  animation-timing-function: ease-in-out;
`;

const Image = (props) => {
  const {
    src,
    alt,
    dim = 130,
    style,
  } = props;

  const [loading, setLoading] = useState(true);
  const handleLoad = () => setLoading(false);
  return (
    <Background dim={dim}>
      <Img dim={dim} loading={loading} src={src} alt={alt} onLoad={handleLoad} style={style} />
    </Background>
  );
};

export default memo(Image);
