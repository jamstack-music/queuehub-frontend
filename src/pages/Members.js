import React from 'react';
import { Subscribe } from 'unstated';
import MemberList from '../components/MemberList';
import { RoomContainer } from '../store/room';

const Members = props => (
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
);

export default Members;
