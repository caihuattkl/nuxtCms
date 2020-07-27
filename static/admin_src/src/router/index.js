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
    path: "/news-management",
    name: "newsManagement",
    component: Layout,
    redirect: "noredirect",
    meta: { title: "资讯管理", icon: "iconfont icon-jingxiaoshang" },
    children: [
      {
        level: 0,
        path: "news-list",
        component: require("@/views/news-management/news-list").default,
        name: "newsList",
        meta: {
          title: "资讯列表",
          icon: "iconfont icon-icon--copy"
        }
      },
      {
        level: 1,
        path: "add-news",
        component: require("@/views/news-management/add-news").default,
        name: "addNews",
        meta: {
          title: "添加编辑资讯",
          icon: "iconfont icon-icon--copy"
        }
      }
    ]
  },
  {
    path: "/report-management",
    name: "reportManagement",
    component: Layout,
    redirect: "noredirect",
    meta: { title: "报告管理", icon: "iconfont icon-jingxiaoshang" },
    children: [
      {
        level: 0,
        path: "report-list",
        component: require("@/views/report-management/report-list").default,
        name: "reportList",
        meta: {
          title: "报告列表",
          icon: "iconfont icon-icon--copy"
        }
      },
      {
        level: 1,
        path: "add-report",
        component: require("@/views/report-management/add-report").default,
        name: "addReport",
        meta: {
          title: "添加编辑报告",
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
