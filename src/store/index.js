import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: 'jel-20200305-vue-storage',
  storage: localStorage,
  reducer: state => ({ backdrop: state.backdrop })
});

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
  plugins: [vuexPersist.plugin]
});
