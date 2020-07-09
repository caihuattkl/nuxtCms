import axios from "axios";
import { Message, Loading } from "element-ui";
import store from "@/store";
import router from "@/router";
import { resolve } from "url";
let qs = require("qs");

let loading,
  needLoadingRequestCount = 0;
export function showFullScreenLoading(config) {
  if (config.isLoading) {
    if (needLoadingRequestCount === 0) {
      loading = Loading.service({ lock: true, text: "加载中…", background: "rgba(0, 0, 0, 0.7)" });
    }
    needLoadingRequestCount++;
  }
}

export function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) return;
  needLoadingRequestCount--;
  if (needLoadingRequestCount === 0) {
    loading.close();
  }
}

const service = axios.create({
  baseURL: process.env.API_ROOT, // api的base_url  http://http://192.168.1.79 http://apizh.668tms.com/
  timeout: 1000 * 30, // 10s timeout
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
  }
});

service.interceptors.request.use(
  config => {
    showFullScreenLoading(config);
    if (config.method === "post" && config.data) {
      // config.data.token = store.state.user.usersInfo ? store.state.user.usersInfo.token : "";
      config.headers.Token = store.state.user.usersInfo ? store.state.user.usersInfo.token : "";
      if (!config.noExtend) {
        config.data.pageSize = config.data.pageSize ? config.data.pageSize : 10;
        config.data.pageNumber = config.data.pageNumber ? config.data.pageNumber : 1;
      }
    }
    config.data = qs.stringify(config.data);
    return config;
  },
  error => error
);

// respone interceptor
service.interceptors.response.use(
  res => {
    tryHideFullScreenLoading();
    // 返回200 但是是错误的情况
    if (res.data.code === 200) return Promise.resolve({ success: true, data: res.data.data });
    if (res.data.code >= 4001 && res.data.code < 5000) return Promise.resolve({ success: false, data: res.data }) && store.commit("LOGOUT");
    return Promise.resolve({ success: false, data: res.data });
  },
  error => {
    loading && loading.close();
    if (!error.response) return Promise.resolve({ success: false, data: error });
    const status = { 401: "身份认证失败!", 404: "获取服务失败，请检查！", 503: "网络不给力，验证失败！", 504: "网络不给力，网关超时！", 500: "服务维护中" };
    return Promise.resolve({ success: false, data: { message: status[error.response.status || 503] || error.response.data } });
  }
);

export default service;
