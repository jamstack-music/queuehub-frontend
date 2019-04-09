import React, { useState } from 'react'

const Home = () => {
  const [room, setRoom] = useState('')
  const enterRoom = async e => {
    e.preventDefault()
    //Send request and join room
  }

  return (
    <div>
      <h1>Queuehub</h1>
      <form onSubmit={e => enterRoom(e)}>
        <label>Enter in room name</label>
        <input type="text" onChange={e => setRoom(e.target.value)}/>
        <button type="submit">Let's go!</button>
      </form>
    </div>
  )
}

export default Home
