import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import { 
  IoIosSearch as SearchIcon,
  IoIosMusicalNotes as CurrentPlayingIcon,
  IoMdPeople as MembersIcon
} from 'react-icons/io'

import styled from 'styled-components'
import { RoomContainer } from '../store/room'
import { Subscribe } from 'unstated'
import Nav from '../components/Nav'
import StoreMiddleWare from '../containers/StoreMiddleWare'
import CurrentPlaying from './CurrentPlaying'
import Members from './Members'
import Search from './Search'
import NotFound from './NotFound'


const View = styled.div`
  padding-bottom: 40px;
`

const Room = ({ match }) => { 
  return (
    <Subscribe to={[RoomContainer]}>
      {
        room => (
          <StoreMiddleWare room={room} roomID={match.params.id}>
            <View>
              <Nav>
                <NavLink exact to={`${match.url}`}><CurrentPlayingIcon size='1.5em'/></NavLink>
                <NavLink to={`${match.url}/members`}><MembersIcon size='1.5em'/></NavLink>
                <NavLink to={`${match.url}/search`}><SearchIcon size='1.5em'/></NavLink>
              </Nav>
              <Switch>
                <Route exact path={`${match.url}`} component={CurrentPlaying} />
                <Route path={`${match.url}/members`} component={Members} />
                <Route path={`${match.url}/search`} component={Search} />
                <Route component={NotFound} /> 
              </Switch>
            </View>
          </StoreMiddleWare>
        )
      }
    </Subscribe>
  )
}

export default Room
