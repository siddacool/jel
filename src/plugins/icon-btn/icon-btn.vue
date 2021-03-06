<template>
  <button
    class="btn"
    :class="[colorClass, sizeClass, svgSizeClass, noGlassClass, darkThemeClass]"
    @click="action"
  >
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
    size: {
      validator: value => ['xsmall', 'small', 'medium', 'big', 'large', 'xlarge'].indexOf(value) !== -1,
      default: 'medium'
    },
    svgSize: {
      validator: value => ['xxsmall', 'xsmall', 'small', 'medium', 'big', 'large', 'xlarge', 'xxlarge'].indexOf(value) !== -1,
      default: 'medium'
    },
    action: {
      type: Function,
      default: e => e.preventDefault()
    },
    noGlass: {
      type: Boolean,
      default: false
    },
    darkTheme: Boolean
  },
  computed: {
    // a computed getter
    colorClass() {
      return this.color;
    },
    sizeClass() {
      return this.size;
    },
    svgSizeClass() {
      return `svg-${this.svgSize}`;
    },
    noGlassClass() {
      return this.noGlass ? 'no-glass' : '';
    },
    darkThemeClass() {
      return this.darkTheme ? 'dark' : '';
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

/* Size */
.btn.xsmall {
  width: 30px;
  height: 30px;
}

.btn.small {
  width: 36px;
  height: 36px;
}

.btn.medium {
  width: 40px;
  height: 40px;
}

.btn.large {
  width: 50px;
  height: 50px;
}

.btn.xlarge {
  height: 70px;
  width: 70px;
}
/* x -- Size */

/* Color */
.btn.default {
  background-color: var(--color-ui-default);
  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12);
}

.btn.default:hover {
  box-shadow: 0px 8px 9px -5px rgba(0,0,0,0.2), 0px 15px 22px 2px rgba(0,0,0,0.14), 0px 6px 28px 5px rgba(0,0,0,0.12);
}

.btn.default svg {
  fill: var(--color-ui-dark);
}

.btn.danger {
  background-color: var(--color-ui-danger);
  box-shadow: 0 0 2px rgba(244, 67, 54, 0.3), 1px 1px 4px rgba(244, 67, 54, 0.3);
}

.btn.danger:hover {
  box-shadow: 0 0 4px rgba(244, 67, 54, 0.3), 2px 2px 8px rgba(244, 67, 54, 0.3);
}

.btn.danger svg {
  fill: var(--color-ui-bright);
}
/* x -- Color */
/* svg size */
.btn.xsvg-xxsmall svg {
  height: 6px;
  width: 6px;
}

.btn.svg-xsmall svg {
  height: 10px;
  width: 10px;
}

.btn.svg-small svg {
  height: 14px;
  width: 14px;
}

.btn.svg-medium svg {
  height: 16px;
  width: 16px;
}

.btn.svg-big svg {
  height: 18px;
  width: 18px;
}

.btn.svg-large svg {
  height: 20px;
  width: 20px;
}

.btn.svg-xlarge svg {
  height: 22px;
  width: 22px;
}

.btn.svg-xxlarge svg {
  height: 24px;
  width: 24px;
}
/* x -- svg size */

/* No Glass */
.btn.no-glass {
  opacity: 1;
}

/* dark theme */
.btn.dark.default {
  background-color: var(--dark-bg-hover-color);
}

.btn.dark.hover {
  box-shadow: 0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12);
}

.btn.dark.default svg {
  fill: var(--dark-color);
}
.btn.dark.danger {
  background-color: var(--dark-color-ui-danger);
}
.btn.dark.danger svg {
  fill: var(--dark-color);
}
</style>
