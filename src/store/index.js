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
    backdrop: '#f5207a',
    isColorPickerVisible: true,
    cursorPoistion: {
      x: 32,
      y: 32
    }
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
    },
    setCursorPosition(state, pos) {
      state.cursorPoistion = pos;
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
    },
    changeCursorPosition(context, payload) {
      if (!payload || !payload.x || !payload.y) return;
      context.commit('setCursorPosition', payload);
    },
    resetCursorPosition(context) {
      context.commit('setCursorPosition', {
        x: 32,
        y: 32
      });
    }
  },
  plugins: [vuexPersist.plugin]
});
