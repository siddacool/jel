<template>
  <div class="surface" id="surface">
    <section :style="{ background: color }"></section>
  </div>
</template>

<script>
export default {
  name: 'surface',
  props: {
    colors: [String, Object]
  },
  computed: {
    // a computed getter
    color() {
      // `this` points to the vm instance
      return this.colors.hex ? this.colors.hex : this.colors;
    }
  },
  data() {
    return {
      backdrop: this.$store.state.backdrop
    };
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
