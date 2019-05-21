import React, { useState } from 'react';
import styled from 'styled-components';
import { visible } from 'ansi-colors';

const Image = (props) => {
  const { 
    src,
    alt,
    fallback,
    style,
  } = props;

  const [loading, setLoading] = useState(true);

  const handleOnLoad = () => setLoading(false);
  return (
    <>
      { loading && <img src={fallback} style={style}/> }
      <img onLoad={handleOnLoad} src={src} style={{...style, display: `${ loading ? 'none' : 'block' }`}}/>
    </>
  )
}

export default Image;
