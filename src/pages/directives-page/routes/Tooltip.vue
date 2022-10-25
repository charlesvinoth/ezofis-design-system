<template>
  <DocApi author="Charles Vinoth" version="1.0">
    <template #title>Tooltip</template>

    <template #description>
      ezofis has a directive called <b>v-tooltip</b>, which can be used to add
      tooltip to any DOM element (or component). Visit (
      <a href="https://atomiks.github.io/tippyjs/" target="_blank">
        https://atomiks.github.io/tippyjs/
      </a>
      ) for more info.
    </template>

    <template #usage>
      <!-- default -->

      <DocExample title="default" :code="example[0]">
        <template #example>
          <EzButton label="default" v-tooltip="'default'"></EzButton>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- position -->

      <DocExample title="position" :code="example[1]">
        <template #example>
          <div class="row items-center q-col-gutter-sm">
            <div class="col-auto">
              <EzButton label="top" v-tooltip:top="'top'"></EzButton>
            </div>

            <div class="col-auto">
              <EzButton label="bottom" v-tooltip:bottom="'bottom'"></EzButton>
            </div>

            <div class="col-auto">
              <EzButton label="right" v-tooltip:right="'right'"></EzButton>
            </div>

            <div class="col-auto">
              <EzButton label="left" v-tooltip:left="'left'"></EzButton>
            </div>
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

const EzButton = () => import("@/library/components/ez-button/index");

export default {
  name: "Tooltip",

  components: { DocApi, DocExample, EzButton },

  data() {
    return {
      example: [
        `<EzButton label="default" v-tooltip="'default'"></EzButton>`,
        `<EzButton label="top" v-tooltip:top="'top'"></EzButton>\n<EzButton label="bottom" v-tooltip:bottom="'bottom'"></EzButton>\n<EzButton label="right" v-tooltip:right="'right'"></EzButton>\n<EzButton label="left" v-tooltip:left="'left'"></EzButton>`,
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
