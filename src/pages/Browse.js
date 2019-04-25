import React from 'react'
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'
import BrowseNav from '../components/BrowseNav'
import Playlist from './Playlists/Playlist'
import Playlists from './Playlists/Playlists'
import Album from './Albums/Album'
import Albums from './Albums/Albums'
import NotFound from './NotFound'

const Browse = (props) => {
  const {
    match
  } = props

  return (
    <div style={{ paddingTop: '50px' }}>
      <BrowseNav>
        <NavLink to={`${match.url}/playlists`}>Playlists</NavLink>
        <NavLink to={`${match.url}/albums`}>Albums</NavLink>
      </BrowseNav>
      <Switch>
        <Redirect exact from={`${match.url}`} to={`${match.url}/playlists`} />
        <Route exact path={`${match.url}/playlists`} component={Playlists} />
        <Route path={`${match.url}/playlists/:id`} component={Playlist} />
        <Route exact path={`${match.url}/albums`} component={Albums} />
        <Route path={`${match.url}/albums/:id`} component={Album} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default Browse
