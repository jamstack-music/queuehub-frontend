import React, { useEffect, useState } from 'react'
import { spotify } from '../data/spotify'
import { addSong } from '../data/api'
import { Subscribe } from 'unstated'
import { RoomContainer } from '../store/room'

import extractPlaylist from '../data/extractors/playlist'
import AddList from '../components/Songs/AddList'

const Playlist = (props) => {
  const {
    match
  } = props 
  
  const [playlist, setPlaylist] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(function retreive(){
    spotify.getPlaylist(match.params.id).then(res => {
      const playlist = extractPlaylist(res)
      setPlaylist(playlist)

      setLoading(false)
    })
  }, [])
  

  if(loading) {
    return <div>Loading...</div>
  } else {
    const playlistImg = playlist.images[0].url
    return (
      <Subscribe to={[RoomContainer]}>
        {
          room => (
            <div style={{ width: '100%' }}>
              <img src={playlistImg} alt={playlistImg} style={{ width: 250, height: 250 }}/>
              <div>{playlist.name}</div>
              <AddList 
                style={{ width: '100%' }}
                songs={playlist.songs}
                onAdd={song => addSong(room.state.name, song)}
              />
            </div>
          )
        }
      </Subscribe>
    )
  } 
}

export default Playlist
