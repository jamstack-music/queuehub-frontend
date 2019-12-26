import React, { createContext, useContext, useEffect } from 'react';
import { useDispatch } from 'AppState/react';
import useChannel from './useChannel';

const RoomChannelContext = createContext();

export const RoomChannelProvider = (props) => {
  const { id, children } = props;

  const dispatch = useDispatch();
  const channel = useChannel(process.env.BACKEND_SOCKET, `room:${id}`);

  useEffect(() => {
    channel.on('song_bumped', data => dispatch({ type: 'bumpSong', payload: data }));
    channel.on('song_added', data => dispatch({ type: 'addSong', payload: data }));
    channel.on('member_added', data => dispatch({ type: 'addMember', payload: data }));
    channel.on('song_skipped', () => dispatch({ type: 'nextSong' }));
  }, [channel, dispatch]);

  return (
    <RoomChannelContext.Provider value={channel}>
      {children}
    </RoomChannelContext.Provider>
  );
};

export function useRoomChannel() {
  const channel = useContext(RoomChannelContext);

  return channel;
}
