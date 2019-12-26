import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { useSelector } from 'AppState/react';
import './styles.css';

/*
const Input = styled.input`
  font-size: 16px;
  border: 1px grey solid;
  padding: 0.5em;
  border-radius: 25px;
`;

const Label = styled.label`
  font-size: 18px;
  margin: 0.5em;
`;

const Button = styled.button`
  margin: 2em;
  font-size: 1em;
  border: none;
  border-radius: 1em;
  color: white;
  padding: 0.5em 2em;
  background-color: rgb(36,79,236);

  :disabled {
    background-color: rgba(36,79,236,.70);
  }
`;
*/

const RoomSelection = () => {
  const history = useHistory();
  const roomRef = useRef(null);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const roomName = roomRef.current.value;
    history.push(`/room/${roomName}`);
  }, [history, roomRef]);
  const error = useSelector((s) => s.room.error);

  return (
    <div id="home-container">
      { error && <div>{ error }</div> }
      <h1>Queuehub</h1>
      <form id="room-form" onSubmit={handleSubmit}>
        <label htmlFor="room-name">
          Enter in the room code
          <input id="room-name" type="text" ref={roomRef} />
        </label>
        <button type="submit">Let&apos;s go!</button>
      </form>
    </div>
  );
};

export default RoomSelection;
