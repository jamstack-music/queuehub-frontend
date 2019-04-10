import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { spotify } from '../data/spotify'

const ProtectedRoute = (props) => (
  <Route render={() => (
    !spotify.getAccessToken() ? <Redirect to='/login' /> : <Route {...props} /> 
  )}/>
) 

export default ProtectedRoute
