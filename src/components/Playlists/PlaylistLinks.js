import React from 'react'
import { Link } from 'react-router-dom'

import PlaylistLink from './PlaylistLink'

const PlaylistLinks = (props) => {
  const {
    playlists,
    baseUrl,
    style,
  } = props

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', flexDirection: 'row', flexWrap: 'wrap', ...style }}>
      {
        playlists.map(pl => (
          <Link key={pl.id} to={`${baseUrl}/${pl.id}`} style={{ color: 'black', textDecoration: 'none' }}>
            <PlaylistLink {...pl} />
          </Link>
        ))
      }
    </div>
  )
}

export default PlaylistLinks
