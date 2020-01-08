import Vuex from 'vuex'
import {searchComponent} from "../api/cpm";

export default {
  namespaced: true,
  state: {
    query: {},
    list: [],
    nextToken: ''
  },
  getters: {
    query(state) {
      return state.query;
    },
    list(state) {
      return state.list;
    }
  },
  mutations: {
    setData(state, {query, list, more}) {
      state.query = query;
      state.list = list;
      state.more = more;
    }
  },
  actions: {
    async search({state, commit}, query) {
      const nextPage=await searchComponent(query);
      commit('setData', nextPage);
    },
    async more({state, commit}) {
      const query = state.query;
      const nextToken = state.nextToken;
      const nextPage=await searchComponent(query, nextToken);
      commit('setData', nextPage);
    }
  },
  modules: {
  }
}
