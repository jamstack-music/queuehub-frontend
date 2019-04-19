import React from 'react'

const CurrentSong = (props) => {
  const {
    title,
    artist,
    images,
  } = props
  

  const album = images[0].url

  return (
    <div>
      <img src={album} alt={album} style={{ width: 200, height: 200 }}/>  
      <h2>{title}</h2>
      <h3>{artist}</h3>
    </div>
  )
}

CurrentSong.defaultProps = {
  title: '---',
  artist: '---',
  images: [{url: 'https://via.placeholder.com/200'}]
}

export default CurrentSong
