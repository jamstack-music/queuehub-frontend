import React from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { setToken, authURL } from '../data/spotify';

const View = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
  height: 100vh;
  width: 100vw;
`;

const Header = styled.div`
  display: flex;
  width: 100vw;
  height: 40vh;
  text-align: center;
  justify-content: center;
  align-items: center;
  background: rgb(36,79,236);
  background: linear-gradient(27deg, rgba(36,79,236,1) 0%, rgba(0,212,255,1) 100%); 
`;

const SpotifyButton = styled.button`
  font-weight: bold;
  margin-top: 3em;
  padding: 1em 2em;
  font-size: 1em;
  border-radius: 25px;
  color: white;
  background-color: #1DB954;
  border: none;
`;
const retrieveHash = () => window.location.hash
  .substring(1)
  .split('&')
  .reduce((initial, item) => {
    if (item) {
      const parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});

const authenticate = async () => {
  window.location.href = authURL;
};

const Login = () => {
  const { access_token, expires_in } = retrieveHash();

  if (access_token) {
    setToken(access_token);
    localStorage.setItem('expiration_time', (Date.now() / 1000) + 3600);
    return <Redirect to="/" />;
  }

  return (
    <View>
      <Header>
        <h1>Welcome to Queuehub</h1>
      </Header>
      <SpotifyButton onClick={authenticate}>Login with Spotify</SpotifyButton>
    </View>
  );
};

export default Login;
