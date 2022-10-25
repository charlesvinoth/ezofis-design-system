<template>
  <DocApi author="Charles Vinoth" version="1.0">
    <template #title>Typography</template>

    <template #description>
      Control the size and style of text using the Typography helper classes.
      These are different from the <b>Quasar</b> typography.
    </template>

    <template #usage>
      <!-- text -->

      <DocExample title="text" :code="example[0]">
        <template #example>
          <!-- text-1 -->

          <div class="text-1 q-mb-md">
            Text 1 - Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </div>

          <!-- ... -->

          <!-- text-2 -->

          <div class="text-2 q-mb-md">
            Text 2 - Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </div>

          <!-- ... -->

          <!-- text-3 -->

          <div class="text-3 q-mb-md">
            Text 3 - Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </div>

          <!-- ... -->

          <!-- text-4 -->

          <div class="text-4 q-mb-md">
            Text 4 - Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </div>

          <!-- ... -->

          <!-- text-5 -->

          <div class="text-5 q-mb-md">
            Text 5 - Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </div>

          <!-- ... -->

          <!-- text-6 -->

          <div class="text-6 q-mb-md">
            Text 6 - Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </div>

          <!-- ... -->

          <!-- text-7 -->

          <div class="text-7">
            Text 7 - Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </div>

          <!-- ... -->
        </template>
      </DocExample>

      <!-- ... -->

      <!-- label -->

      <DocExample title="label" :code="example[1]">
        <template #example>
          <!-- label-1 -->

          <div class="label-1 q-mb-md">
            Label 1 - Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </div>

          <!-- ... -->

          <!-- label-2 -->

          <div class="label-2 q-mb-md">
            Label-2 - Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </div>

          <!-- ... -->

          <!-- label-3 -->

          <div class="label-3 q-mb-md">
            Label-3 - Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </div>

          <!-- ... -->

          <!-- label-4 -->

          <div class="label-4">
            Label-4 - Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </div>

          <!-- ... -->
        </template>
      </DocExample>

      <!-- ... -->
    </template>
  </DocApi>
</template>

<script>
const DocApi = () => import("@/components/doc-api/index");
const DocExample = () => import("@/components/doc-example/index");

export default {
  name: "Typography",

  components: { DocApi, DocExample },

  data() {
    return {
      example: [
        `<div class="text-1">Text 1 - Lorem ipsum dolor, sit amet consectetur adipisicing elit</div>\n<div class="text-2">Text 2 - Lorem ipsum dolor, sit amet consectetur adipisicing elit</div>\n<div class="text-3">Text 3 - Lorem ipsum dolor, sit amet consectetur adipisicing elit</div>\n<div class="text-4">Text 4 - Lorem ipsum dolor, sit amet consectetur adipisicing elit</div>\n<div class="text-5">Text 5 - Lorem ipsum dolor, sit amet consectetur adipisicing elit</div>\n<div class="text-6">Text 6 - Lorem ipsum dolor, sit amet consectetur adipisicing elit</div>\n<div class="text-7">Text 7 - Lorem ipsum dolor, sit amet consectetur adipisicing elit</div>`,
        `<div class="label-1 q-mb-md">Label 1 - Lorem ipsum dolor, sit amet consectetur adipisicing elit</div>\n<div class="label-2 q-mb-md">Label 2 - Lorem ipsum dolor, sit amet consectetur adipisicing elit</div>\n<div class="label-3 q-mb-md">Label 3 - Lorem ipsum dolor, sit amet consectetur adipisicing elit</div>\n<div class="label-4 q-mb-md">Label 4 - Lorem ipsum dolor, sit amet consectetur adipisicing elit</div>`,
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
