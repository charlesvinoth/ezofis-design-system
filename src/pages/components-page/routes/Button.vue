<template>
  <DocApi
    author="Charles Vinoth"
    version="1.0"
    :prop-list="propList"
    :event-list="eventList"
  >
    <template #title>Button</template>

    <template #description>
      ezofis has a component called <b>EzButton</b>, which is the most common
      component. It must have a label and optional icons before or after the
      label.
    </template>

    <template #usage>
      <!-- default -->
      <DocExample title="Default" :code="example[0]">
        <template #example>
          <EzButton label="button"></EzButton>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- color -->
      <DocExample title="Color" :code="example[2]">
        <template #example>
          <div class="row items-center q-col-gutter-sm">
            <div class="col-auto">
              <EzButton label="button" color="indigo"></EzButton>
            </div>

            <div class="col-auto">
              <EzButton label="button" color="deep-orange"></EzButton>
            </div>
          </div>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- icon -->
      <DocExample title="Icon" :code="example[3]">
        <template #example>
          <div class="row items-center q-col-gutter-sm">
            <div class="col-auto">
              <EzButton
                label="button"
                icon-left="eva-cloud-download-outline"
              ></EzButton>
            </div>

            <div class="col-auto">
              <EzButton
                label="button"
                icon-right="eva-cloud-download-outline"
              ></EzButton>
            </div>
          </div>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- appearance -->
      <DocExample title="Appearance" :code="example[4]">
        <template #example>
          <div class="row items-center q-col-gutter-sm">
            <div class="col-auto">
              <EzButton label="button" is-flat></EzButton>
            </div>

            <div class="col-auto">
              <EzButton label="button" is-outline></EzButton>
            </div>

            <div class="col-auto">
              <EzButton label="button" is-rounded></EzButton>
            </div>
          </div>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- state -->
      <DocExample title="State" :code="example[5]">
        <template #example>
          <div class="row items-center q-col-gutter-sm">
            <div class="col-auto">
              <EzButton label="button" is-disabled></EzButton>
            </div>

            <div class="col-auto">
              <EzButton label="button" is-loading></EzButton>
            </div>
          </div>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- tooltip -->
      <DocExample title="tooltip" :code="example[6]">
        <template #example>
          <EzButton label="button" v-tooltip:bottom="'tooltip'"></EzButton>
        </template>
      </DocExample>
      <!-- ... -->
    </template>
  </DocApi>
</template>

<script>
const EzButton = () => import("@/library/components/ez-button/index");
const DocApi = () => import("@/components/doc-api/index");
const DocExample = () => import("@/components/doc-example/index");

export default {
  name: "Button",

  components: { EzButton, DocApi, DocExample },

  data() {
    return {
      propList: [
        {
          id: this.$nano.id(),
          name: "label",
          type: "String",
          description: "Text that will be shown on the button",
          acceptedValues: "",
          defaultValue: "",
        },
        {
          id: this.$nano.id(),
          name: "color",
          type: "String",
          description: "Set background color of the button",
          acceptedValues: "Quasar colors",
          defaultValue: "Primary",
        },
        {
          id: this.$nano.id(),
          name: "iconLeft",
          type: "String",
          description: "Display an icon on the left side of the label",
          acceptedValues: "Quasar icons",
          defaultValue: "",
        },
        {
          id: this.$nano.id(),
          name: "iconRight",
          type: "String",
          description: "Display an icon on the right side of the label",
          acceptedValues: "Quasar icons",
          defaultValue: "",
        },
        {
          id: this.$nano.id(),
          name: "isFlat",
          type: "Boolean",
          description: "Use flat design",
          acceptedValues: "true | false",
          defaultValue: "false",
        },
        {
          id: this.$nano.id(),
          name: "isDisabled",
          type: "Boolean",
          description: "Disable the button",
          acceptedValues: "true | false",
          defaultValue: "false",
        },
        {
          id: this.$nano.id(),
          name: "isRounded",
          type: "Boolean",
          description: "Rounded button",
          acceptedValues: "true | false",
          defaultValue: "false",
        },
        {
          id: this.$nano.id(),
          name: "isOutline",
          type: "Boolean",
          description: "Use outline design",
          acceptedValues: "true | false",
          defaultValue: "false",
        },
        {
          id: this.$nano.id(),
          name: "isLoading",
          type: "Boolean",
          description: "Show a loading spinner",
          acceptedValues: "true | false",
          defaultValue: "false",
        },
      ],
      eventList: [
        {
          id: this.$nano.id(),
          name: "click",
          description: "Triggers when left button is clicked",
          parameters: "Native event",
        },
      ],

      example: [
        '<EzButton label="button"></EzButton>',
        '<EzButton label="button" is-rounded></EzButton>',
        '<EzButton label="button" color="indigo"></EzButton>\n<EzButton label="button" color="deep-orange"></EzButton>',
        '<EzButton label="button" icon-left="eva-cloud-download-outline"></EzButton>\n<EzButton label="button" icon-right="eva-cloud-download-outline"></EzButton>',
        '<EzButton label="button" is-flat></EzButton>\n<EzButton label="button" is-outline></EzButton>\n<EzButton label="button" is-rounded></EzButton>',
        '<EzButton label="button" is-disabled></EzButton>\n<EzButton label="button" is-loading></EzButton>',
        '<EzButton label="button" v-tooltip="tooltip"></EzButton>',
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
