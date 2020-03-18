<template>
  <div class="about" id="about">
    <modal
      :show="show"
      :darkTheme="darkTheme"
      :onClose="hideAbout"
      :color="aboutBackground ? aboutBackground : backdrop"
    >
      <template v-slot:header>About</template>
      <img src="../assets/logo.png" width="200" height="200" alt="jel" />
      <br />
      Need interesting lights for a photoshoot ?
      <br />
      Use phone/computer screen as RBG Light Panels
      <div class="content">
        <br />
        <hr />
        <h3>Keybaord Shortcuts</h3>
        jel can be controlled with keyboard shortcuts on Desktop.
        <br />
        Make sure keyboard lock is not checked 🔓 on context Menu (Right Click)
        <ul>
          <li>Colorpicker Toggle - alt + p</li>
          <li>Dark Theme Toggle - alt + n</li>
          <li>Change color swatches - Left Arrow (Prev) / Right Arrow (Next)</li>
        </ul>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      swatches: this.$store.getters.swatches,
      colorWave: true,
      aboutBackground: null
    };
  },
  props: {
    darkTheme: Boolean,
    show: Boolean
  },
  computed: {
    backdrop() {
      return this.$store.getters.backdrop;
    }
  },
  methods: {
    hideAbout() {
      this.$store.dispatch('hideAbout');
    }
  },
  created() {
    let iterator = 0;
    const interval = setInterval(() => {
      if (!this.colorWave) {
        clearInterval(interval);
        return;
      }

      if (!this.swatches[iterator]) {
        iterator = 0;
      }

      this.aboutBackground = this.swatches[iterator];

      iterator++;
    }, 4000);
  },
  destroyed() {
    this.colorWave = false;
  }
};
</script>

<style scoped>
h3 {
  margin-top: 1rem;
  font-weight: 600;
}
ul {
  padding: 1rem;
  margin-left: 1rem;
  padding-top: 0.5rem;
}
li {
  display: list-item;
}
.content {
  display: none;
}
.modal-holder {
  transition: background 3000ms;
}
@media only screen and (min-width: 1025px),
  screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
  .content {
    display: block;
  }
}
</style>
