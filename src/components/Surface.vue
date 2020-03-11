<template>
  <div>
    <div
      class="surface"
      id="surface"
      @click="hideColorPicker"
      @contextmenu.prevent="$refs.menu.$children[0].open"
    >
      <section :style="{ background: backdrop }"></section>
    </div>
    <ContextMenu ref="menu" :show="isColorPickerVisible" />
  </div>
</template>

<script>
import ContextMenu from './ContextMenu.vue';

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
    hideColorPicker() {
      this.$store.dispatch('hideColorPicker');
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
