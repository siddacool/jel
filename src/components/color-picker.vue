<template>
  <div class="color-picker" v-show="show">
    <icon-btn
      :action="hideColorPicker"
      color="danger"
      class="color-picker-close"
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
          d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/>
      </svg>
    </icon-btn>
    <span class="hex-val">{{ backdropFresh }}</span>
    <div class="color-picker-ui-enclosure">
      <chrome-picker
        :value="backdrop"
        @input="updateValue"
        class="color-picker-ui"
      />
    </div>
  </div>
</template>

<script>
import { Chrome } from 'vue-color';
import IconButton from './icon-button';

export default {
  name: 'color-picker',
  data() {
    return {
      closeButtonStyle: 'position: absolute; right: 6px; top: 6px;'
    };
  },
  props: {
    backdrop: String,
    show: Boolean,
    backdropFresh: String,
    updateValue: Function,
    hideColorPicker: Function
  },
  components: {
    'chrome-picker': Chrome,
    'icon-btn': IconButton
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

/* #app .vc-chrome-sliders {
  padding-left: var(--fencing-horizontal);
  padding-right: var(--fencing-horizontal);
} */

.color-picker {
  position: fixed;
  z-index: 1000;
  bottom: 0;
  left: 0;
  width: 100vw;
  box-shadow: 0 0 2px rgba(0,0,0,.3),0 4px 8px rgba(0,0,0,.3);
  background-color: #fff;
  padding-left: var(--fencing-horizontal);
  padding-right: var(--fencing-horizontal);
  padding-top: var(--fencing-verticle);
  padding-bottom: 3.6rem;
  border-radius: var(--round-card);
}

.color-picker-ui {
  box-shadow: none;
  width: 100%;
}

.color-picker-ui-enclosure {
  padding-top: 2rem;
}

.color-picker-close {
  position: absolute;
  right: var(--fencing-horizontal);
  top: 10px;
}

/* Color Circle */
#app .vc-chrome-color-wrap {
  position: absolute;
  top: 10px;
  left: var(--fencing-horizontal);
}

.hex-val {
  position: absolute;
  left: calc(var(--fencing-horizontal) + var(--fencing-horizontal) + 0.5rem);
  top: 19px;
  font-weight: 500;
}

@media only screen and (min-width: 1025px),
  screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
  .color-picker {
    top: calc(30% - (var(--color-picker-width) / 2));
    left: calc(50% - (var(--color-picker-width) / 2));
    bottom: initial;
    width: 256px;
    border-radius: var(--round-desktop-card);
    padding-bottom: 1.2rem;
  }

  .color-picker-ui-enclosure {
    padding-top: 2rem;
  }
}
</style>
