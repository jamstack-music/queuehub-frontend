import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { joinRoom } from '../data/api';

const StoreMiddleWare = (props) => {
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
      console.debug('store-reloaded');
      initStore(props.room, props.roomID);
    }, false);

    const eventSource = new EventSource(`http://52.42.15.3:5000/stream?channel=${props.roomID}`);

    eventSource.addEventListener('song', ({ data }) => {
      console.debug('song added');
      const { song } = JSON.parse(data);
      props.room.addToQueue(song);
    }, false);


    eventSource.addEventListener('join', ({ data }) => {
      console.debug('Member joined');
      const { user } = JSON.parse(data);
      props.room.addMember(user);
    });

    eventSource.addEventListener('bump', ({ data }) => {
      console.debug('Bump song');
      props.room.bumpSong(data);
    });

    eventSource.addEventListener('next', () => {
      console.debug('Next song');
      props.room.nextSong();
    }, false);

    initStore(props.room, props.roomID);
    return function unMount() {
      eventSource.removeEventListener('song', () => {
        console.debug('song event listener removed');
      });

      eventSource.removeEventListener('next', () => {
        console.debug('next event listener removed');
      });

      eventSource.removeEventListener('join', () => {
        console.debug('join event listener removed');
      });

      eventSource.removeEventListener('bump', () => {
        console.debug('bump event listener removed');
      });

      window.removeEventListener('focus', () => {
        console.debug('window listener removed');
      });
      eventSource.close();
    };
  }, []);

  if (error) {
    return (
      <Redirect to={{
        pathname: '/',
        state: { message: 'Room does not exist' },
      }}
      />
    );
  }

  return (
    <>
      {
      loading ? (
        <div>Loading...</div>
      ) : (
        props.children
      )
    }
    </>
  );
};

export default StoreMiddleWare;
