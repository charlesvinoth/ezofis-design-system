<template>
  <div class="pulse" :class="_color"></div>
</template>

<script>
export default {
  name: "EzPulse",

  props: {
    color: {
      type: String,
      default: "secondary",
    },
  },

  computed: {
    _color() {
      return `bg-${this.color}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.pulse {
  height: 10px;
  width: 10px;
  border-radius: 50%;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: inherit;
    border-radius: inherit;
    transition: opacity 0.3s, transform 0.3s;
    animation: pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;
    z-index: -1;
  }

  overflow: visible;
}

@keyframes pulse-animation {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0;
    transform: scale(2);
  }
  100% {
    opacity: 0;
    transform: scale(2);
  }
}
</style>
