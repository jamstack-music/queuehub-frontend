import React from 'react';
import { Subscribe } from 'unstated';

import RoomContainer from '../store/room';

import Room from '../pages/Room';

const RoomStore = (props) => {
  const {
    match,
  } = props;

  return (
    <Subscribe to={[RoomContainer]}>
      {
        room => <Room room={room} match={match} roomID={match.params.id} />
      }
    </Subscribe>
  );
};

export default RoomStore;
