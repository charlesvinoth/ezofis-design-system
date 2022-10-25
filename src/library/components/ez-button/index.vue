<template>
  <q-btn
    :color="color"
    :flat="isFlat"
    :outline="isOutline"
    :disable="isDisabled"
    :rounded="isRounded"
    :loading="isLoading"
    @click="handleClick"
    class="button"
  >
    <div class="row items-center">
      <div v-if="iconLeft" class="col-auto q-mr-sm">
        <q-icon :name="iconLeft" size="20px"></q-icon>
      </div>

      <div class="col label-3">
        {{ label }}
      </div>

      <div v-if="iconRight" class="col-auto q-ml-sm">
        <q-icon :name="iconRight" size="20px"></q-icon>
      </div>
    </div>

    <slot name="menu"></slot>
  </q-btn>
</template>

<script>
export default {
  name: "EzButton",

  props: {
    label: {
      type: String,
      required: true,
    },

    color: {
      type: String,
      default: "primary",
    },

    iconLeft: {
      type: String,
      default: "",
    },

    iconRight: {
      type: String,
      default: "",
    },

    isFlat: {
      type: Boolean,
      default: false,
    },

    isDisabled: {
      type: Boolean,
      default: false,
    },

    isRounded: {
      type: Boolean,
      default: false,
    },

    isOutline: {
      type: Boolean,
      default: false,
    },

    isLoading: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  height: 36px;
}
</style>
