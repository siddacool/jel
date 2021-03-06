<template>
  <div
    class="vue-context-holder"
    :class="darkTheme ? 'dark' : null"
    v-show="!isColorPickerVisible"
  >
    <vue-context :close-on-click="false">
      <CommonMenu :darkTheme="darkTheme" />
    </vue-context>
  </div>
</template>

<script>
import { VueContext } from 'vue-context';
import CommonMenu from './CommonMenu';

export default {
  name: 'ContextMenu',
  props: {
    darkTheme: Boolean
  },
  components: {
    'vue-context': VueContext,
    CommonMenu
  },
  computed: {
    isColorPickerVisible() {
      return this.$store.state.isColorPickerVisible;
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
  min-width: 256px;
  padding: 0;
}

.v-context > li > a,
.v-context ul> li > a {
  font-weight: 500;
  padding-left: 2.5rem;
  padding-right: var(--slick-colorpicker-fencing-horizontal);
  padding-top: var(--slick-colorpicker-fencing-verticle);
  padding-bottom: var(--slick-colorpicker-fencing-verticle);
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  position: relative;
}

.v-context > li > a .checked,
.v-context ul> li >a .checked {
  width: 14px;
  height: 14px;
  position: absolute;
  top: 13px;
  left: 12px;
  fill: #212529;
}

.v-context > li > .group,
.v-context ul > li > .group {
  padding-left: 2.5rem;
  padding-right: var(--slick-colorpicker-fencing-horizontal);
  padding-top: var(--slick-colorpicker-fencing-verticle);
  padding-bottom: var(--slick-colorpicker-fencing-verticle);
  position: relative;
}

.v-context > li > .group > p,
.v-context ul > li > .group > p {
  font-size: inherit;
  font-weight: 500;
  text-align: left;
  margin-bottom: 10px;
  color: #212529;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.v-context > li > a:hover,
.v-context ul > li > a:hover,
.v-context > li > .group:hover,
.v-context ul > li > .group:hover {
  background-color: #f7f7f7;
}

.shortcut {
  font-weight: 600;
  font-size: 12px;
}

.shortcut svg {
  width: 10px;
  height: 10px;
  fill: #212529;
}

.context_swatches {
  display: flex;
  margin: 0;
  justify-content: space-between;
}

.context_swatches li {
  display: block;
  width: 23px;
  height: 23px;
  border: 1px solid #ececec;
  border-radius: 4px;
  cursor: pointer;
}

.context_swatches li.selected {
  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12);
  border: none;
  transform: scale(1.1, 1.1);
}

.context_swatches li div {
  border-radius: inherit;
}

/* active mark */
.v-context > li > a.active::before,
.v-context ul > li > a.active::before {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #23a8ff;
  left: 8px;
}

/* dark theme */
.vue-context-holder.dark .v-context,
.vue-context-holder.dark .v-context ul {
  background-color: var(--dark-bg-color);
}

.vue-context-holder.dark .v-context > li > a,
.vue-context-holder.dark .v-context ul > li > a,
.vue-context-holder.dark .v-context > li > .group > p,
.vue-context-holder.dark .v-context ul > li > .group > p {
  color: var(--dark-color);
}

.vue-context-holder.dark .v-context > li > a:focus,
.vue-context-holder.dark .v-context > li > a:hover,
.vue-context-holder.dark .v-context ul > li >a:focus,
.vue-context-holder.dark .v-context ul > li >a:hover,
.vue-context-holder.dark .v-context > li > .group:hover,
.vue-context-holder.dark .v-context ul > li > .group:hover {
  background-color: var(--dark-bg-hover-color);
}

.vue-context-holder.dark .v-context > li > .group:hover .context_swatches li:not(.selected),
.vue-context-holder.dark .v-context ul > li > .group:hover .context_swatches li:not(.selected) {
  border-color: var(--dark-bg-color);
}

.vue-context-holder.dark .context_swatches li:not(.selected) {
  border-color: var(--dark-bg-hover-color);
}

.vue-context-holder.dark .v-context > li > a svg,
.vue-context-holder.dark .v-context ul> li >a svg {
  fill: var(--dark-color);
}

.vue-context-holder.dark .shortcut svg {
  fill: var(--dark-color);
}
</style>
