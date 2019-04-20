import axios from 'axios'

const BASE = 'http://54.191.51.110:5000'

export const joinRoom = async (room, name) => {
  const res = await axios.get(`${BASE}/join/${room}/${name}`, {
    headers: {
      'Access-Control-Allow-Origin': BASE,
    },
  })
  return res
}

export const addSong = async (room, song) => {
  const res = await axios.post(`${BASE}/add/${room}`, {...song, bumps: 0}) 
  return res
}
