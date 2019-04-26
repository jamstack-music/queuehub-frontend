import * as Spotify from 'spotify-web-api-js';
import axios from 'axios';
import Cookies from 'js-cookie';

const spotifyGlob = new Spotify();

const cookie = Cookies.get('token');
if (cookie) spotifyGlob.setAccessToken(cookie);

const credentials = {
  clientID: '0a31a2abfc5945bb9e3b3507e6f8361c',
  responseType: 'token',
  redirectURI: 'http://queuehub.club/login',
  state: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
  showDialog: true,
  scopes: ['streaming', 'user-library-read', 'playlist-read-private'],

};

export const spotify = spotifyGlob;

export const getNext = next => axios.get(next, {
  headers: {
    Authorization: `Bearer ${spotifyGlob.getAccessToken()}`,
  },
}).then(res => Promise.resolve(res.data)).catch(err => Promise.reject(err));

export const setToken = (token) => {
  Cookies.set('token', token);
  spotifyGlob.setAccessToken(token);
};

export const removeToken = () => {
  Cookies.clearAll();
  spotifyGlob.removeAccessToken();
};

export const authURL = 'https://accounts.spotify.com/authorize'
  + `?response_type=${credentials.responseType}`
  + `&client_id=${credentials.clientID}`
  + `&redirect_uri=${encodeURIComponent(credentials.redirectURI)}`
  + `&scope=${credentials.scopes.join('%20')}`
  + `&show_dialog=${credentials.showDialog}`
  + `&state=${credentials.state}`;
