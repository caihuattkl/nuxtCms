import Vue from "vue";
import Vuex from "vuex";
import app from "./modules/app";
import permission from "./modules/permission";
import tagsView from "./modules/tagsView";
import user from "./modules/user";
import vuejsStorage from "vuejs-storage";
Vue.use(Vuex);
Vue.use(vuejsStorage);

const store = new Vuex.Store({
  modules: {
    app,
    permission,
    tagsView,
    user
  },
  getters: {
    visitedViews: state => state.tagsView.visitedViews,
    cachedViews: state => state.tagsView.cachedViews,
    token: state => state.user.token,
    usersInfo: state => state.user.usersInfo
  },
  plugins: [
    vuejsStorage({
      namespace: "superAdmin.sessionStorage",
      driver: vuejsStorage.drivers.sessionStorage,
      keys: ["user.usersInfo", "permission.routers", "app.sidebar"]
    })
  ]
});
export default store;
