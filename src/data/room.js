import axios from 'axios';

const config = {
  crossDomain: true,
};

export const retrieveRoom = (roomId) => new Promise((resolve, reject) => {
  axios
    .get(`${process.env.BACKEND_URL}/v1/room/${roomId}`, config)
    .then(({ data }) => resolve(data))
    .catch((e) => reject(e.response.data));
});
