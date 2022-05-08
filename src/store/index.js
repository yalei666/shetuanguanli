import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user';  // ./modules/user.js
import getters from './getters';
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user, 			//user:user,
  },
  getters :getters
});

export default store
