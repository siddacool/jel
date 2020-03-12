<template>
  <div>
    <div
      class="surface"
      id="surface"
      @mousemove.passive="e => mouseMove(e)"
      @click="e => handleLeftClick(e)"
      @contextmenu.prevent="(e, data) => handleRightClick(e, data)"
      v-shortkey="['alt', 'p']"
      @shortkey="bla()"
    >
      <section :style="{ background: backdrop }"></section>
    </div>
    <ContextMenu ref="menu" />
  </div>
</template>

<script>
import ContextMenu from './ContextMenu.vue';
import { getMousePoisotion, getWindowDimention } from '../utils';

export default {
  name: 'surface',
  components: {
    ContextMenu
  },
  computed: {
    // a computed getter
    backdrop() {
      // `this` points to the vm instance
      return this.$store.state.backdrop;
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
      this.$store.dispatch('changeCursorPosition', getMousePoisotion(e));
    },
    mouseMove(e) {
      if (this.isColorPickerVisible || getWindowDimention().x < 1025) return;
      this.$store.dispatch('changeCursorPosition', getMousePoisotion(e));
    },
    handleLeftClick(e) {
      this.commonClickActions(e);
    },
    handleRightClick(e, data) {
      const { x: width } = getWindowDimention();
      if (width < 1025) return null;
      this.commonClickActions(e);
      this.$refs.menu.$children[0].open(e, data);
    },
    bla() {
      this.$store.dispatch('showColorPicker');
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
