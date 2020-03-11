<template>
  <vue-context v-show="!show">
    <li>
      <a href="#" @click.prevent="toggleColorPicker">Color Picker</a>
    </li>
  </vue-context>
</template>

<script>
import { VueContext } from 'vue-context';

export default {
  name: 'ContextMenu',
  components: {
    'vue-context': VueContext
  },
  props: {
    show: Boolean
  },
  computed: {
    isColorPickerVisible() {
      // `this` points to the vm instance
      return this.$store.state.isColorPickerVisible;
    }
  },
  methods: {
    toggleColorPicker() {
      this.$store.dispatch('toggleColorPicker');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '~vue-context/dist/css/vue-context.css';

/* alighn options left */
.v-context > li > a,
.v-context ul > li > a {
  text-align: left;
}

/* adjust font size */
.v-context,
.v-context ul {
  font-size: 14px;
}
</style>
