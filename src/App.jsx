import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProtectedRoute from './routing/protected-route';

import Login from './pages/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import RoomStore from './containers/RoomStore';

import './App.css';

const App = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute path="/:id" component={RoomStore} />
    <Route component={NotFound} />
  </Switch>
);

export default App;
