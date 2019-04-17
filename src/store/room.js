import React, { useEffect } from 'react'
import { Container, Provider } from 'unstated'

export class RoomContainer extends Container {
  state = {
		currentSong: {},
		queue: [],
		members: [],
    name: 'fun-room'
  }

  initRoom = store => {
    const { current_song, ...rest } = store
    this.setState(prevState => ({...prevState, ...rest, currentSong: current_song}))
  }

  setName = name => this.setState({name })
  addToQueue = song => {
    this.setState(prevState => ({
      queue: [...prevState.queue, song]
    }))
  }

  nextSong = () => {
    if(this.state.queue.length > 0) {
      this.setState(prevState => ({
        currentSong: prevState.queue[0], 
        queue: prevState.queue.slice(1, prevState.queue.length)
      }))
    }
  }

  addMember = member => {
    this.setState(prevState => ({
      members: [...prevState.members, member]
    }))
  }
}

export const RoomProvider = ({children}) => {
  const room = new RoomContainer()
 
  useEffect(function init() {
    
    let eventSource = new EventSource('http://34.219.153.198:5000/stream')

    eventSource.addEventListener('greeting', function() {
      console.log('hello')
    })

    eventSource.addEventListener('song', function({data}) {
      const { song } = JSON.parse(data)
      room.addToQueue(song)
    })

    eventSource.addEventListener('next', function() {
      console.log('next message received')
      room.nextSong()
    })
  }, [])
  
  return (
    <Provider inject={[room]}>
      {children}
    </Provider>
  )
}
