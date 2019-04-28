import React from 'react';
import MemberList from '../components/MemberList';

const Members = (props) => {
  const {
    room,
  } = props;

  return (
    <div>
      <h1>Members</h1>
      <MemberList members={room.state.members} />
    </div>
  );
};

export default Members;
