import React, { useEffect } from 'react';
import {
  Route,
  Redirect,
  Switch,
  useRouteMatch,
} from 'react-router-dom';

import { useDispatch } from 'AppState/react';
import { RoomChannelProvider } from 'Components/RoomChannel';

import useFetch from 'API/useFetch';
import { retrieveRoom } from 'API/room';

import Nav from 'Components/Nav';

import Home from './Home';
import Members from './Members';
import Search from './Search';
import Browse from './Browse';

import NotFound from '../NotFound';

const Room = () => {
  const match = useRouteMatch('/room/:id');
  const { fetch, isLoading, error } = useFetch();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(retrieveRoom, match.params.id).then((data) => {
      if (data) dispatch({ type: 'initRoom', payload: data });
    });
  }, [dispatch, fetch, match.params.id]);

  if (error) {
    return <Redirect to="/" />;
  }

  if (isLoading) return <div>Loading...</div>;

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
