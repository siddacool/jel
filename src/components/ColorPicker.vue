<template>
  <chrome-picker
    :value="backdrop"
    @input="updateValue"
    class="color-picker-ui"
  />
</template>

<script>
import { Chrome } from 'vue-color';

export default {
  name: 'ColorPicker',
  data() {
    return {
      backdrop: this.$store.state.backdrop
    };
  },
  components: {
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
.color-picker-ui {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
}
</style>
