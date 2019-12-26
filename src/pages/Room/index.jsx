import React, { useState, useEffect } from 'react';
import {
  Route,
  Redirect,
  Switch,
  useRouteMatch,
} from 'react-router-dom';

import { useDispatch } from 'AppState/react';
import { RoomChannelProvider } from 'Components/RoomChannel';

import { retrieveRoom } from 'API/room';

import Nav from 'Components/Nav';

import Home from './Home';
import Members from './Members';
import Search from './Search';
import Browse from './Browse';

import NotFound from '../NotFound';

const Room = () => {
  const match = useRouteMatch('/room/:id');
  const dispatch = useDispatch();
  const [isError, setisError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    retrieveRoom(match.params.id)
      .then((roomData) => {
        dispatch({ type: 'initRoom', payload: roomData });
        setLoading(false);
      })
      .catch((errorResp) => {
        setisError(errorResp);
      });
  }, [dispatch, match.params.id]);

  if (isError) {
    return <Redirect to="/" />;
  }

  if (loading) return <div>Loading...</div>;

  return (
    <RoomChannelProvider id={match.params.id}>
      <div>
        <Nav />
        <Switch>
          <Route exact path={`${match.url}`} component={Home} />
          <Route path={`${match.url}/members`} component={Members} />
          <Route path={`${match.url}/search`} component={Search} />
          <Route path={`${match.url}/browse`} component={Browse} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </RoomChannelProvider>
  );
};

export default Room;
