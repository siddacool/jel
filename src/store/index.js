import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

const swatches = [
  {
    color: '#f5207a',
    selected: true
  },
  {
    color: '#16E7BE'
  },
  {
    color: '#F32109'
  },
  {
    color: '#009AFF'
  },
  {
    color: '#B600FF'
  },
  {
    color: '#FFC312'
  }
];

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: 'jel-20200305-vue-storage',
  storage: localStorage,
  reducer: state => ({
    isColorPickerVisible: state.isColorPickerVisible,
    swatches: state.swatches
  })
});

export default new Vuex.Store({
  state: {
    isColorPickerVisible: true,
    cursorPoistion: {
      x: 32,
      y: 32
    },
    swatches
  },
  getters: {
    backdrop: state => {
      return state.swatches.find(swatch => swatch.selected).color;
    }
  },
  mutations: {
    toggleColorPickerVisibility(state) {
      state.isColorPickerVisible = !state.isColorPickerVisible;
    },
    setColorPickerVisibility(state, visibility) {
      state.isColorPickerVisible = visibility;
    },
    setCursorPosition(state, pos) {
      state.cursorPoistion = pos;
    },
    setActiveSwatchColor(state, color) {
      const index = state.swatches.findIndex(swatch => swatch.selected);

      state.swatches[index].color = color;
    },
    setActiveSwatch(state, index) {
      const newSwatches = state.swatches.map((swatch, swatchIndex) =>
        swatchIndex === index
          ? { ...swatch, selected: true }
          : { ...swatch, selected: false }
      );

      state.swatches = newSwatches;
    },
    setNextSwatch(state) {
      const activeSwatchIndex = state.swatches.findIndex(swatch => swatch.selected);
      const nextSwatchIndex = activeSwatchIndex + 1;

      if (!state.swatches[nextSwatchIndex]) return;

      const newSwatches = state.swatches.map((swatch, swatchIndex) =>
        swatchIndex === nextSwatchIndex
          ? { ...swatch, selected: true }
          : { ...swatch, selected: false }
      );

      state.swatches = newSwatches;
    },
    setPrevSwatch(state) {
      const activeSwatchIndex = state.swatches.findIndex(swatch => swatch.selected);
      const nextSwatchIndex = activeSwatchIndex - 1;

      if (!state.swatches[nextSwatchIndex]) return;

      const newSwatches = state.swatches.map((swatch, swatchIndex) =>
        swatchIndex === nextSwatchIndex
          ? { ...swatch, selected: true }
          : { ...swatch, selected: false }
      );

      state.swatches = newSwatches;
    }
  },
  actions: {
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
    },
    changeActiveSwatchColor(context, payload) {
      const color = payload.hex ? payload.hex : payload;
      context.commit('setActiveSwatchColor', color);
    },
    activateSwatch(context, index) {
      context.commit('setActiveSwatch', index);
    },
    activateNextSwatch(context) {
      context.commit('setNextSwatch');
    },
    activatePrevSwatch(context) {
      context.commit('setPrevSwatch');
    }
  },
  plugins: [vuexPersist.plugin]
});
