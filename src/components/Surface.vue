<template>
  <div class="surface" id="surface" @click="hideColorPicker">
    <section :style="{ background: backdrop }"></section>
  </div>
</template>

<script>
export default {
  name: 'surface',
  computed: {
    // a computed getter
    backdrop() {
      // `this` points to the vm instance
      return this.$store.state.backdrop;
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
