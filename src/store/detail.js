import {loadComponent} from "../api/cpm";

export default {
  namespaced: true,
  state: {
    directory: '',
    component: {}
  },
  getters: {
    directory(state) {
      return state.directory;
    },
    component(state) {
      return state.component;
    }
  },
  mutations: {
    setDirectory(state, directory) {
      state.directory=directory;
    },
    setComponent(state, component) {
      state.component = component;
    }
  },
  actions: {
    async loadComponent({commit}, {directory, success, fail}) {
      const component=await loadComponent(directory);
      if (!component) {
        if (fail) fail();
        return;
      }
      commit('setDirectory', directory);
      commit('setComponent', component);
      if (success) success();
    }
  },
  modules: {
  }
}
