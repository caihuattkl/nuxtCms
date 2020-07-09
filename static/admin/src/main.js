import Vue from "vue";
import "@/utils/plugins/ElementUI.js";
import "@/utils/plugins/Tools.js";
import "@/utils/plugins/MetaElement";
import router from "./router/permission";
import store from "./store";
import App from "./App";

Vue.config.productionTip = false;
new Vue({ el: "#app", router, store, render: render => render(App) });
