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
    <div v-if="isDesktop">
      <ContextMenu ref="menu" :darkTheme="darkTheme" />
    </div>
  </div>
</template>

<script>
import { getWindowDimention } from '../utils';

export default {
  name: 'surface',
  data() {
    return {
      isDesktop: getWindowDimention().x >= 1025
    };
  },
  props: {
    darkTheme: Boolean
  },
  components: {
    ContextMenu: () =>
      import(
        /* webpackChunkName: "context-menu" */
        './ContextMenu.vue'
      )
  },
  computed: {
    backdrop() {
      return this.$store.getters.backdrop;
    },
    isColorPickerVisible() {
      return this.$store.state.isColorPickerVisible;
    }
  },
  methods: {
    commonClickActions() {
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
