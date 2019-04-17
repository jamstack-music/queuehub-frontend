import React from 'react'
import Row from './Row'

const PlaylistLink = (props) => {
  const {
    name,
    images,
  } = props
  
  const thumbnail = images[0].url
  return (
    <div>
      <img src={thumbnail} alt={thumbnail} style={{ width: 130, height: 130 }} /> 
      <div>{name}</div>
    </div>
  )
}

export default PlaylistLink
