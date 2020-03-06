<template>
  <div class="home-landing">
    <Surface />
    <ColorPicker />
    <Launcher />
  </div>
</template>

<script>
import Surface from '../components/Surface.vue';
import ColorPicker from '../components/ColorPicker.vue';
import Launcher from '../components/Launcher.vue';

export default {
  name: 'Home',
  components: {
    Surface,
    ColorPicker,
    Launcher
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* Remove alpha bar */
.home-landing .vc-chrome-alpha-wrap {
  display: none;
}

/* Extend Hue Bar */
.home-landing .vc-chrome-hue-wrap {
  margin-bottom: 0;
  height: 30px;
}

.home-landing .vc-chrome-hue-wrap .vc-hue-picker {
  height: 31px;
}

.home-landing .vc-chrome-body {
  padding-top: 1.2rem;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 0;
}

.home-landing .vc-chrome-color-wrap {
  position: absolute;
  top: 10px;
  left: 18px;
}

.home-landing .vc-chrome-fields-wrap {
  display: none;
}
</style>
