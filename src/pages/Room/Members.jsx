import React, { useMemo } from 'react';
import { useSelector } from 'AppState/react';

const Members = () => {
  const members = useSelector((s) => s.members.all);

  const memberList = useMemo(() => {
    const memberItems = members.map((member) => (
      <li key={member.id}>
        <div>{member.name}</div>
        <div>{member.username}</div>
      </li>
    ));

    return <ul>{memberItems}</ul>;
  }, [members]);

  return (
    <div>
      <div>Members</div>
      {memberList}
    </div>
  );
};

export default Members;
