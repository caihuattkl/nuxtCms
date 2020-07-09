const app = {
  state: {
    sidebar: {
      opened: 1
    }
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        return (app.state.sidebar.opened = 1);
      }
      app.state.sidebar.opened = 0;
      state.sidebar.opened = !state.sidebar.opened;
    }
  }
};

export default app;
