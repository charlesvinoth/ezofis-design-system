<template>
  <div
    :class="isDisabled ? 'no-pointer-events disabled' : 'cursor-pointer'"
    @click="handleClick"
  >
    <div
      class="q-py-xs rounded-borders row items-center border"
      :class="[_bgColor, _textColor]"
    >
      <div class="col text-2 q-px-sm">
        {{ label }}
      </div>

      <q-icon
        v-if="isRemovable"
        v-ripple
        name="eva-close"
        :color="_iconColor"
        size="16px"
        class="q-mr-xs cursor-pointer relative-position round-borders"
        @click="handleRemove"
      ></q-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: "EzChip",

  props: {
    label: {
      type: String,
      default: "",
    },

    bgColor: {
      type: String,
      default: "",
    },

    textColor: {
      type: String,
      default: "",
    },

    isActive: {
      type: Boolean,
      default: false,
    },

    activeColor: {
      type: String,
      default: "secondary",
    },

    isRemovable: {
      type: Boolean,
      default: false,
    },

    iconColor: {
      type: String,
      default: "",
    },

    isDisabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    _bgColor() {
      if (this.isActive) return `bg-${this.activeColor}`;
      if (this.bgColor) return `bg-${this.bgColor}`;

      return "bg-gray-2 border-gray-3";
    },

    _textColor() {
      if (this.isActive) return "text-white text-weight-medium";
      if (this.textColor) return `text-${this.textColor}`;

      return "text-gray-10";
    },

    _iconColor() {
      if (this.isActive) return "white";
      if (this.iconColor) return this.iconColor;

      return "gray-5";
    },
  },

  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },

    handleRemove(e) {
      this.$emit("remove", e);
    },
  },
};
</script>

<style lang="scss" scoped></style>
