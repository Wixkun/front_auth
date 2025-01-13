import axios from 'axios';
import Cookies from 'js-cookie';

const API = axios.create({
  baseURL: 'lien-api',
});

API.interceptors.request.use((config) => {
  const token = Cookies.get('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
