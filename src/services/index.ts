import axios from 'axios';
export * from './ProductServices';

export const ProductApi = axios.create();

ProductApi.interceptors.request.use((config) => {
  config.baseURL = process.env.REACT_APP_API_URL || localStorage.getItem("__api") || "";
  config.headers = {
    "X-Access-Token": process.env.REACT_APP_AUTH_TOKEN || localStorage.getItem("__token") || ""
  }
  return config;
});

ProductApi.interceptors.response.use((response) => {
    return Promise.resolve(response);
  },(error) => {
    return Promise.reject(error);
  },
);