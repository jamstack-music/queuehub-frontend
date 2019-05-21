import { useCallback, useRef } from 'react';
import { useAlert } from 'react-alert';
import RoomContainer from '../store/room';
import { addSong as addSongRemote } from '../data/api';

export default function useSongAdder() {
  const {
    room: { name },
  } = RoomContainer.useContainer();

  const alert = useRef(useAlert());
  const addSong = useCallback(
    (song) => {
      addSongRemote(name, song)
        .then(() => alert.current.success('Song added to queue!'))
        .catch(() => alert.current.error('This song is already in the queue!'));
    },
    [name],
  );

  return addSong;
}
