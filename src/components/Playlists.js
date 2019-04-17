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
    <div style={{ width: '100%', ...style }}>
      {
        playlists.map(pl => (
          <Link key={pl.id} to={`${baseUrl}/playlist/${pl.id}`} style={{ textDecoration: 'none' }}>
            <PlaylistLink {...pl} />
          </Link>
        ))
      }
    </div>
  )
}

export default PlaylistLinks
