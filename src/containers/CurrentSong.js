import React from 'react'

const CurrentSong = (props) => {
  const {
    title,
    artist,
    images: [{url: album},,]
  } = props
  

  return (
    <div>
      <img src={album} alt={album} style={{ width: 200, height: 200 }}/>  
      <h2>{title}</h2>
      <h3>{artist}</h3>
    </div>
  )
}

export default CurrentSong
