<template>
  <div class="surface" id="surface" @click="hideColorPicker" @contextmenu.prevent="$refs.menu.open">
    <section :style="{ background: backdrop }"></section>

      <vue-context ref="menu">
      <li>
          <a href="#" @click.prevent="onClick($event.target.innerText)">Color Picker</a>
      </li>
      <li>
          <a href="#" @click.prevent="onClick($event.target.innerText)">Option 2</a>
      </li>
  </vue-context>
  </div>
</template>

<script>
import { VueContext } from 'vue-context';

export default {
  name: 'surface',
  components: {
    'vue-context': VueContext,
  },
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
<style>
@import '~vue-context/dist/css/vue-context.css';

.surface {
  width: 100vw;
  height: 100vh;
}

.surface > section {
  width: 100%;
  height: 100%;
}
</style>
