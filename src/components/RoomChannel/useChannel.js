import { useMemo, useEffect } from 'react';
import { Socket } from 'phoenix';

function useChannel(socketURL, channelId) {
  const socket = useMemo(() => {
    const newSocket = new Socket(socketURL);
    newSocket.connect();

    return newSocket;
  }, [socketURL]);

  const channel = useMemo(() => {
    const newChannel = socket.channel(channelId);
    newChannel.join();

    return newChannel;
  }, [channelId, socket]);

  useEffect(() => () => channel.leave(), [channel]);

  return channel;
}

export default useChannel;
