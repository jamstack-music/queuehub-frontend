/* global sessionStorage localStorage */
import axios from 'axios';

const BASE = process.env.REACT_APP_BACKEND_URL;

// TODO: Make into post request with all user info
export const joinRoom = async (room, user) => {
  try {
    const res = await axios.get(`${BASE}/join/${room}/${user.id}`, {
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
  const map = JSON.parse(localStorage.getItem('alreadyBumped') || '{}');
  localStorage.setItem('alreadyBumped', JSON.stringify({ ...map, [song]: true }));

  const res = await axios.get(`${BASE}/${room}/${user}/bump/${song}`);
  return res;
};

export const addSong = async (room, song) => {
  const addedBy = sessionStorage.getItem('name');
  const res = await axios.post(`${BASE}/add/${room}`, { ...song, addedBy, bumps: 0 });
  return res;
};

export const nextSong = async (room) => {
  const res = await axios.get(`${BASE}/next/${room}`);
  return res;
};
