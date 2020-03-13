<template>
  <vue-context :close-on-click="false" v-show="!isColorPickerVisible">
    <li>
      <a href="#" @click.prevent="toggleColorPicker">
        Color Picker
        <span class="shortcut">alt + p</span>
      </a>
    </li>
    <li>
      <div class="group">
        <p>Swatches</p>
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
</template>

<script>
import { VueContext } from 'vue-context';
import backdrop from './backdrop.vue';

export default {
  name: 'ContextMenu',
  components: {
    'vue-context': VueContext,
    backdrop
  },
  computed: {
    swatches() {
      return this.$store.state.swatches;
    },
    isColorPickerVisible() {
      // `this` points to the vm instance
      return this.$store.state.isColorPickerVisible;
    }
  },
  methods: {
    toggleColorPicker() {
      this.$store.dispatch('toggleColorPicker');
    },
    activeSwatch(index) {
      this.$store.dispatch('activateSwatch', index);
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
  padding: 0;
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

.v-context > li > .group,
.v-context ul > li > .group {
  padding: 0.9rem 1rem;
  position: relative;
}

.v-context > li > .group > p,
.v-context ul > li > .group > p {
  font-size: 13px;
  font-weight: 500;
  text-align: left;
  margin-bottom: 10px;
  color: #212529;
}

.shortcut {
  font-weight: 600;
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
</style>
