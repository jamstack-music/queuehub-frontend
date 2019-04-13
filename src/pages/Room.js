import React, { useRef, useEffect } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import axios from 'axios'

import { Subscribe } from 'unstated'
import { RoomContainer } from '../store/room'

import CurrentPlaying from './CurrentPlaying'
import Members from './Members'
import Search from './Search'
import NotFound from './NotFound'

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
      console.log(eventSource)
      eventSource.removeAllListeners()
      eventSource.close()
    }
  },[])

  return (
    <Subscribe to={[RoomContainer]}>
      {room =>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Link to={`${match.url}`}>Current Playing </Link>
          <Link to={`${match.url}/members`}>Members</Link>
          <Link to={`${match.url}/search`}>Search</Link>
          <Switch>
            <Route exact path={`${match.url}`} component={CurrentPlaying} />
            <Route path={`${match.url}/members`} component={Members} />
            <Route path={`${match.url}/search`} component={Search} />
            <Route component={NotFound} /> 
          </Switch>
        </div>
      }
    </Subscribe>
  )
}

export default Room
