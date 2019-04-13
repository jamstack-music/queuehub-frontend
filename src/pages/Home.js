import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

const Home = () => {
  const [room, setRoom] = useState('')
  const [submit, setSubmit] = useState(false)
  
  if(submit)
    return <Redirect push to={`/${room}`} /> 

  return (
    <div>
      <h1>Queuehub</h1>
      <form onSubmit={() => setSubmit(true)}>
        <label htmlFor='room-name'>Enter in room name</label>
        <input type='text' id='room-name' onChange={e => setRoom(e.target.value)}/>
        <button type='submit'>Let's go!</button>
      </form>
    </div>
  )
}

export default Home
