<template>
  <div>
    <div
      class="surface"
      id="surface"
      @click="e => handleLeftClick(e)"
      @contextmenu.prevent="(e, data) => handleRightClick(e, data)"
    >
      <backdrop :color="backdrop" />
    </div>
    <ContextMenu ref="menu" :darkTheme="darkTheme" />
  </div>
</template>

<script>
import ContextMenu from './ContextMenu.vue';
import { getWindowDimention } from '../utils';

export default {
  name: 'surface',
  props: {
    darkTheme: Boolean
  },
  components: {
    ContextMenu
  },
  computed: {
    // a computed getter
    backdrop() {
      // `this` points to the vm instance
      return this.$store.getters.backdrop;
    },
    isColorPickerVisible() {
      // `this` points to the vm instance
      return this.$store.state.isColorPickerVisible;
    }
  },
  methods: {
    commonClickActions(e) {
      // --slick-colorpicker-width: 256px;
      // --slick-colorpicker-height: 213px;
      this.$store.dispatch('hideColorPicker');
    },
    handleLeftClick(e) {
      this.commonClickActions(e);
    },
    handleRightClick(e, data) {
      const { x: width } = getWindowDimention();
      if (width < 1025) return null;
      this.commonClickActions(e);
      this.$refs.menu.$children[0].open(e, data);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.surface {
  width: 100vw;
  height: 100vh;
}

.surface > section {
  width: 100%;
  height: 100%;
}
</style>
