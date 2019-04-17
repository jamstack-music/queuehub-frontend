import axios from 'axios'

const BASE = 'http://34.219.153.198:5000'

export const joinRoom = async (room, name) => {
  const res = await axios.get(`${BASE}/join/${room}/${name}`, {
    headers: {
      'Access-Control-Allow-Origin': 'http://34.219.153.198:5000',
    },
  })
  return res
}

export const addSong = async (room, song) => {
  const res = await axios.post(`${BASE}/add/${room}`, song) 
  return res
}
