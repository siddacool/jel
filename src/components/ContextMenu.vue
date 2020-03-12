<template>
  <vue-context>
    <li>
      <a href="#" @click.prevent="toggleColorPicker">
        Color Picker
        <span class="shortcut">alt + p</span>
      </a>
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
  font-size: 13px;
  min-width: 14rem;
  min-height: 10rem;
}

.v-context > li > a,
.v-context ul> li >a {
  font-weight: 500;
  padding: 0.9rem 1rem;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  position: relative;
}

.v-context > li > a svg,
.v-context ul> li >a svg {
  width: 16px;
  height: 16px;
  margin-right: 1rem;
  position: absolute;
  top: 2px;
}

.shortcut {
  font-weight: 600;
}
</style>
