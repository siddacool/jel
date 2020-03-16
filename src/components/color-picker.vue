<template>
  <div
    class="color-picker"
    :class="darkTheme ? 'dark' : null"
    v-show="show"
    :style="position ? `top:${position.y}px; left:${position.x}px` : null"
  >
   <icon-btn
      :action="toggleDarkTheme"
      :darkTheme="darkTheme"
      class="color-picker_dark-mode-toggle"
      svgSize="large"
      size="medium"
      noGlass
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.088 13.126l1.912-1.126-1.912-1.126c-1.021-.602-1.372-1.91-.788-2.942l1.093-1.932-2.22-.02c-1.185-.01-2.143-.968-2.153-2.153l-.02-2.219-1.932 1.093c-1.031.583-2.34.233-2.941-.788l-1.127-1.913-1.127 1.913c-.602 1.021-1.91 1.372-2.941.788l-1.932-1.093-.02 2.219c-.01 1.185-.968 2.143-2.153 2.153l-2.22.02 1.093 1.932c.584 1.032.233 2.34-.788 2.942l-1.912 1.126 1.912 1.126c1.021.602 1.372 1.91.788 2.942l-1.093 1.932 2.22.02c1.185.01 2.143.968 2.153 2.153l.02 2.219 1.932-1.093c1.031-.583 2.34-.233 2.941.788l1.127 1.913 1.127-1.913c.602-1.021 1.91-1.372 2.941-.788l1.932 1.093.02-2.219c.011-1.185.969-2.143 2.153-2.153l2.22-.02-1.093-1.932c-.584-1.031-.234-2.34.788-2.942zm-10.117 6.874c-4.411 0-8-3.589-8-8s3.588-8 8-8 8 3.589 8 8-3.589 8-8 8zm.029-2c-3.313 0-6-2.687-6-6s2.687-6 6-6v12z"/></svg>
    </icon-btn>
    <icon-btn
      :action="hideColorPicker"
      :darkTheme="darkTheme"
      color="danger"
      class="color-picker_close"
      svgSize="xsmall"
      size="xsmall"
      noGlass
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"
        />
      </svg>
    </icon-btn>
    <span class="color-picker_hex-val">{{ backdropFresh }}</span>
    <div class="color-picker_ui-enclosure">
      <chrome-picker
        :value="backdrop"
        @input="updateValue"
        class="color-picker_ui"
      />
    </div>
    <ul class="color-picker_swatches">
      <li
        v-for="(swatch, index) in swatches"
        :key="index"
        :class="swatch.selected ? 'selected' : null"
        @click="activeSwatch(index)"
      >
        <backdrop :color="swatch.color" />
      </li>
    </ul>
  </div>
</template>

<script>
import { Chrome } from 'vue-color';
import { getWindowDimention } from '../utils';

export default {
  name: 'color-picker',
  props: {
    backdrop: String,
    show: Boolean,
    backdropFresh: String,
    updateValue: Function,
    hideColorPicker: Function,
    darkTheme: Boolean
  },
  components: {
    'chrome-picker': Chrome
  },
  computed: {
    position() {
      const { x: width, y: height } = getWindowDimention();
      if (width < 1025) return null;

      let { x, y } = this.$store.state.cursorPoistion;
      const colorPickerWidth = 256;
      const colorPickerHeight = 265;

      const fencing = {
        left: 32,
        top: 32,
        right: width - 32 - colorPickerWidth,
        bottom: height - 32 - colorPickerHeight
      };

      if (x < fencing.left) x = fencing.left;
      if (x > fencing.right) x = fencing.right;
      if (y < fencing.top) y = fencing.top;
      if (y > fencing.bottom) y = fencing.bottom;

      return {
        x,
        y
      };
    },
    swatches() {
      return this.$store.state.swatches;
    }
  },
  methods: {
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
/* full width */
#app .vc-chrome {
  box-shadow: none;
  width: 100%;
}

/* Remove alpha bar */
#app .vc-chrome-alpha-wrap {
  display: none;
}

/* Extend Hue Bar */
#app .vc-chrome-hue-wrap {
  margin-bottom: 0;
  height: 30px;
}

#app .vc-chrome-hue-wrap .vc-hue-picker {
  height: 31px;
}

#app .vc-chrome-body {
  padding-top: 1.2rem;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 0;
}

#app .vc-chrome-fields-wrap {
  display: none;
}

#app .vc-chrome-sliders {
  padding-left: var(--fencing-horizontal);
  padding-right: var(--fencing-horizontal);
}

