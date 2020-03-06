<template>
  <button class="btn" :class="[colorClass, svgSizeClass, noGlassClass]" @click="action">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'IconButton',
  props: {
    color: {
      validator: value => ['default', 'danger'].indexOf(value) !== -1,
      default: 'default'
    },
    svgSize: {
      validator: value => ['small', 'medium', 'big', 'large', 'xlarge', 'xxlarge'].indexOf(value) !== -1,
      default: 'medium'
    },
    action: {
      type: Function,
      default: e => e.preventDefault()
    },
    noGlass: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    // a computed getter
    colorClass() {
      // `this` points to the vm instance
      return this.color;
    },
    svgSizeClass() {
      // `this` points to the vm instance
      return this.svgSize;
    },
    noGlassClass() {
      // `this` points to the vm instance
      return this.noGlass ? 'no-glass' : '';
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
  opacity: 0.7;
  transition: opacity 400ms, box-shadow 400ms;
}

.btn:hover {
  opacity: 1;
}

.btn svg {
  height: 14px;
  width: 14px;
}

/* Color */
.btn.default {
  background-color: var(--color-ui-default);
  box-shadow: 0 0 2px rgba(189, 189, 189, 0.3), 1px 1px 4px rgba(189, 189, 189, 0.3);
}

.btn:hover.default {
  box-shadow: 0 0 4px rgba(189, 189, 189, 0.3), 2px 2px 8px rgba(189, 189, 189, 0.3);
}

.btn.default svg {
  fill: var(--color-ui-dark);
}

.btn.danger {
  background-color: var(--color-ui-danger);
  box-shadow: 0 0 2px rgba(244, 67, 54, 0.3), 1px 1px 4px rgba(244, 67, 54, 0.3);
}

.btn:hover.danger {
  box-shadow: 0 0 4px rgba(244, 67, 54, 0.3), 2px 2px 8px rgba(244, 67, 54, 0.3);
}

.btn.danger svg {
  fill: var(--color-ui-bright);
}
/* x -- Color */
/* svg size */
.btn.small svg {
  height: 14px;
  width: 14px;
}

.btn.medium svg {
  height: 16px;
  width: 16px;
}

.btn.big svg {
  height: 18px;
  width: 18px;
}

.btn.large svg {
  height: 20px;
  width: 20px;
}

.btn.xlarge svg {
  height: 22px;
  width: 22px;
}

.btn.xxlarge svg {
  height: 24px;
  width: 24px;
}
/* x -- svg size */

/* No Glass */
.btn.no-glass {
  opacity: 1;
}
</style>
