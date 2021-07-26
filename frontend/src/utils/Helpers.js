import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: "/api/",
  headers: { 'Cors': `Access-Control-Allow-Origin`},
});

export { AxiosInstance }; 
