import createPersistedState from 'vuex-persistedstate'
 
export default ({store}) => {
  createPersistedState({
      key: 'vuex',
      paths: ['counter'],
      storage: window.sessionStorage,
  })(store)
}