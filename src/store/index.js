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
    swatches: state.swatches,
    darkTheme: state.darkTheme,
    isKeyboardLocked: state.isKeyboardLocked
  })
});

export default new Vuex.Store({
  state: {
    isColorPickerVisible: true,
    swatches,
    darkTheme: false,
    isKeyboardLocked: false,
    isMobileMenuVisible: false,
    isAboutVisible: false
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
    },
    toggleDarkTheme(state) {
      state.darkTheme = !state.darkTheme;
    },
    seteDarkTheme(state, status) {
      state.darkTheme = status;
    },
    toggleKeyboardLock(state) {
      state.isKeyboardLocked = !state.isKeyboardLocked;
    },
    toggleAboutVisibility(state) {
      state.isAboutVisible = !state.isAboutVisible;
    },
    setAboutVisibility(state, visibility) {
      state.isAboutVisible = visibility;
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
    },
    activeDarkTheme(context) {
      context.commit('seteDarkTheme', true);
    },
    removeDarkTheme(context) {
      context.commit('seteDarkTheme', false);
    },
    toggleDarkTheme(context) {
      context.commit('toggleDarkTheme');
    },
    toggleKeyboardLock(context) {
      context.commit('toggleKeyboardLock');
    },
    toggleAbout(context) {
      context.commit('toggleAboutVisibility');
    },
    showAbout(context) {
      context.commit('setAboutVisibility', true);
    },
    hideAbout(context) {
      context.commit('setAboutVisibility', false);
    }
  },
  plugins: [vuexPersist.plugin]
});
