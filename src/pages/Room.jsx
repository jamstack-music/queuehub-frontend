/* global window sessionStorage EventSource */

import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import useSpotifyPlayer from '../hooks/useSpotifyPlayer';

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

const withRoom = (Component, room, props) => <Component room={room} {...props} />;

const initStore = async (store, id, setError) => {
  const name = sessionStorage.getItem('name');
  if (!name) {
    setError(true);
  } else {
    const { data, status } = await joinRoom(id, name);
    if (status === 400) {
      setError(true);
    } else {
      store.initRoom({ ...data, name: id });
    }
  }
};

const Room = (props) => {
  const {
    roomID,
    room,
    match,
  } = props;

const [error, setError] = useState(false);

  useSpotifyPlayer(room.state.currentSong.uri);

  useEffect(() => {
    const eventSource = new EventSource(`http://52.42.15.3:5000/stream?channel=${props.roomID}`);

    eventSource.addEventListener('song', ({ data }) => {
      const { song } = JSON.parse(data);
      room.addToQueue(song);
    }, false);

    eventSource.addEventListener('join', ({ data }) => {
      const { user } = JSON.parse(data);
      room.addMember(user);
    });

    eventSource.addEventListener('bump', ({ data }) => {
      room.bumpSong(data);
    });

    eventSource.addEventListener('next', () => {
      room.nextSong();
    }, false);

    window.addEventListener('focus', () => {
      initStore(room, roomID, setError);
    }, false);

    initStore(props.room, props.roomID, setError);
    return function unMount() {
      eventSource.removeEventListener('song', () => {});
      eventSource.removeEventListener('join', () => {});
      eventSource.removeEventListener('bump', () => {});
      eventSource.removeEventListener('next', () => {});
      window.removeEventListener('focus', () => {});
      eventSource.close();
    };
  }, []);

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

  return (
    <View>
      <Nav match={match.url} />
      <Switch>
        <Route exact path={`${match.url}`} render={childProps => withRoom(CurrentPlaying, room, childProps)} />
        <Route path={`${match.url}/members`} render={childProps => withRoom(Members, room, childProps)} />
        <Route path={`${match.url}/search`} render={childProps => withRoom(Search, room, childProps)} />
        <Route path={`${match.url}/browse`} render={childProps => withRoom(Browse, room, childProps)} />
        <Route component={NotFound} />
      </Switch>
    </View>
  );
};

export default Room;
