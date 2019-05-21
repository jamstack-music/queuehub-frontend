/* global sessionStorage */
import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import RoomContainer from '../store/room';
import { joinRoom } from '../data/api';
import Nav from '../components/Nav';

import CurrentPlaying from './CurrentPlaying';
import Members from './Members';
import Search from './Search';
import NotFound from './NotFound';
import Browse from './Browse';

const View = styled.div`
  padding-bottom: 40px;
`;


const Room = (props) => {
  const {
    match,
  } = props;

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const { dispatch } = RoomContainer.useContainer();

  useEffect(() => {
    function initStore(id) {
      const name = sessionStorage.getItem('name');
      if (!name) {
        setError(true);
      } else {
        joinRoom(id, name)
          .then(({ status, data }) => {
            if (status === 400) {
              setError(true);
            } else {
              const alreadyBumped = sessionStorage.getItem('alreadyBumped') || {};
              dispatch({ type: 'init', payload: { ...data, name: id }, alreadyBumped });
            }
          })
          .catch(err => {
            console.log(err)
            setError(true)
          })
          .finally(() => setLoading(false));
      }
    }

    initStore(match.params.id);
  }, [dispatch, match.params.id]);

  if (error) {
    return (
      <Redirect
        to={{
          pathname: '/',
          state: { message: 'Room does not exist' },
        }}
      />
    );
  }

  if (loading) return <div>Loading...</div>;
  return (
    <View>
      <Nav match={match.url} />
      <Switch>
        <Route exact path={`${match.url}`} component={CurrentPlaying} />
        <Route path={`${match.url}/members`} component={Members} />
        <Route path={`${match.url}/search`} component={Search} />
        <Route path={`${match.url}/browse`} component={Browse} />
        <Route component={NotFound} />
      </Switch>
    </View>
  );
};

export default Room;
