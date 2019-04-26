/* global window sessionStorage EventSource */

import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { joinRoom } from '../data/api';

const StoreMiddleWare = (props) => {
  const {
    children,
  } = props

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function initStore(room, id) {
      const name = sessionStorage.getItem('name');
      if (!name) {
        setError(true);
      } else {
        const { data, status } = await joinRoom(id, name);
        if (status === 400) {
          setError(true);
        } else {
          room.initRoom({ ...data, name: id });
          setLoading(false);
        }
      }
    }

    window.addEventListener('focus', () => {
      initStore(props.room, props.roomID);
    }, false);

    const eventSource = new EventSource(`http://52.42.15.3:5000/stream?channel=${props.roomID}`);

    eventSource.addEventListener('song', ({ data }) => {
      const { song } = JSON.parse(data);
      props.room.addToQueue(song);
    }, false);


    eventSource.addEventListener('join', ({ data }) => {
      const { user } = JSON.parse(data);
      props.room.addMember(user);
    });

    eventSource.addEventListener('bump', ({ data }) => {
      props.room.bumpSong(data);
    });

    eventSource.addEventListener('next', () => {
      props.room.nextSong();
    }, false);

    initStore(props.room, props.roomID);
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

  if (loading) return <div>Loading...</div>;

  return children;
};

export default StoreMiddleWare;
