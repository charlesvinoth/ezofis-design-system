<template>
  <div
    class="text-5 text-weight-medium text-gray-8 text-capitalize q-mt-xl q-mb-md"
  >
    {{ title }}
  </div>
</template>

<script>
export default {
  name: "SectionHeader",

  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
