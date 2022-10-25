<template>
  <q-drawer
    :value="value"
    side="left"
    :width="256"
    content-class="border-right border-gray-2"
    @input="toggleDrawer"
  >
    <slot></slot>
  </q-drawer>
</template>

<script>
export default {
  name: "Drawer",

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    toggleDrawer() {
      this.$emit("input", !this.value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
