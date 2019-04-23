import React from 'react'
import MemberList from '../components/MemberList'
import { RoomContainer } from '../store/room'
import { Subscribe } from 'unstated'

const Members = (props) => {
  return (
    <Subscribe to={[RoomContainer]}>
      {
        room => (
          <div>
            <h1>Members</h1>
            <MemberList members={room.state.members} />  
          </div>
        )
      }
    </Subscribe>
  )
}

export default Members
