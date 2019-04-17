import React, { useEffect, useState } from 'react'
import { spotify } from '../data/spotify'

const Playlist = (props) => {
  const {
    match
  } = props 
  
  const [playlist, setPlaylist] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(function retreive(){
    spotify.getPlaylist(match.params.id).then(res => {
      setPlaylist(res)
      setLoading(false)
    })
  }, [])
  

  if(loading) {
    return <div>Loading...</div>
  } else {
    const playlistImg = playlist.images[0].url
    return (
      <div>
        <img src={playlistImg} alt={playlistImg} />
        <div>{playlist.name}</div>
      </div>
    )
  } 
}

export default Playlist
