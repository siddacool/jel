<template>
  <div class="home-landing">
    <Surface />
    <ColorPicker />
  </div>
</template>

<script>
import Surface from '../components/Surface.vue';
import ColorPicker from '../components/ColorPicker.vue';

export default {
  name: 'Home',
  components: {
    Surface,
    ColorPicker
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
