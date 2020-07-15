import router from "./../router";
import store from "./../store";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
NProgress.configure({
  showSpinner: false
});

const whiteList = ["/login"];

router.beforeEach(async (to, from, next) => {
  const userInfo = store.state.usersInfo;
  NProgress.start();
  if (userInfo.token) {
    if (to.path === "/login") {
      NProgress.done()
      return next({ path: "/" });
    }
    return next();
  }
  if (whiteList.indexOf(to.path) >= 0) return next();
  next("/login");
  NProgress.done();
});

router.afterEach(() => NProgress.done());

export default router;
