<template>
  <div class="color-picker" id="color-picker">
    <button class="color-picker-close">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg>
    </button>
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

export default {
  name: 'ColorPicker',
  data() {
    return {
      backdrop: this.$store.state.backdrop
    };
  },
  components: {
    'chrome-picker': Chrome
  },
  methods: {
    updateValue(e) {
      this.$store.dispatch('changeBackDrop', e);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.color-picker {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100vw;
  box-shadow: 0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3);
  background-color: #fff;
  padding-top: 1.2rem;
  padding: 1.2rem;
}
.color-picker-ui {
  box-shadow: none;
  width: 100%;
}

.color-picker-ui-enclosure {
  padding-top: 1.2rem;
}

.color-picker-close {
  display: flex;
  background-color: #ff0058;
  padding: 0.5rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 0 2px rgba(255, 0, 88, 0.3), 1px 1px 4px rgba(255, 0, 88, 0.3);
  margin-left: auto;
  align-items: center;
  justify-content: center;
}

.color-picker-close svg {
  height: 14px;
  width: 14px;
  fill: #fff;
}

 @media only screen
  and (min-width: 1025px),
  screen and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (orientation: landscape) {
    .color-picker {
      width: 256px;
    }
  }
</style>
