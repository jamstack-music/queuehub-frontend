import React from 'react'
import { Subscribe } from 'unstated'
import { RoomContainer } from '../store/room'

const Members = () => (
  <Subscribe to={[RoomContainer]}>
    {room => (
      <ul>
        { room.state.members.map(member => <li>{member}</li>) }     
      </ul>
    )}
  </Subscribe>
)

export default Members
