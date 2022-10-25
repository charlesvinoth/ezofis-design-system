<template>
  <q-breadcrumbs
    :active-color="color"
    separator-color="gray-5"
    class="text-gray-5 label-2"
  >
    <slot></slot>
  </q-breadcrumbs>
</template>

<script>
export default {
  name: "EzBreadcrumbs",

  props: {
    color: {
      type: String,
      default: "secondary",
    },
  },
};
</script>

<style lang="scss" scoped></style>
