<template>
  <div
    class="vue-context-holder"
    :class="isDarkThemeActive ? 'dark' : null"
    v-show="!isColorPickerVisible"
  >
    <vue-context :close-on-click="false">
      <li>
        <a href="#" @click.prevent="toggleColorPicker">
          Color Picker
          <span class="shortcut">alt + p</span>
        </a>
      </li>
      <li>
        <a href="#" @click.prevent="toggleDarkTheme">
          Dark Theme
          <span class="shortcut">alt + n</span>
        </a>
      </li>
      <li>
        <div class="group">
          <p>
            Swatches
            <span class="shortcut">left / right</span>
          </p>
          <div class="context_swatches">
            <li
              v-for="(swatch, index) in swatches"
              :key="index"
              :class="swatch.selected ? 'selected' : null"
              @click.prevent="activeSwatch(index)"
            >
              <backdrop :color="swatch.color" />
            </li>
          </div>
        </div>
      </li>
    </vue-context>
  </div>
</template>

<script>
import { VueContext } from 'vue-context';

export default {
  name: 'ContextMenu',
  components: {
    'vue-context': VueContext
  },
  computed: {
    swatches() {
      return this.$store.state.swatches;
    },
    isColorPickerVisible() {
      return this.$store.state.isColorPickerVisible;
    },
    isDarkThemeActive() {
      return this.$store.state.darkTheme;
    }
  },
  methods: {
    toggleColorPicker() {
      this.$store.dispatch('toggleColorPicker');
    },
    activeSwatch(index) {
      this.$store.dispatch('activateSwatch', index);
    },
    toggleDarkTheme() {
      this.$store.dispatch('toggleDarkTheme');
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
.v-context ul> li >a {
  font-weight: 500;
  padding-left: var(--slick-colorpicker-fencing-horizontal);
  padding-right: var(--slick-colorpicker-fencing-horizontal);
  padding-top: var(--slick-colorpicker-fencing-verticle);
  padding-bottom: var(--slick-colorpicker-fencing-verticle);
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

.v-context > li > .group,
.v-context ul > li > .group {
  padding-left: var(--slick-colorpicker-fencing-horizontal);
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

.v-context > li > a:focus,
.v-context ul > li > a:focus {
  background-color: inherit;
}

.shortcut {
  font-weight: 600;
  font-size: 12px;
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
.vue-context-holder.dark .v-context ul > li >a:hover {
  background-color: var(--dark-bg-hover-color);
}

.vue-context-holder.dark .context_swatches li:not(.selected) {
  border-color: var(--dark-bg-hover-color);
}
</style>
