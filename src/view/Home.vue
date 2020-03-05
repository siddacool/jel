<template>
  <div class="home-landing">
    <Surface />
    <chrome-picker
      :value="backdrop"
      @input="updateValue"
      class="color-picker"
    />
  </div>
</template>

<script>
import { Chrome } from 'vue-color';
import Surface from '../components/Surface.vue';

export default {
  name: 'Home',
  data() {
    return {
      backdrop: this.$store.state.backdrop
    };
  },
  components: {
    Surface,
    'chrome-picker': Chrome
  },
  methods: {
    updateValue(e) {
      this.$store.dispatch('changeBackDrop', e);
    }
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
