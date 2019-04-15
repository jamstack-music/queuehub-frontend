import React from 'react'
import Detail from './Detail'

const Song = (props) => {
  const {
    title,
    artist,
    images: [,,{
      url: albumUrl
    }],
  } = props
  
  return (
    <>
      <Detail><img alt={albumUrl} src={albumUrl} style={{width: 30, height: 30}}/></Detail>
      <Detail>{title}</Detail>
      <Detail>{artist}</Detail>
    </>
  )
}

export default Song
