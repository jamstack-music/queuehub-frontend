import React from 'react'
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
 
  return (
    <Provider inject={[room]}>
      {children}
    </Provider>
  )
}
