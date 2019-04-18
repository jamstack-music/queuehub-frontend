import React from 'react'

const PlaylistLink = (props) => {
  const {
    name,
    images,
  } = props
  
  const thumbnail = images[0].url
  return (
    <div style={{ display: 'flex', wordWrap: 'break-word', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '0.5em'}}>
      <img src={thumbnail} alt={thumbnail} style={{ width: 130, height: 130 }} /> 
      <div style={{ marginTop: '0.5em' }}>{name}</div>
    </div>
  )
}

export default PlaylistLink
