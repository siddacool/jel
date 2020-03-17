<template>
  <div class="about" id="about">
    <modal :show="show" :darkTheme="darkTheme" :onClose="hideAbout">
      <template v-slot:header>About</template>

      aDQd
    </modal>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    darkTheme: Boolean,
    show: Boolean
  },
  methods: {
    hideAbout() {
      this.$store.dispatch('hideAbout');
    }
  }
};
</script>

<style scoped></style>
