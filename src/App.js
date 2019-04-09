import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Room from './pages/Room'
import NotFound from './pages/NotFound'

import './App.css';

const App = () => (
  <Switch>
    <Route path='/:id' component={Room} />
    <Route component={NotFound} />
  </Switch>
)

export default App
