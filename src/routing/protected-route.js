import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = (props) => {
  console.log('testing')
  let time = parseFloat(localStorage.getItem('expiration_time')) || 0
  let reroute = time <= (Date.now() / 1000)
  return (
    <Route render={() => (
      reroute ? <Redirect to='/login' /> : <Route {...props} /> 
    )}/>
  )
}

export default ProtectedRoute
