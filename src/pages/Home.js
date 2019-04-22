import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

const Home = () => {
  const [room, setRoom] = useState('')
  const [name, setName] = useState('')
  const [submit, setSubmit] = useState(false)
  
  if(submit) {
    sessionStorage.setItem('name', name)
    return <Redirect push to={`/${room}`} /> 
  }

  return (
    <div>
      <h1>Queuehub</h1>
      <form onSubmit={() => setSubmit(true)}>
        <label htmlFor='room-name'>Enter in room name</label>
        <input type='text' id='room-name' onChange={e => setRoom(e.target.value)}/>
        <label htmlFor='username'>Enter a name</label>
        <input type='text' id='username' onChange={e => setName(e.target.value)}/>
        <button type='submit'>Let's go!</button>
      </form>
    </div>
  )
}

export default Home
