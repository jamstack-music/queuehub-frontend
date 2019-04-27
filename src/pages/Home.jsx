/* global sessionStorage */
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { useAlert } from 'react-alert';

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

const Home = (props) => {
  const {
    location,
  } = props;

  const [room, setRoom] = useState('');
  const [name, setName] = useState('');
  const [submit, setSubmit] = useState(false);
  const alert = useAlert();

  useEffect(() => {
    if (location.state && location.state.hasOwnProperty('message')) { alert.error(location.state.message); }
  }, []);

  if (submit) {
    sessionStorage.setItem('name', name);
    return <Redirect push to={`/${room}`} />;
  }

  return (
    <div style={{
      height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center',
    }}
    >
      <h1>Queuehub</h1>
      <form onSubmit={() => setSubmit(true)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <FormInput
          label="Enter a room name"
          id="room-name"
          onChange={setRoom}
          value={room}
        />
        <FormInput
          label="Enter your name"
          id="name"
          onChange={setName}
          value={name}
        />
        <Button disabled={!room || !name} type="submit">Let's go!</Button>
      </form>
    </div>
  );
};

export default Home;
