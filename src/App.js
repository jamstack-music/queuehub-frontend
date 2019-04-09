import React from 'react';
import { Switch, Route } from 'react-router-dom'
import ProtectedRoute from './routing/protected-route'

import Home from './pages/Home'
import Room from './pages/Room'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

import './App.css';

const App = () => (
  <Switch>
    <Route path='/login' component={Login} /> 
    <ProtectedRoute exact path='/' component={Home} /> 
    <ProtectedRoute path='/:id' component={Room} />
    <Route component={NotFound} />
  </Switch>
)

export default App
