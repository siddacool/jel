<template>
  <color-picker
    :backdrop="backdrop"
    :backdropFresh="backdropFresh"
    :show="isColorPickerVisible"
    :updateValue="updateValue"
    :hideColorPicker="hideColorPicker"
  />
</template>

<script>
import colorPicker from './color-picker';

export default {
  name: 'ColorPicker',
  data() {
    return {
      backdrop: this.$store.state.backdrop
    };
  },
  components: {
    'color-picker': colorPicker
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
