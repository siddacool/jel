<template>
  <div class="home-landing">
    <Surface />
    <color-picker
      :backdrop="backdrop"
      :backdropFresh="backdrop"
      :show="isColorPickerVisible"
      :updateValue="updateValue"
      :hideColorPicker="hideColorPicker"
    />
    <Launcher :darkTheme="isDarkThemeActive"/>
  </div>
</template>

<script>
import Surface from '../components/Surface.vue';
import colorPicker from '../components/color-picker.vue';
import Launcher from '../components/Launcher.vue';

export default {
  name: 'Home',
  components: {
    Surface,
    'color-picker': colorPicker,
    Launcher
  },
  computed: {
    // a computed getter
    isColorPickerVisible() {
      // `this` points to the vm instance
      return this.$store.state.isColorPickerVisible;
    },
    backdrop() {
      // `this` points to the vm instance
      return this.$store.getters.backdrop;
    },
    isDarkThemeActive() {
      return this.$store.state.darkTheme;
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

      // prev swatch
      if (e.altKey && e.key === 'n') {
        this.$store.dispatch('toggleDarkTheme');
      }
    }
  },
  created() {
    window.addEventListener('keydown', this.keyDetect);
  },
  destroyed() {
    window.removeEventListener('keydown');
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
