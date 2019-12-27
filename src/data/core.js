import axios from 'axios';

const API_VERSION = 'v1';

export default axios.create({
  baseURL: `${process.env.BACKEND_URL}/${API_VERSION}`,
  crossDomain: true,
  withCredentials: true,
});
