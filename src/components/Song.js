import React from 'react'
import Detail from './Detail'

const Song = (props) => {
  const {
    title,
    artist,
    images,
  } = props
  
  const thumbnail = images[images.length - 1].url
  
  return (
    <>
      <Detail style={{ width: '10%' }}><img alt={thumbnail} src={thumbnail} style={{width: 30, height: 30}}/></Detail>
      <Detail style={{ width: '20%' }}>{title}</Detail>
      <Detail style={{ width: '20%', fontSize: '12px', color: '#3C3C3C' }}>{artist}</Detail>
    </>
  )
}

export default Song
