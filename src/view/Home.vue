<template>
  <div class="home-landing">
    <Surface :darkTheme="isDarkThemeActive" />
    <Launcher
      :darkTheme="isDarkThemeActive"
      :resetMousePosition="resetMousePositionDetect"
    />
    <div v-if="isMobile">
      <MobileMenu
        :darkTheme="isDarkThemeActive"
        :isColorPickerVisible="isColorPickerVisible"
        :isMobileMenuVisible="isMobileMenuVisible"
      />
    </div>
    <color-picker
      :backdrop="backdrop"
      :backdropFresh="backdrop"
      :show="isColorPickerVisible"
      :updateValue="updateValue"
      :hideColorPicker="hideColorPicker"
      :darkTheme="isDarkThemeActive"
      :mousePos="mousePos"
    />
    <div v-if="isAboutVisible">
      <About :show="isAboutVisible" :darkTheme="isDarkThemeActive" />
    </div>
  </div>
</template>

<script>
import colorPicker from '../components/color-picker.vue';
import { getWindowDimention, getMousePoisotion } from '../utils';

const debounced = (delay, fn) => {
  let timerId;
  return (...args) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn(...args);
      timerId = null;
    }, delay);
  };
};

export default {
  name: 'Home',
  components: {
    Surface: () => import('../components/Surface.vue'),
    Launcher: () => import('../components/Launcher.vue'),
    MobileMenu: () =>
      import(
        /* webpackChunkName: "mobile-menu" */
        '../components/MobileMenu.vue'
      ),
    About: () =>
      import(
        /* webpackChunkName: "about" */
        '../components/About.vue'
      ),
    'color-picker': colorPicker
  },
  data() {
    return {
      mousePos: {},
      isMobile: getWindowDimention().x < 1025
    };
  },
  computed: {
    // a computed getter
    isColorPickerVisible() {
      // `this` points to the vm instance
      return this.$store.state.isColorPickerVisible;
    },
    isMobileMenuVisible() {
      // `this` points to the vm instance
      return this.$store.state.isMobileMenuVisible;
    },
    backdrop() {
      // `this` points to the vm instance
      return this.$store.getters.backdrop;
    },
    // Dark theme check
    isDarkThemeActive() {
      return this.$store.state.darkTheme;
    },
    isAboutVisible() {
      return this.$store.state.isAboutVisible;
    },
    isKeyboardLocked() {
      return this.$store.state.isKeyboardLocked;
    },
    swatchesLength() {
      return this.$store.getters.swatches.length;
    }
  },
  methods: {
    updateValue(e) {
      this.$store.dispatch('changeActiveSwatchColor', e);
    },
    hideColorPicker() {
      this.$store.dispatch('hideColorPicker');
    },
    keyDetect(e) {
      if (this.isKeyboardLocked) return;

      // Toggle Color Picker
      if (e.altKey && e.key === 'p') {
        this.$store.dispatch('toggleColorPicker');
      }

      // Next swatch
      if (e.key === 'ArrowRight') {
        this.$store.dispatch('activateNextSwatch');
      }

      // prev swatch
      if (e.key === 'ArrowLeft') {
        this.$store.dispatch('activatePrevSwatch');
      }

      if (['1', '2', '3', '4', '5', '6'].indexOf(e.key) > -1) {
        const index = parseInt(e.key, 10) - 1;
        this.$store.dispatch('activateSwatch', index);
      }
    },
    mousePositionDetect(e) {
      if (this.isColorPickerVisible || getWindowDimention().x < 1025) return;
      this.mousePos = getMousePoisotion(e);
    },
    resetMousePositionDetect() {
      if (this.isColorPickerVisible || getWindowDimention().x < 1025) return;
      this.mousePos = {
        x: 32,
        y: 32
      };
    }
  },
  created() {
    const dmousePositionDetect = debounced(50, this.mousePositionDetect);
    window.addEventListener('keydown', this.keyDetect);
    window.addEventListener('mousemove', dmousePositionDetect);
  },
  destroyed() {
    window.removeEventListener('keydown');
    window.removeEventListener('mousemove');
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
