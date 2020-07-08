import axios from "axios";
// process.env.API_ROOT
const service = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 1000 * 30,
  headers: {
    "Content-Type": "application/json;charset=UTF-8"
  }
});

service.interceptors.request.use(
  config => config,
  error => error
);

// respone interceptor response
service.interceptors.response.use(
  res => res,
  error => error
);

export default service;
