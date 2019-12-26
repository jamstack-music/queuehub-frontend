import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RoomSelection from './pages/RoomSelection';
import NotFound from './pages/NotFound';
import Room from './pages/Room';

const App = () => (
  <Switch>
    <Route exact path="/" component={RoomSelection} />
    <Route path="/room/:id" component={Room} />
    <Route component={NotFound} />
  </Switch>
);

export default App;
