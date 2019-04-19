import React from 'react'
import { Link } from 'react-router-dom'

const Browse = (props) => {
  const {
    match
  } = props

  return (
    <div>
      <h1>Browse</h1>
      <Link to={`${match.url}/playlists`}>Playlists</Link>
      <Link to={`${match.url}/albums`}>Albums</Link>
    </div>
  )
}

export default Browse
