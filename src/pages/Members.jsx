import React from 'react';

import RoomContainer from '../store/room';
import MemberList from '../components/MemberList';

const Members = () => {
  const { room } = RoomContainer.useContainer();
  return (
    <div>
      <h1>Members</h1>
      <MemberList members={room.members} />
    </div>
  );
};

export default Members;
