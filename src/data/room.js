import axios from 'axios';

const config = {
  crossDomain: true,
};

export const retrieveRoom = roomId => (dispatch) => {
  dispatch({ type: 'fetchRoomLoading' });

  axios
    .get(`http://localhost:4000/v1/room/${roomId}`, config)
    .then(({ data }) => dispatch({ type: 'fetchRoomSuccess', payload: data }))
    .catch(({ response }) => dispatch({ type: 'fetchRoomError', payload: response.data }));
};
