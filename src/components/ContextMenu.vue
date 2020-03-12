<template>
  <vue-context>
    <li>
      <a href="#" @click.prevent="toggleColorPicker">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.717 8.831c-.734.824-.665 2.087.158 2.825l-1.333 1.491-7.455-6.667 1.334-1.49c.822.736 2.087.666 2.822-.159l3.503-3.831c.593-.663 1.414-1 2.238-1 1.666 0 3.016 1.358 3.016 2.996 0 .723-.271 1.435-.779 2.005l-3.504 3.83zm-8.217 6.169h-2.691l3.928-4.362-1.491-1.333-7.9 8.794c-1.277 1.423-.171 2.261-1.149 4.052-.135.244-.197.48-.197.698 0 .661.54 1.151 1.141 1.151.241 0 .492-.079.724-.256 1.733-1.332 2.644-.184 3.954-1.647l7.901-8.792-1.491-1.333-2.729 3.028z"/></svg>
        Color Picker
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
  font-size: 14px;
  min-width: 14rem;
}

.v-context > li > a,
.v-context ul> li >a {
  font-weight: 500;
  padding: .5rem 1rem;
  display: flex;
  align-items: baseline;
}

.v-context > li > a svg,
.v-context ul> li >a svg {
  width: 21px;
  height: 21px;
  margin-right: 1rem;
  position: relative;
  top: 2px;
}
</style>
