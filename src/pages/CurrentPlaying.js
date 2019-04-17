import React from 'react'
import { RoomContainer } from '../store/room'
import { Subscribe } from 'unstated'

import CurrentSong from '../containers/CurrentSong'
import SongList from '../components/SongList'

const CurrentPlaying = () => (
  <Subscribe to={[RoomContainer]}>
    {
      room => (
        <>
          <h2>Current Song</h2>
          <CurrentSong {...room.state.currentSong}/>
          <h3>Current Queue</h3>
          <SongList songs={room.state.queue} />
        </>
      ) 
    }
  </Subscribe>
)

export default CurrentPlaying
