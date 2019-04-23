import React from 'react'

const Album = (props) => {
  const {
    dim = 130,
    name,
    artist,
    images,
  } = props
  
  const thumbnail = images[0].url
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '0.5em'}}>
      <img src={thumbnail} alt={thumbnail} style={{ width: dim, height: dim }} /> 
      <div style={{ margin: '0.5em', fontWeight: 'bold', textAlign: 'center' }}>{name}</div>
      <div>{artist}</div>
    </div>
  )
}

Album.defaultProps = {
  name: '--',
  artist: '--',
  images: [{ url: 'https//placeholder.com/200' }]
}

export default Album 
