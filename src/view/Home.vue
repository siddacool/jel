<template>
  <div class="home-landing">
    <Surface />
    <color-picker
      :backdrop="backdrop"
      :backdropFresh="backdropFresh"
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
  data() {
    return {
      backdrop: this.$store.state.backdrop
    };
  },
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
    backdropFresh() {
      // `this` points to the vm instance
      return this.$store.state.backdrop;
    }
  },
  methods: {
    updateValue(e) {
      this.$store.dispatch('changeBackDrop', e);
    },
    hideColorPicker() {
      this.$store.dispatch('hideColorPicker');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
