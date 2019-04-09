import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { spotifyAPI } from '../data/spotify'

const ProtectedRoute = (props) => (
  <Route render={() => (
    !spotifyAPI.getAccessToken() ? <Redirect to='/login' /> : <Route {...props} /> 
  )}/>
) 

export default ProtectedRoute
