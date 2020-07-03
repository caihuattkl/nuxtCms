import axios from "axios";

const service = axios.create({
  baseURL: process.env.API_ROOT,
  timeout: 1000 * 30,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
  }
});

service.interceptors.request.use(
  config => {
    return config;
  },
  error => error
);

// respone interceptor response
service.interceptors.response.use(
  res => {},
  error => {}
);

export default service;
