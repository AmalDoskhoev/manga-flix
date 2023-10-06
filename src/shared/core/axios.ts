import axios from 'axios';

//Тут будет Api для всех запросов
export const API_URL = 'API';
export const TOKEN_KEY = 'token';

axios.defaults.baseURL = API_URL;

axios.interceptors.request.use(config => {
  if (typeof window !== 'undefined') {
    const token = window.localStorage.getItem(TOKEN_KEY);

    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
  }

  return config;
});

export * from 'axios';

export default axios;
