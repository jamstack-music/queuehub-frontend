import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { RoomContainer } from '../store/room'
import { Subscribe } from 'unstated'
import StoreMiddleWare from '../containers/StoreMiddleWare'

import Playlists from './Playlists'
import Playlist from './Playlist'
import Albums from './Albums'
import Album from './Album'

const Browse = (props) => {
  const {
    match
  } = props
  console.log(props)

  return (
    <Subscribe to={[RoomContainer]}>
      {
        room => (
          <StoreMiddleWare room={room} roomID={match.params.id}>
            <Switch>
              <Redirect exact from={`${match.url}`} to={`${match.url}/playlists`} />
              <Route exact path={`${match.url}/playlists`} component={Playlists} />
              <Route path={`${match.url}/playlists/:id`} component={Playlist} />
              <Route exact path={`${match.url}/albums`} component={Albums} />
              <Route path={`${match.url}/albums/:id`} component={Album} />
            </Switch>
          </StoreMiddleWare>
        )  
      }
    </Subscribe>
  )
}

export default Browse
