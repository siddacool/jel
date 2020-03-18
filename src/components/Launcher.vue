<template>
  <div
    class="launcher"
    id="launcher"
    v-show="!isColorPickerVisible"
    :class="darkTheme ? 'dark' : null"
  >
    <icon-btn
      size="large"
      svgSize="xlarge"
      :action="showColorPicker"
      :darkTheme="darkTheme"
      noGlass
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M17.831 7.672c1.096-1.096 2.875-1.865 3.688-3.106.892-1.362.508-3.192-.851-4.085-1.362-.892-3.187-.508-4.081.854-.842 1.286-.801 3.322-1.433 4.779-.817 1.882-3.553 2.116-6.698.474-1.727 3.352-4.075 6.949-6.456 9.874l2.263 1.484c1.018-.174 2.279-1.059 2.792-2.03-.04 1.167-.478 2.2-1.337 2.983l4.275 2.797c.546-.544 1.054-.976 1.616-1.345-.319.643-.532 1.324-.63 1.99l2.532 1.659c1.5-2.884 4.416-7.343 6.455-9.874-2.82-2.272-3.657-4.936-2.135-6.454zm1.762-5.545c.454.296.58.908.281 1.36-.294.457-.905.582-1.356.286-.456-.297-.582-.906-.284-1.36.295-.455.905-.583 1.359-.286zm-3.959 15.037l-8.225-5.386 1.616-2.469 8.221 5.387-1.612 2.468z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1000"
        height="1000"
        viewBox="0 0 1000 1000"
        class="jel-logo"
      >
        <circle cx="500" cy="500" r="495" />
        <path
          :style="{ fill: jelColor }"
          d="M398.935,290.617q3.7-8.648,3.7-21.688t-13.173-22.1a39.574,39.574,0,0,0-12.212-5.491q-6.452-1.647-18.112-1.647t-24.836,8.51A37.585,37.585,0,0,0,322.918,259.6q-4.527,7-4.528,21t11.8,27.727a37.813,37.813,0,0,0,13.035,10.157,29.124,29.124,0,0,0,16.054,2.608,46.154,46.154,0,0,0,16.191-4.941,50.5,50.5,0,0,0,13.722-10.432A51.645,51.645,0,0,0,398.935,290.617Zm-94.54,85.79a36.4,36.4,0,0,0-10.291,7.687q-3.982,4.394-3.98,9.2t2.745,6.726l5.488,3.843q8.233,6.042,8.233,18.668,0,36.515-14.27,93.614-21.959,89.771-60.923,165.54-44.181,85.653-84.8,98.83-7.41,2.195-7.41,12.628,0,5.489,6.175,9.746a22.811,22.811,0,0,0,13.172,4.255,28.692,28.692,0,0,0,11.389-1.922q45.01-16.471,86.17-72.475,52.414-71.651,86.445-184.208,30.185-99.922,30.187-157.3,0-21.137-37.6-21.138-17.289,0-30.736,6.314h0ZM453.947,632.815q24.422,24.16,64.765,24.159,68.333,0,102.91-34.591a40.223,40.223,0,0,0,8.233-25.256,24.529,24.529,0,0,0-3.705-13.315q-3.705-5.9-8.644-5.9t-11.663,6.726a87.143,87.143,0,0,1-17.427,13.04q-30.191,18.672-62.02,18.668-18.666,0-28.541-16.472a49.95,49.95,0,0,1-6.586-16.883,73.606,73.606,0,0,1-1.647-17.158A51.621,51.621,0,0,1,491,554.3q44.457-.546,83.426-14.275a189.869,189.869,0,0,0,34.989-16.746,133.02,133.02,0,0,0,27.717-22.374,96.547,96.547,0,0,0,18.25-27.727,86.229,86.229,0,0,0,6.861-33.218q0.27-17.977-5.215-31.159-15.642-38.709-62.569-38.708-40.071,0-79.31,29.374a212.644,212.644,0,0,0-33.617,31.982A247.35,247.35,0,0,0,454.5,470.158a220.67,220.67,0,0,0-18.387,42.277,179.027,179.027,0,0,0-7.958,45.709q-1.647,47.22,25.8,74.671h0Zm153.4-199.032q0,27.178-31.01,56.827-33.754,31.573-79.584,36.238,13.719-46.668,36.224-80.711Q559.6,406.6,588.416,406.605,607.352,406.605,607.352,433.783Zm123.207,219.9q8.5,3.3,22.366,3.3t30.6-11.256q24.967-16.471,24.972-40.9,0-5.766-5.763-5.766-2.745,0-12.212,4.942a44.676,44.676,0,0,1-20.993,4.941q-12.08,0-12.075-14.824,0-27.724,32.657-122.714l37.871-111.458q9.6-28,17.014-53.121t12.075-46.4q4.663-21.271,5.214-36.1t-15.368-26.9q-8.232-6.036-20.856-6.04-20.035,0-22.5,23.061-7.686,77.97-56.807,220.72L723.7,503.513q-10.432,31.572-17.151,56.278t-6.724,39.395q0,14.69,4.254,25.8a53.506,53.506,0,0,0,11.114,18.256A42.436,42.436,0,0,0,730.559,653.679Z"
        />
      </svg>
    </icon-btn>
  </div>
</template>

<script>
export default {
  name: 'Launcher',
  data() {
    return {
      jelColor: 'var(--color-accent-1)',
      swatches: this.$store.getters.swatches
    };
  },
  props: {
    darkTheme: Boolean,
    resetMousePosition: Function
  },
  computed: {
    // a computed getter
    isColorPickerVisible() {
      // `this` points to the vm instance
      return this.$store.state.isColorPickerVisible;
    },
    isFirstStart() {
      return this.$store.state.isFirstStart;
    }
  },
  methods: {
    showColorPicker() {
      this.resetMousePosition();
      this.$store.dispatch('showColorPicker');
      // stop Colorwave
      this.$store.dispatch('endFirstStart');
    }
  },
  created() {
    if (!this.isFirstStart) return;

    let iterator = 0;
    const interval = setInterval(() => {
      if (!this.isFirstStart) {
        this.jelColor = '';
        clearInterval(interval);
        return;
      }

      if (!this.swatches[iterator]) {
        iterator = 0;
      }

      this.jelColor = this.swatches[iterator];

      iterator++;
    }, 800);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.launcher {
  position: fixed;
  z-index: 1000;
  bottom: var(--fencing-verticle);
  left: var(--fencing-horizontal);
}

.launcher .btn {
  position: relative;
}

.launcher .btn .jel-logo {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.launcher .btn .jel-logo circle {
  fill: var(--color-ui-default);
}

.launcher .btn .jel-logo path {
  fill: var(--color-accent-1);
  transition: fill 600ms;
}

/* Dark Thmeme */

.launcher.dark .btn .jel-logo circle {
  fill: var(--dark-bg-color);
}


@media only screen and (min-width: 1025px),
  screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
  .launcher {
    top: var(--fencing-desktop-verticle);
    left: var(--fencing-desktop-horizontal);
    bottom: initial;
  }
}
</style>
