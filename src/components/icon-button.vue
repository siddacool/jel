<template>
  <button class="btn" :class="color" @click="click">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'IconButton',
  props: {
    color: {
      type: String,
      default: 'default'
    },
    click: {
      type: [Function],
      default: e => e.preventDefault()
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  display: flex;
  padding: 0.5rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.btn.default {
  background-color: var(--color-ui-default);
  box-shadow: 0 0 2px rgba(189, 189, 189, 0.3), 1px 1px 4px rgba(189, 189, 189, 0.3);
}

.btn.danger {
  background-color: var(--color-ui-danger);
  box-shadow: 0 0 2px rgba(244, 67, 54, 0.3), 1px 1px 4px rgba(244, 67, 54, 0.3);
}

.btn svg {
  height: 14px;
  width: 14px;
  fill: #fff;
}
</style>
