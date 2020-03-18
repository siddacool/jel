<template>
  <Fragment>
    <li class="desktop">
      <a href="#" @click.prevent="toggleColorPicker">
        Color Picker
        <span class="shortcut">alt + p</span>
      </a>
    </li>
    <li class="desktop">
      <div class="group">
        <p>
          Swatches
          <span class="shortcut">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style="transform: rotateZ(180deg)"
            >
              <path
                d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
              />
            </svg>
            /
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
              />
            </svg>
          </span>
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
    <li>
      <a href="#" @click.prevent="toggleDarkTheme">
        <checkmark :isChecked="darkTheme" />
        Dark Theme
      </a>
    </li>
    <li class="desktop">
      <a href="#" @click.prevent="toggleKeyboardLock">
        <checkmark :isChecked="isKeyboardLocked" />
        Keyboard Lock
        <span class="shortcut">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="width: 15px; height: 15px;"
          >
            <path
              d="M21.658 3.786l-3.658 3.318v-1.104c0-3.313-2.687-6-6-6s-6 2.687-6 6v4h-3v10.707l-2 1.813 1.346 1.48 20.654-18.734-1.342-1.48zm-5.658 5.132l-1.194 1.082h-6.806v-4c0-2.205 1.795-4 4-4s4 1.795 4 4v2.918zm5 1.082v14h-16.391l15.422-14h.969z"
            />
          </svg>
        </span>
      </a>
    </li>
    <li>
      <a href="#" @click.prevent="showAbout">
        About
      </a>
    </li>
  </Fragment>
</template>

<script>
import contextCheckmark from './context-checkmark';
import { Fragment } from 'vue-fragment';

export default {
  name: 'CommonMenu',
  props: {
    darkTheme: Boolean
  },
  components: {
    Fragment,
    checkmark: contextCheckmark
  },
  computed: {
    swatches() {
      return this.$store.state.swatches;
    },
    isKeyboardLocked() {
      return this.$store.state.isKeyboardLocked;
    }
  },
  methods: {
    toggleColorPicker() {
      this.$store.dispatch('toggleColorPicker');
    },
    activeSwatch(index) {
      this.$store.dispatch('activateSwatch', index);
    },
    toggleDarkTheme(e) {
      e.target.blur();
      this.$store.dispatch('toggleDarkTheme');
    },
    toggleKeyboardLock(e) {
      e.target.blur();
      this.$store.dispatch('toggleKeyboardLock');
    },
    showAbout(e) {
      e.target.blur();
      this.$store.dispatch('showAbout');
    }
  }
};
</script>
