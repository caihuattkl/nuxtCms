import Vue from "vue";
import Vuex from "vuex";
import {constantRouterMap, asyncRouterMap} from "@/router";
import router from "@/router/permission";
import vuejsStorage from "vuejs-storage";
Vue.use(Vuex);
Vue.use(vuejsStorage);

const store = new Vuex.Store({
  state: {
    newsClassCache:"",
    token: "",
    usersInfo: {},
    sidebar: {
      opened: 1
    },
    routers: constantRouterMap,
    addRouters: [],
    visitedViews: [],
    cachedViews: []
  },
  mutations: {
    ADD_VISITED_VIEWS: (state, view) => {
      if (state.visitedViews.some(v => v.path === view.path)) return;
      state.visitedViews.push({
        id: view.query.pageId,
        name: view.name,
        path: view.path,
        title: view.meta.title || "no-name"
      });
      if (!view.meta.noCache) {
        state.cachedViews.push(view.name);
      }
    },
    DEL_VISITED_VIEWS: (state, view) => {
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          state.visitedViews.splice(i, 1);
          break;
        }
      }
      for (const i of state.cachedViews) {
        if (i === view.name) {
          const index = state.cachedViews.indexOf(i);
          state.cachedViews.splice(index, 1);
          break;
        }
      }
    },
    DEL_OTHERS_VIEWS: (state, view) => {
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          state.visitedViews = state.visitedViews.slice(i, i + 1);
          break;
        }
      }
      for (const i of state.cachedViews) {
        if (i === view.name) {
          const index = state.cachedViews.indexOf(i);
          state.cachedViews = state.cachedViews.slice(index, i + 1);
          break;
        }
      }
    },
    DEL_ALL_VIEWS: state => {
      state.visitedViews = [];
      state.cachedViews = [];
    },
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        return (app.state.sidebar.opened = 1);
      }
      app.state.sidebar.opened = 0;
      state.sidebar.opened = !state.sidebar.opened;
    },
    SET_ROUTERS: (state, routers) => {
      state.routers = [...constantRouterMap, ...asyncRouterMap];
    },
    SET_USER_INFO: (state, usersInfo) => {
      state.usersInfo = usersInfo;
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_CLASSOPTIONS: (state, val) => {
      state.newsClassCache = val;
    },
    LOGOUT: (state, data) => {
      state.token = "";
      state.usersInfo = {};
      router.push({ name: "login" });
    }
  },
  actions: {
    addVisitedViews({ commit }, view) {
      commit("ADD_VISITED_VIEWS", view);
    },
    delVisitedViews({ commit, state }, view) {
      return new Promise(resolve => {
        commit("DEL_VISITED_VIEWS", view);
        resolve([...state.visitedViews]);
      });
    },
    delOthersViews({ commit, state }, view) {
      return new Promise(resolve => {
        commit("DEL_OTHERS_VIEWS", view);
        resolve([...state.visitedViews]);
      });
    },
    delAllViews({ commit, state }) {
      return new Promise(resolve => {
        commit("DEL_ALL_VIEWS");
        resolve([...state.visitedViews]);
      });
    }
  },
  getters: {
    visitedViews: state => state.visitedViews,
    cachedViews: state => state.cachedViews,
    token: state => state.token,
    usersInfo: state => state.usersInfo
  },
  plugins: [
    vuejsStorage({
      namespace: "superAdmin.sessionStorage",
      driver: vuejsStorage.drivers.sessionStorage,
      keys: ["usersInfo", "routers", "sidebar","token","newsClassCache"]
    })
  ]
});
export default store;
