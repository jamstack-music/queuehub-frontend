import React, { useEffect, useState } from 'react'
import { spotify } from '../data/spotify'

import PlaylistLinks from '../components/Playlists/PlaylistLinks'

const Playlists = (props) => {
  const {
    match
  } = props

  const [playlists, setPlaylists] = useState([])
  useEffect(function init() {
    spotify.getUserPlaylists().then(({ items }) => setPlaylists(items))
  }, [])
  
  return (
    <div style={{ columnCount: 2 }}>
      <PlaylistLinks 
        playlists={playlists}
        baseUrl={match.url}
      />
    </div>
  )
}

export default Playlists
