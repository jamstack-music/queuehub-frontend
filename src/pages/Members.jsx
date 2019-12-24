import React, { useCallback } from 'react';

import { useSelector, useDispatch } from '../state';
import MemberList from '../components/MemberList';

function Songs() {
  const songs = useSelector(s => s.songs.queue);

  return (
    <div>
Songs here:
      {songs}
    </div>
  );
}
const Members = () => {
  const dispatch = useDispatch();
  const addMember = useCallback(() => dispatch({ type: 'addMember', payload: 'jim' }), [dispatch]);
  return (
    <div>
      <h1>Members</h1>
      <button onClick={addMember}>Add Jim</button>
      <Songs />
      <MemberList />
    </div>
  );
};

export default Members;
