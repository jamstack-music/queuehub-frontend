import React from 'react';

import RoomContainer from '../store/room';
import MemberList from '../components/MemberList';

const Members = () => {
  const { members } = RoomContainer.useContainer();
  return (
    <div>
      <h1>Members</h1>
      <MemberList members={members.others} />
    </div>
  );
};

export default Members;
