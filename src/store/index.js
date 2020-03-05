import Vue from 'vue';
import Vuex from 'vuex';
// import VuexPersist from 'vuex-persist';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    backdrop: '#eee'
  },
  mutations: {
    setBackdrop(state, color) {
      state.backdrop = color;
    }
  },
  actions: {
    changeBackDrop(context, payload) {
      const color = payload.hex ? payload.hex : payload;
      context.commit('setBackdrop', color);
    }
  },
  modules: {}
});
