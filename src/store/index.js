import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: 'jel-20200305-vue-storage',
  storage: localStorage,
  reducer: state => ({
    backdrop: state.backdrop,
    isColorPickerVisible: state.isColorPickerVisible
  })
});

export default new Vuex.Store({
  state: {
    backdrop: '#eee',
    isColorPickerVisible: true
  },
  mutations: {
    setBackdrop(state, color) {
      state.backdrop = color;
    },
    toggleColorPickerVisibility(state) {
      state.isColorPickerVisible = !state.isColorPickerVisible;
    },
    setColorPickerVisibility(state, visibility) {
      state.isColorPickerVisible = visibility;
    }
  },
  actions: {
    changeBackDrop(context, payload) {
      const color = payload.hex ? payload.hex : payload;
      context.commit('setBackdrop', color);
    },
    showColorPicker(context) {
      context.commit('setColorPickerVisibility', true);
    },
    hideColorPicker(context) {
      context.commit('setColorPickerVisibility', false);
    },
    toggleColorPicker(context) {
      context.commit('toggleColorPickerVisibility');
    }
  },
  plugins: [vuexPersist.plugin]
});