.color-picker {
  position: fixed;
  z-index: 1000;
  bottom: 0;
  left: 0;
  width: 100vw;
  box-shadow: 0 0 2px rgba(0,0,0,.3),0 4px 8px rgba(0,0,0,.3);
  background-color: #fff;
  padding-left: 0;
  padding-right: 0;
  padding-top: var(--fencing-verticle);
  padding-bottom: 0;
  border-radius: var(--round-card);
}

.color-picker_ui {
  box-shadow: none;
  width: 100%;
}

.color-picker_ui-enclosure {
  padding-top: 2rem;
  padding-left: var(--fencing-horizontal);
  padding-right: var(--fencing-horizontal);
}

.color-picker_close {
  position: absolute;
  right: var(--fencing-horizontal);
  top: 10px;
}

/* Color Circle, it's hidden */
#app .vc-chrome-color-wrap {
  position: absolute;
  top: 10px;
  left: var(--fencing-horizontal);
  display: none;
}

.color-picker_hex-val {
  position: absolute;
  left: var(--fencing-horizontal);
  top: 19px;
  font-weight: 500;
}

.color-picker_swatches {
  background-color: #f7f7f7;
  border-radius: var(--round-desktop-card);
  padding-top: 2rem;
  padding-left: var(--fencing-horizontal);
  padding-right: var(--fencing-horizontal);
  padding-bottom: 3.6rem;
  display: flex;
  margin: 0;
  margin-top: 1.2rem;
  justify-content: space-around;
}

.color-picker_swatches li {
  display: block;
  width: 40px;
  height: 40px;
  border: 1px solid #ececec;
  border-radius: 4px;
}

.color-picker_swatches li.selected {
  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12);
  border: none;
  transform: scale(1.2, 1.2);
}

.color-picker_swatches li div {
  border-radius: inherit;
}

.color-picker_dark-mode-toggle {
  position: absolute;
  top: 10px;
  left: calc(50% - 20px);
}

/* dark theme */

.color-picker.dark {
  background-color: var(--dark-bg-color);
}

.color-picker.dark .color-picker_hex-val {
  color: var(--dark-color);
}

.color-picker.dark .vc-chrome-body {
  background-color: var(--dark-bg-color);
}

.color-picker.dark .vc-hue-picker {
  background-color: var(--dark-color);
}

.color-picker.dark .color-picker_swatches {
  background-color: var(--dark-bg-hover-color);
}

.color-picker.dark .color-picker_swatches li:not(.selected) {
  border-color: var(--dark-bg-hover-color);
}

.color-picker.dark .vc-saturation--black {
  border: 1px solid #5d5d5d;
}

@media only screen and (min-width: 1025px),
  screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
  .color-picker {
    top: calc(30% - (var(--color-picker-width) / 2));
    left: calc(50% - (var(--color-picker-width) / 2));
    padding-left: 0;
    padding-right: 0;
    padding-top: var(--slick-colorpicker-fencing-verticle);
    padding-bottom: 0;
    bottom: initial;
    width: var(--slick-colorpicker-width);
    height: var(--slick-colorpicker-height);
    border-radius: var(--round-desktop-card);
  }

  .color-picker_ui-enclosure {
    padding-top: 2rem;
    padding-left: var(--slick-colorpicker-fencing-horizontal);
    padding-right: var(--slick-colorpicker-fencing-horizontal);
  }

  #app .vc-chrome-body {
    padding-top: var(--slick-colorpicker-fencing-verticle);
  }

  #app .vc-chrome-sliders {
    padding: 0;
  }

  /* Color Circle */
  #app .vc-chrome-color-wrap {
    left: var(--slick-colorpicker-fencing-horizontal);
  }

  .color-picker_hex-val {
    left: var(--slick-colorpicker-fencing-horizontal);
    font-size: 14px;
  }

  .color-picker_close {
    right: var(--slick-colorpicker-fencing-horizontal);
  }

  /* Hue bar height */
  #app .vc-chrome-hue-wrap {
    height: 10px;
  }

  #app .vc-chrome-hue-wrap .vc-hue-picker {
    height: 12px;
  }

  .color-picker_swatches {
    padding-top: 1rem;
    justify-content: space-between;
    padding-left: var(--slick-colorpicker-fencing-horizontal);
    padding-right: var(--slick-colorpicker-fencing-horizontal);
    padding-bottom: var(--slick-colorpicker-fencing-verticle);
    margin-top: var(--slick-colorpicker-fencing-verticle);
  }

  .color-picker_swatches li {
    width: 23px;
    height: 23px;
  }

  .color-picker_swatches li.selected {
    transform: scale(1.1, 1.1);
  }

  .color-picker .btn.color-picker_dark-mode-toggle {
    display: none;
  }
}
</style>
