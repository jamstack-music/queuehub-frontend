import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Playlists from './Playlists'
import Playlist from './Playlist'

const Browse = (props) => {
  const {
    match
  } = props

  return (
    <Switch>
      <Route path={`${match.url}/playlists/:id`} component={Playlist} />
      <Route path={`${match.url}/playlists`} component={Playlists} />
    </Switch>
  )
}

export default Browse
