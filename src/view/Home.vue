<template>
  <div class="home-landing">
    <Surface />
    <ColorPicker />
    <Launcher />
  </div>
</template>

<script>
import Surface from '../components/Surface.vue';
import ColorPicker from '../components/ColorPicker.vue';
import Launcher from '../components/Launcher.vue';

export default {
  name: 'Home',
  components: {
    Surface,
    ColorPicker,
    Launcher
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
