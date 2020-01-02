import Vue from 'vue'
import Vuex from 'vuex'
import list from "./list";
import detail from "./detail";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    list, detail
  }
})
