/* global window */
import { useState, useEffect } from 'react';
import axios from 'axios';

import { token } from '../data/spotify';

const createEventHandlers = (player, setDeviceID) => {
  player.on('ready', (data) => {
    let { device_id } = data;
    setDeviceID(device_id);
  });
};

function useSpotifyPlayer(uri) {
  const [deviceID, setDeviceID] = useState(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    if (window.Spotify !== null) {
      const { Player } = window.Spotify;
      const newPlayer = new Player({
        name: 'Queuehub',
        getOAuthToken: (cb) => { cb(token); },
      });
      newPlayer.connect();
      createEventHandlers(newPlayer, setDeviceID);
      setPlayer(newPlayer);
    }
  }, []);

  useEffect(() => {
    if (uri && deviceID) {
      axios.request(`https://api.spotify.com/v1/me/player/play?device_id=${deviceID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        data: {
          uris: [uri],
        },
      });
    }
  }, [uri, deviceID]);
}

export default useSpotifyPlayer;
