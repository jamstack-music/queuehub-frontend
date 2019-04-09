import React, { useEffect } from 'react'
import { Container, Provider } from 'unstated'
import axios from 'axios'

export class RoomContainer extends Container {
  state = {
    queue: [], 
    currentSong: {},
    members: [],
    public: true,
    password: ''
  }

  initStore = store => this.setState(store)

  addToQueue = song => this.setState(prevState => ({
    queue: prevState.queue.insert(0, song)
  }))

  nextSong = () => {
    if(this.state.queue.length > 0) {
      this.setState(prevState => ({
        currentSong: prevState.queue[prevState.queue.length - 1], 
        queue: prevState.queue.slice(0, prevState.queue.length - 1)
      }))
    }
  }

  addSong = song => {
    this.setState(prevState => ({
      queue: prevState.queue.insert(0, song)
    }))
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
