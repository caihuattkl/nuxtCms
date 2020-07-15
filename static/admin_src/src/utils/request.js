import axios from "axios";
import { Message, Loading } from "element-ui";
import store from "@/store";
import router from "@/router";
import { resolve } from "url";
let qs = require("qs");

const service = axios.create({
  baseURL: process.env.API_ROOT, // api的base_url  http://http://192.168.1.79 http://apizh.668tms.com/
  timeout: 1000 * 30, // 10s timeout
  headers: { "Content-Type": "application/json" }
});
service.interceptors.request.use(
  config => {
    if (store.state.token) config.data.token = store.state.token;
    return config;
  },
  error => error
);
// respone interceptor
service.interceptors.response.use(
  res => {
    // 返回200 但是是错误的情况
    if (res.data.code === 200) return Promise.resolve({ success: true, data: res.data.data });
    if (res.data.code >= 4001 && res.data.code < 5000) return Promise.resolve({ success: false, data: res.data }) && store.commit("LOGOUT");
    return Promise.resolve({ success: false, data: res.data });
  },
  error => {
    console.log(error.response);
    if (!error.response) return Promise.resolve({ success: false, data: error });
    const status = { 401: "身份认证失败,token已过期!", 404: "获取服务失败，请检查！", 503: "网络不给力，验证失败！", 504: "网络不给力，网关超时！", 500: "服务维护中" };
    return Promise.resolve({ success: false, data: { msg: status[error.response.status || 503] || error.response.data } });
  }
);

export default service;
