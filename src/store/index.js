import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: ''
  },
  mutations: {
    user (state, user) {
      state.username = user
    }
  },
  actions: {
  },
  modules: {
  }
})
