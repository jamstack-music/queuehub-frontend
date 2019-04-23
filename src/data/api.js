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

export const bumpSong = async(room, user, song) => {
  let jsonMap = sessionStorage.getItem('alreadyBumped') || "{}" 
  let map = JSON.parse(jsonMap) 
  map[song] = true
  sessionStorage.setItem('alreadyBumped', JSON.stringify(map))
  
  const res = await axios.get(`${BASE}/${room}/${user}/bump/${song}`)
  return res
}

export const addSong = async (room, song) => {
  let addedBy = sessionStorage.getItem('name')
  const res = await axios.post(`${BASE}/add/${room}`, {...song, addedBy, bumps: 0}) 
  return res
}
