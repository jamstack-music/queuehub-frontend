import React from 'react'
import { spotify, setToken, authURL } from '../data/spotify'
import { Redirect } from 'react-router-dom'

const retrieveHash = () => window.location.hash
.substring(1)
.split('&')
.reduce(function (initial, item) {
  if (item) {
    var parts = item.split('=');
    initial[parts[0]] = decodeURIComponent(parts[1]);
  }
  return initial;
}, {});

const authenticate = async () => {
  window.location.href = authURL
}

const Login = () => {
  const { access_token } = retrieveHash()

  if(access_token) {
    setToken(access_token)
    return <Redirect to='/' />
  }
  
  return (
    <>
      <div>Testing</div>
      <button onClick={authenticate}>HEll0</button>
    </>
  )
}

export default Login
