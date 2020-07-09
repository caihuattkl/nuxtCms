import Vue from "vue";
import ElementUI, { Message } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/styles/index.scss";
import "@/assets/styles/variables.scss";
import animate from "animate.css";
Vue.prototype.$msg = function(opt) {
  if (opt instanceof Array) {
    Message({ message: opt[0], type: opt[1], duration: 2000 });
  }
  if (typeof opt === "string") {
    Message({ message: opt, type: "error", duration: 2000 });
  }
};
Vue.prototype.$msg.error = function(msg = "这是一个错误消息") {
  Message({ message: msg, type: "error", duration: 2000 });
};
Vue.prototype.$msg.success = function(msg = "这是一个正确消息") {
  Message({ message: msg, type: "success", duration: 2000 });
};
Vue.use(ElementUI);
