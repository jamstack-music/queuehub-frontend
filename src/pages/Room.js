import React, { useEffect } from 'react'
import { Subscribe } from 'unstated'
import { RoomContainer } from '../store/room'
import axios from 'axios'

const Room = ({ match }) => { 
  
  useEffect(function init() {
    const eventSource = new EventSource('http://34.219.153.198:5000/stream')

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
    <Subscribe to={[RoomContainer]}>
      {room =>
        <div>This is a room for { match.params.id }</div>
      }
    </Subscribe>
  )
}

export default Room
