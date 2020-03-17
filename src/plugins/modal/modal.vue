<template>
  <div class="modal-holder">
    <div class="modal">
      <main>
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  props: {
    darkTheme: Boolean
  }
};
</script>

<style scoped>
.modal-holder {
  position: fixed;
  z-index: 2000;
  left: 0;
  top: 0;
  background-color: rgba(240, 230, 140, 0.342);
  width: 100vw;
  height: 100vh;
}

.modal {
  
}

@media only screen and (min-width: 1025px),
  screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
  .modal {

  }
}
</style>
