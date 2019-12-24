import { useContext } from 'react';
import { ChannelContext } from './useChannel';

function useRoomChannel() {
  const channel = useContext(ChannelContext);

  return channel;
}

export default useRoomChannel;
