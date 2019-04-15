import React from 'react'
import { RoomContainer } from '../store/room'
import { Subscribe } from 'unstated'

import CurrentSong from '../containers/CurrentSong'
import QueueList from '../components/QueueList'

const CurrentPlaying = () => (
  <Subscribe to={[RoomContainer]}>
    {
      room => (
        <>
          <h2>Current Song</h2>
          <CurrentSong {...room.state.currentSong}/>
          <h3>Current Queue</h3>
          <QueueList songs={room.state.queue} />
        </>
      ) 
    }
  </Subscribe>
)

export default CurrentPlaying
