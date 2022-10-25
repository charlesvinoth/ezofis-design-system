<template>
  <q-dialog
    maximized
    :value="value"
    :persistent="isPersistent"
    position="right"
    transition-show="slide-left"
    transition-hide="slide-right"
    @input="handleInput"
  >
    <div class="bg-white" :style="{ width: width }">
      <!-- header -->
      <div class="row items-center q-my-md">
        <div class="header label-4 ellipsis shadow-1" :class="_color">
          {{ title }}
        </div>

        <q-space></q-space>

        <q-btn
          dense
          round
          flat
          icon="mdi-close"
          color="gray-5"
          class="q-mx-md"
          @click="handleClick"
        ></q-btn>
      </div>
      <!-- ... -->

      <slot name="default">
        <div class="q-pa-lg"></div>
      </slot>
    </div>
  </q-dialog>
</template>

<script>
export default {
  name: "EzSheet",

  props: {
    value: {
      type: Boolean,
      default: false,
    },

    width: {
      type: String,
      default: "320px",
    },

    title: {
      type: String,
      required: true,
    },

    color: {
      type: String,
      default: "primary",
    },

    isPersistent: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    _color() {
      return `bg-${this.color}`;
    },
  },

  methods: {
    handleInput(value) {
      this.$emit("input", value);
    },

    handleClick() {
      this.$emit("input", !this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 12px 16px;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 0 4px 4px 0;
  min-width: 150px;
  color: white;
}
</style>
