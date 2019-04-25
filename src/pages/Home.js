import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { useAlert } from 'react-alert';

const FormInput = styled.div`
  margin-bottom: 1em;
  
  & * {
    display: block;
  }
`;

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
        <FormInput>
          <Label htmlFor="room-name">Enter in room name</Label>
          <Input type="text" id="room-name" onChange={e => setRoom(e.target.value)} />
        </FormInput>
        <FormInput>
          <Label htmlFor="username">Enter a name</Label>
          <Input type="text" id="username" onChange={e => setName(e.target.value)} />
        </FormInput>
        <Button disabled={!room || !name} type="submit">Let's go!</Button>
      </form>
    </div>
  );
};

export default Home;
