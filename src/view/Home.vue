<template>
  <div class="home-landing">
    <Surface :colors="colors" />
    <chrome-picker v-model="colors" class="color-picker" />
  </div>
</template>

<script>
import { Chrome } from 'vue-color';
import Surface from '../components/Surface.vue';

export default {
  name: 'Home',
  data() {
    return {
      colors: '#194d33'
    };
  },
  components: {
    Surface,
    'chrome-picker': Chrome
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.color-picker {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
}
</style>
