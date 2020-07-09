import { asyncRouterMap, constantRouterMap } from "@/router";
import store from "@/store";
import Layout from "@/views/layout/Layout";
import { Message } from "element-ui";
import NProgress from "nprogress"; // progress bar

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.routers = [...constantRouterMap,...asyncRouterMap];
    }
  }
};
export default permission;
