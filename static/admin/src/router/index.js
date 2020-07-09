import Vue from "vue";
import Router from "vue-router";
import Layout from "@/views/layout/Layout";
Vue.use(Router);

export const constantRouterMap = [
  {
    name: "login",
    path: "/login",
    component: require("@/views/login/index").default,
    hidden: true,
    meta: {
      title: "登录",
      icon: "iconfont icon-zhuye",
      noCache: true
    }
  },
  {
    path: "",
    name: "all",
    component: Layout,
    redirect: "home",
    children: [
      {
        level: 1,
        path: "home",
        component: require("@/views/welcome/index").default,
        name: "home",
        meta: {
          title: "首页",
          icon: "iconfont icon-home",
          noCache: true
        }
      }
    ]
  }
];

export const asyncRouterMap = [
  {
    path: "/orderManagement",
    name: "orderManagement",
    component: Layout,
    redirect: "orderList",
    children: [
      {
        level: 1,
        path: "orderList",
        component: require("@/views/orderManagement/orderList").default,
        name: "orderList",
        meta: {
          title: "经销商订单列表",
          icon: "iconfont icon-icon--copy"
        }
      }
    ]
  }
];

export default new Router({
  mode: "history",
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [...asyncRouterMap, ...constantRouterMap]
});
