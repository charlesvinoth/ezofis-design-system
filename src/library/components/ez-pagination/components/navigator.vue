<template>
  <div
    class="row items-center text-gray-6"
    :class="isDisabled ? 'no-pointer-events disabled' : 'cursor-pointer'"
    @click="(e) => $emit('click', e)"
  >
    <div v-if="iconLeft" class="col-auto no-line-height">
      <q-icon :name="iconLeft" size="16px"></q-icon>
    </div>

    <div
      v-if="!noLabel"
      class="text-1 text-capitalize"
      :class="{ 'q-ml-sm': iconLeft, 'q-mr-sm': iconRight }"
    >
      {{ label }}
    </div>

    <div v-if="iconRight" class="col-auto no-line-height">
      <q-icon :name="iconRight" size="16px"></q-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigator",

  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },

    iconLeft: {
      type: String,
      default: "",
    },

    label: {
      type: String,
      required: true,
    },

    iconRight: {
      type: String,
      default: "",
    },

    noLabel: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped></style>
