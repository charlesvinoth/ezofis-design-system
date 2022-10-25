<template>
  <DocApi author="Charles Vinoth" version="1.0">
    <template #title>Colors</template>

    <template #description>
      Quasar Framework offers a wide selection of Material colors out of the
      box. These are <b>ezofis</b> brand colors and neutral color and can be
      used in the same way as the Quasar colors.
    </template>

    <template #usage>
      <!-- primary -->

      <DocExample title="primary" :code="example[0]">
        <template #example>
          <div class="row text-center text-2 rounded-borders">
            <div class="col bg-primary-1 q-pa-md text-gray-10">primary-1</div>
            <div class="col bg-primary-2 q-pa-md text-gray-10">primary-2</div>
            <div class="col bg-primary-3 q-pa-md text-gray-10">primary-3</div>
            <div class="col bg-primary-4 q-pa-md text-gray-10">primary-4</div>
            <div class="col bg-primary-5 q-pa-md text-gray-10">primary-5</div>
            <div class="col bg-primary-6 q-pa-md text-gray-1">primary-6</div>
            <div class="col bg-primary-7 q-pa-md text-gray-1">primary-7</div>
            <div class="col bg-primary-8 q-pa-md text-gray-1">primary-8</div>
            <div class="col bg-primary-9 q-pa-md text-gray-1">primary-9</div>
            <div class="col bg-primary-10 q-pa-md text-gray-1">primary-10</div>
          </div>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- secondary -->

      <DocExample title="secondary" :code="example[1]">
        <template #example>
          <div class="row text-center text-2 rounded-borders">
            <div class="col bg-secondary-1 q-pa-md text-gray-10">
              secondary-1
            </div>
            <div class="col bg-secondary-2 q-pa-md text-gray-10">
              secondary-2
            </div>
            <div class="col bg-secondary-3 q-pa-md text-gray-10">
              secondary-3
            </div>
            <div class="col bg-secondary-4 q-pa-md text-gray-10">
              secondary-4
            </div>
            <div class="col bg-secondary-5 q-pa-md text-gray-10">
              secondary-5
            </div>
            <div class="col bg-secondary-6 q-pa-md text-gray-1">
              secondary-6
            </div>
            <div class="col bg-secondary-7 q-pa-md text-gray-1">
              secondary-7
            </div>
            <div class="col bg-secondary-8 q-pa-md text-gray-1">
              secondary-8
            </div>
            <div class="col bg-secondary-9 q-pa-md text-gray-1">
              secondary-9
            </div>
            <div class="col bg-secondary-10 q-pa-md text-gray-1">
              secondary-10
            </div>
          </div>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- gray -->

      <DocExample title="gray" :code="example[2]">
        <template #example>
          <div class="row text-center text-2 rounded-borders">
            <div class="col bg-gray-1 q-pa-md text-gray-10">gray-1</div>
            <div class="col bg-gray-2 q-pa-md text-gray-10">gray-2</div>
            <div class="col bg-gray-3 q-pa-md text-gray-10">gray-3</div>
            <div class="col bg-gray-4 q-pa-md text-gray-10">gray-4</div>
            <div class="col bg-gray-5 q-pa-md text-gray-10">gray-5</div>
            <div class="col bg-gray-6 q-pa-md text-gray-1">gray-6</div>
            <div class="col bg-gray-7 q-pa-md text-gray-1">gray-7</div>
            <div class="col bg-gray-8 q-pa-md text-gray-1">gray-8</div>
            <div class="col bg-gray-9 q-pa-md text-gray-1">gray-9</div>
            <div class="col bg-gray-10 q-pa-md text-gray-1">gray-10</div>
          </div>
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
  name: "Colors",

  components: { DocApi, DocExample },

  data() {
    return {
      example: [
        '<div class="bg-primary-1">primary-1</div>\n<div class="bg-primary-2">primary-2</div>\n<div class="bg-primary-3">primary-3</div>\n<div class="bg-primary-4">primary-4</div>\n<div class="bg-primary-5">primary-5</div>\n<div class="bg-primary-6">primary-6</div>\n<div class="bg-primary-7">primary-7</div>\n<div class="bg-primary-8">primary-8</div>\n<div class="bg-primary-9">primary-9</div>\n<div class="bg-primary-10">primary-10</div>',
        '<div class="bg-secondary-1">secondary-1</div>\n<div class="bg-secondary-2">secondary-2</div>\n<div class="bg-secondary-3">secondary-3</div>\n<div class="bg-secondary-4">secondary-4</div>\n<div class="bg-secondary-5">secondary-5</div>\n<div class="bg-secondary-6">secondary-6</div>\n<div class="bg-secondary-7">secondary-7</div>\n<div class="bg-secondary-8">secondary-8</div>\n<div class="bg-secondary-9">secondary-9</div>\n<div class="bg-secondary-10">secondary-10</div>',
        '<div class="bg-gray-1">gray-1</div>\n<div class="bg-gray-2">gray-2</div>\n<div class="bg-gray-3">gray-3</div>\n<div class="bg-gray-4">gray-4</div>\n<div class="bg-gray-5">gray-5</div>\n<div class="bg-gray-6">gray-6</div>\n<div class="bg-gray-7">gray-7</div>\n<div class="bg-gray-8">gray-8</div>\n<div class="bg-gray-9">gray-9</div>\n<div class="bg-gray-10">gray-10</div>',
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
