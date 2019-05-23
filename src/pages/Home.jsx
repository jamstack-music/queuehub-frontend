/* global sessionStorage */
import React, { useEffect, useState, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { useAlert } from 'react-alert';

import Member from '../components/Member';
import RoomContainer from '../store/room';
import FormInput from '../components/FormInput';

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

const createHandler = (event, setter) => {
  event.preventDefault();
  setter(event.target.value);
};

const Home = (props) => {
  const {
    location,
  } = props;

  const [room, setRoom] = useState('');
  const [submit, setSubmit] = useState(false);
  const alert = useRef(useAlert());

  const current = JSON.parse(localStorage.getItem('current'));

  useEffect(() => {
    if (location.state && location.state.message) {
      alert.current.error(location.state.message);
    }
  }, [location.state]);

  if (submit) {
    return <Redirect push to={`/${room}`} />;
  }

  const handleRoom = event => createHandler(event, setRoom);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };

  return (
    <div style={{
      height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center',
    }}
    >
      <h1>Queuehub</h1>
      <Member {...current}/>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <FormInput
          label="Enter a room name"
          id="room-name"
          onChange={handleRoom}
          value={room}
        />
        <Button disabled={!room} type="submit">Let's go!</Button>
      </form>
    </div>
  );
};

export default Home;
