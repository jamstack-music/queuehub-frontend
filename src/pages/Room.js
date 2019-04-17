import React, { useRef, useEffect } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import { 
  IoIosSearch as SearchIcon,
  IoIosMusicalNotes as CurrentPlayingIcon,
  IoMdPeople as MembersIcon
} from 'react-icons/io'

import axios from 'axios'
import styled from 'styled-components'

import Nav from '../components/Nav'

import CurrentPlaying from './CurrentPlaying'
import Members from './Members'
import Search from './Search'
import NotFound from './NotFound'


const View = styled.div`
  padding-bottom: 40px;
`

const Room = ({ match }) => { 
  let eventSource = useRef(null) 

  useEffect(function init() {
    eventSource = new EventSource('http://34.219.153.198:5000/stream')

    eventSource.addEventListener('greeting', function(event) {
      alert('member added')
    }, false)

    axios.get('http://34.219.153.198:5000/create/100').then(res => {
      console.log('Store connected')
    })

    return function unMount() {
      eventSource.removeAllListeners()
      eventSource.close()
    }
  },[])

  return (
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
  )
}

export default Room
