<template>
  <div class="modal-holder" v-show="show" @click.self="onClose" :style="{ background: color }">
    <div class="modal" :class="darkTheme ? 'dark' : null">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <icon-btn-component
        :darkTheme="darkTheme"
        :action="onClose"
        color="danger"
        class="close"
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
      </icon-btn-component>
    </div>
  </div>
</template>

<script>
import iconBtnComponent from '../icon-btn/icon-btn.vue';

export default {
  name: 'modal',
  props: {
    darkTheme: Boolean,
    show: Boolean,
    onClose: Function,
    color: {
      type: String,
      default: 'transparent'
    }
  },
  components: {
    'icon-btn-component': iconBtnComponent
  }
};
</script>

<style scoped>
.modal-holder {
  position: fixed;
  z-index: 2000;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  padding-left: var(--fencing-horizontal);
  padding-right: var(--fencing-horizontal);
  padding-top: var(--fencing-verticle);
  padding-bottom: var(--fencing-verticle);
  display: flex;
}

.modal {
  background-color: #fff;
  flex: 1;
  border-radius: var(--round-desktop-card);
  padding-left: var(--fencing-horizontal);
  padding-right: var(--fencing-horizontal);
  padding-top: var(--fencing-verticle);
  padding-bottom: 3.6rem;
  font-weight: 400;
  position: relative;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
}

main {
  display: block;
  height: calc(100% - 61px);
  overflow-y: auto;
  overflow-x: hidden;
  text-align: left;
  line-height: 2;
}

header {
  font-size: 24px;
  font-weight: 600;
  text-align: left;
  padding-bottom: var(--fencing-horizontal);
}

.close {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
}

/* Dark Theme */
.modal.dark {
  background-color: var(--dark-bg-color);
  color: var(--dark-color);
}

@media only screen and (min-width: 1025px),
  screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
  .modal {
    max-width: 900px;
    margin: 0 auto;
    max-height: 500px;
    padding-left: var(--slick-colorpicker-fencing-horizontal);
    padding-right: var(--slick-colorpicker-fencing-horizontal);
    padding-top: var(--slick-colorpicker-fencing-verticle);
    padding-bottom: var(--slick-colorpicker-fencing-verticle);
    margin-top: 3rem;
  }

  header {
    padding-top: 2rem;
  }

  .close {
    right: var(--slick-colorpicker-fencing-horizontal);
    top: var(--slick-colorpicker-fencing-verticle);
    bottom: initial;
  }

  header {
    font-weight: 600;
    text-align: left;
    padding-top: 0;
    text-align: left;
  }

  main {
    height: calc(100% - 51px);
    text-align: center;
  }
}
</style>
