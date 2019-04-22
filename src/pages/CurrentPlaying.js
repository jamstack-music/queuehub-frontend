import React from 'react'
import { RoomContainer } from '../store/room'
import { Subscribe } from 'unstated'
import BumpList from '../components/Songs/BumpList'
import CurrentSong from '../components/Songs/CurrentSong'
import { bumpSong } from '../data/api'

const CurrentPlaying = () => (
  <Subscribe to={[RoomContainer]}>
    {
      room => (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h2>Current Song</h2>
          { Object.keys(room.state.currentSong).length !== 0 ? <CurrentSong {...room.state.currentSong}/> : <h3>No Song</h3>}
          <h3>Current Queue</h3>
          <BumpList 
            songs={room.state.queue} 
            onBump={song => bumpSong(room.state.name, 'Jim', song.id)}
          />
        </div>
      ) 
    }
  </Subscribe>
)

export default CurrentPlaying
