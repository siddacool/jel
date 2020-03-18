<template>
  <div class="mobile-menu" id="mobile-menu">
    <div class="mobile-menu-container">
      <icon-btn
        size="large"
        svgSize="xlarge"
        :darkTheme="darkTheme"
        class="settings"
        v-show="isColorPickerVisible"
        :action="showSettings"
        noGlass
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M24 14.187v-4.374c-2.148-.766-2.726-.802-3.027-1.529-.303-.729.083-1.169 1.059-3.223l-3.093-3.093c-2.026.963-2.488 1.364-3.224 1.059-.727-.302-.768-.889-1.527-3.027h-4.375c-.764 2.144-.8 2.725-1.529 3.027-.752.313-1.203-.1-3.223-1.059l-3.093 3.093c.977 2.055 1.362 2.493 1.059 3.224-.302.727-.881.764-3.027 1.528v4.375c2.139.76 2.725.8 3.027 1.528.304.734-.081 1.167-1.059 3.223l3.093 3.093c1.999-.95 2.47-1.373 3.223-1.059.728.302.764.88 1.529 3.027h4.374c.758-2.131.799-2.723 1.537-3.031.745-.308 1.186.099 3.215 1.062l3.093-3.093c-.975-2.05-1.362-2.492-1.059-3.223.3-.726.88-.763 3.027-1.528zm-4.875.764c-.577 1.394-.068 2.458.488 3.578l-1.084 1.084c-1.093-.543-2.161-1.076-3.573-.49-1.396.581-1.79 1.693-2.188 2.877h-1.534c-.398-1.185-.791-2.297-2.183-2.875-1.419-.588-2.507-.045-3.579.488l-1.083-1.084c.557-1.118 1.066-2.18.487-3.58-.579-1.391-1.691-1.784-2.876-2.182v-1.533c1.185-.398 2.297-.791 2.875-2.184.578-1.394.068-2.459-.488-3.579l1.084-1.084c1.082.538 2.162 1.077 3.58.488 1.392-.577 1.785-1.69 2.183-2.875h1.534c.398 1.185.792 2.297 2.184 2.875 1.419.588 2.506.045 3.579-.488l1.084 1.084c-.556 1.121-1.065 2.187-.488 3.58.577 1.391 1.689 1.784 2.875 2.183v1.534c-1.188.398-2.302.791-2.877 2.183zm-7.125-5.951c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5z"
          />
        </svg>
      </icon-btn>
      <div
        class="menu-holder"
        v-show="isSettingsMenuVisible"
        @click.self="handleLeftClick"
      >
        <ul class="menu" :class="darkTheme ? 'dark' : null">
          <CommonMenu :darkTheme="darkTheme" />
          <icon-btn
            :darkTheme="darkTheme"
            :action="closeSettings"
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
          </icon-btn>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import CommonMenu from './CommonMenu';

export default {
  name: 'MobileMenu',
  data() {
    return {
      isSettingsMenuVisible: false
    };
  },
  components: {
    CommonMenu
  },
  props: {
    darkTheme: Boolean,
    isColorPickerVisible: Boolean
  },
  methods: {
    showSettings() {
      this.$store.dispatch('hideColorPicker');
      this.isSettingsMenuVisible = true;
    },
    closeSettings() {
      this.$store.dispatch('showColorPicker');
      this.isSettingsMenuVisible = false;
    },
    handleLeftClick() {
      this.$store.dispatch('hideColorPicker');
      this.isSettingsMenuVisible = false;
    }
  }
};
</script>

<style>
.settings {
  position: fixed;
  z-index: 2000;
  top: var(--fencing-verticle);
  left: var(--fencing-horizontal);
}

.menu-holder {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 2000;
  padding-left: var(--fencing-horizontal);
  padding-right: var(--fencing-horizontal);
  padding-top: var(--fencing-verticle);
  padding-bottom: var(--fencing-verticle);
  display: flex;
  align-items: flex-end;
  bottom: 0;
  left: 0;
}

.menu {
  display: block;
  background-color: #fff;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
  border-radius: var(--round-desktop-card);
  width: 100%;
  padding-bottom: 3.6rem;
  position: relative;
}

.menu li {
  display: flex;
}

.menu li.desktop {
  display: none;
}

.menu li .shortcut {
  display: none;
}

.menu a {
  width: 100%;
  height: 100%;
  padding-left: 3.5rem;
  padding-right: var(--fencing-horizontal);
  padding-top: var(--fencing-verticle);
  padding-bottom: var(--fencing-verticle);
  text-align: left;
  font-weight: 500;
  position: relative;
}

.menu a:first-child {
  border-top-left-radius: var(--round-desktop-card);
  border-top-right-radius: var(--round-desktop-card);
}

.menu a:hover,
.menu a:active {
  background-color: var(--light-bg-hover-color);
}

.menu .checked {
  width: 16px;
  height: 16px;
  position: absolute;
  top: 33px;
  left: 23px;
  fill: #212529;
}

.close {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
}

/* dark Theme */

.menu.dark {
  background-color: var(--dark-bg-color);
}

.menu.dark a {
  color: var(--dark-color);
}

.menu.dark a:hover,
.menu.dark a:active {
  background-color: var(--dark-bg-hover-color);
}

.menu.dark .checked {
  fill: var(--dark-color);
}

@media only screen and (min-width: 1025px),
  screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
  .mobile-menu {
    display: none;
  }
}
</style>
