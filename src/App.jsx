import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProtectedRoute from './routing/protected-route';

import Login from './pages/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Room from './pages/Room';

import './App.css';

const App = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute path="/room/:id" component={Room} />
    <Route component={NotFound} />
  </Switch>
);

export default App;
