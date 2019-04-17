import React, { useEffect, useState } from 'react'
import { spotify } from '../data/spotify'

import PlaylistLinks from '../components/PlaylistLinks'

const Playlists = (props) => {
  const {
    match
  } = props

  const [playlists, setPlaylists] = useState([])
  useEffect(function init() {
    spotify.getUserPlaylists().then(({ items }) => setPlaylists(items))
  }, [])
  
  return (
    <div style={{ width: '100%' }}>
      <PlaylistLinks 
        playlists={playlists}
        baseUrl={match.url}
      />
    </div>
  )
}

export default Playlists
