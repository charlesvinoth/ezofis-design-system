<template>
  <DocApi
    author="Charles Vinoth"
    version="1.0"
    :prop-list="propList"
    :event-list="eventList"
  >
    <template #title>Label</template>

    <template #description>
      ezofis has a component called <b>EzLabel</b>, which is commonly used to
      show the name of the form controls.
    </template>

    <template #usage>
      <!-- default -->
      <DocExample title="Default" :code="example[0]">
        <template #example>
          <EzLabel label="label"></EzLabel>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- mandatory -->
      <DocExample title="Mandatory" :code="example[1]">
        <template #example>
          <EzLabel label="label" is-mandatory></EzLabel>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- color -->
      <DocExample title="Color" :code="example[2]">
        <template #example>
          <EzLabel label="label" color="green"></EzLabel>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- info btn -->
      <DocExample title="info btn" :code="example[3]">
        <template #example>
          <div class="row">
            <div class="col-xs-12 col-sm-4 col-md-2">
              <EzLabel label="label" show-info-btn></EzLabel>
            </div>
          </div>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- hint -->
      <DocExample title="hint" :code="example[4]">
        <template #example>
          <EzLabel label="date" hint="(dd/mm/yyyy)"></EzLabel>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- description -->
      <DocExample title="description" :code="example[5]">
        <template #example>
          <EzLabel
            label="label"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          ></EzLabel>
        </template>
      </DocExample>
      <!-- ... -->
    </template>
  </DocApi>
</template>

<script>
const EzLabel = () => import("@/library/components/ez-label/index");
const DocApi = () => import("@/components/doc-api/index");
const DocExample = () => import("@/components/doc-example/index");

export default {
  name: "Label",

  components: { EzLabel, DocApi, DocExample },

  data() {
    return {
      propList: [
        {
          id: this.$nano.id(),
          name: "label",
          type: "String",
          description: "Name of the label",
          acceptedValues: "",
          defaultValue: "",
        },
        {
          id: this.$nano.id(),
          name: "description",
          type: "String",
          description: "Displays the description text below the label",
          acceptedValues: "",
          defaultValue: "",
        },
        {
          id: this.$nano.id(),
          name: "hint",
          type: "String",
          description: "Displays the hint text near the label",
          acceptedValues: "",
          defaultValue: "",
        },
        {
          id: this.$nano.id(),
          name: "isMandatory",
          type: "Boolean",
          description: "Displays a red star near the label",
          acceptedValues: "true | false",
          defaultValue: "false",
        },
        {
          id: this.$nano.id(),
          name: "color",
          type: "String",
          description: "Set color of the label",
          acceptedValues: "Quasar colors",
          defaultValue: "Primary",
        },
        {
          id: this.$nano.id(),
          name: "showInfoBtn",
          type: "Boolean",
          description: "Displays an info button near the label",
          acceptedValues: "",
          defaultValue: "",
        },
      ],
      eventList: [
        {
          id: this.$nano.id(),
          name: "info",
          description: "Triggers when the info btn is clicked",
          parameters: "Native event",
        },
      ],
      example: [
        `<EzLabel label="label"></EzLabel>`,
        `<EzLabel label="label" is-mandatory></EzLabel>`,
        '<EzLabel label="label" color="deep-orange"></EzLabel>',
        '<EzLabel label="label" show-info-btn @info="handleInfo"></EzLabel>',
        '<EzLabel label="date" hint="(dd/mm/yyyy)"></EzLabel>',
        '<EzLabel label="label" description="Lorem ipsum dolor sit amet consectetur adipisicing elit"></EzLabel>',
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
