import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

const FormInput = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
  
  & * {
    display: block;
  }
`

const Input = styled.input`
  border: 1px grey solid;
  padding: 0.5em;
  border-radius: 25px;
`

const Label = styled.label`
  margin: 0.5em;
`

const Home = () => {
  const [room, setRoom] = useState('')
  const [name, setName] = useState('')
  const [submit, setSubmit] = useState(false)
  
  if(submit) {
    sessionStorage.setItem('name', name)
    return <Redirect push to={`/${room}`} /> 
  }

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Queuehub</h1>
      <form onSubmit={() => setSubmit(true)}>
        <FormInput>
          <Label htmlFor='room-name'>Enter in room name</Label>
          <Input type='text' id='room-name' onChange={e => setRoom(e.target.value)}/>
        </FormInput>
        <FormInput>
          <Label htmlFor='username'>Enter a name</Label>
          <Input type='text' id='username' onChange={e => setName(e.target.value)}/>
        </FormInput>
        <button type='submit'>Let's go!</button>
      </form>
    </div>
  )
}

export default Home
