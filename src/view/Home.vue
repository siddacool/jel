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
    <Launcher />
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
    }
  },
  methods: {
    updateValue(e) {
      this.$store.dispatch('changeActiveSwatchColor', e);
    },
    hideColorPicker() {
      this.$store.dispatch('hideColorPicker');
    },
    toggleColorPicker() {
      this.$store.dispatch('toggleColorPicker');
    },
    keyDetect(e) {
      // Toggle Color Picker
      if (e.altKey && e.key === 'p') {
        this.toggleColorPicker();
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
