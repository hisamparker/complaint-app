import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: "/api/",
  headers: { 'Cors': `Access-Control-Allow-Origin`},
  // allows axios to set cookies, you can also set this by setting axios default
  withCredentials: true
});

export { AxiosInstance }; 
