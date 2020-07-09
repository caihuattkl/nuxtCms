import router from "@/router";
const user = {
  state: {
    token: "",
    usersInfo: {}
  },
  mutations: {
    SET_USER_INFO: (state, usersInfo) => {
      state.usersInfo = usersInfo;
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    LOGOUT: (state, data) => {
      state.token = "";
      state.usersInfo = {};
      router.push({ name: "login" });
    }
  }
};

export default user;
