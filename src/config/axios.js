import { AsyncStorage } from 'react-native';
import axios from 'axios';
import i18n from "../i18n";

const instance = axios.create({
  baseURL: 'http://paxsky.amagumolabs.io/api/',
  timeout: 15000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

instance.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('token');
  // console.log(token)
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Check type data r
  const res = typeof response.data === 'object' ? response.data : JSON.parse(response.data)
  if (res.status === false || res.status === '1' || res.error) {
    return Promise.reject(res);
  }
  return res
}, function (error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
  }

  console.log(error.config);
  console.log(error);
  if (error.message) {
    if (error.message.includes('timeout') || error.message.includes('Network Error')) {
      error.message = i18n.t('global.networkError');
    }
  }
  return Promise.reject(error);
});
export default instance;
