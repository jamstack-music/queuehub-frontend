/* global sessionStorage */
import axios from 'axios';

const BASE = process.env.REACT_APP_BACKEND_URL;

export const joinRoom = async (room, name) => {
  try {
    const res = await axios.get(`${BASE}/join/${room}/${name}`, {
      headers: {
        'Access-Control-Allow-Origin': BASE,
      },
    });
    return res;
  } catch (err) {
    return { status: 400, data: 'Not a valid room' };
  }
};

export const bumpSong = async (room, user, song) => {
  const jsonMap = sessionStorage.getItem('alreadyBumped') || '{}';
  const map = JSON.parse(jsonMap);
  map[song] = true;
  sessionStorage.setItem('alreadyBumped', JSON.stringify(map));

  const res = await axios.get(`${BASE}/${room}/${user}/bump/${song}`);
  return res;
};

export const addSong = async (room, song) => {
  const addedBy = sessionStorage.getItem('name');
  const res = await axios.post(`${BASE}/add/${room}`, { ...song, addedBy, bumps: 0 });
  return res;
};
