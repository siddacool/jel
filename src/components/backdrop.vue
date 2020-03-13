<template>
  <div :style="{ background: color }" class="backdrop"></div>
</template>

<script>
export default {
  name: 'backdrop',
  props: {
    color: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.backdrop {
  width: 100%;
  height: 100%;
}
</style>
