<template>
  <DocApi
    author="Charles Vinoth"
    version="1.0"
    :prop-list="propList"
    :event-list="eventList"
    :slot-list="slotList"
  >
    <template #title></template>

    <template #description>
      ezofis has a component called <b>EzField</b>, which can be used as a
      wrapper for all form controls.
    </template>

    <template #usage>
      <!-- default -->

      <DocExample title="Default" :code="example[0]">
        <template #example>
          <EzField label="email"></EzField>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- mandatory -->

      <DocExample title="mandatory" :code="example[1]">
        <template #example>
          <EzField label="email" is-mandatory></EzField>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- info btn -->

      <DocExample title="info btn" :code="example[2]">
        <template #example>
          <EzField label="password" show-info-btn></EzField>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- hint -->

      <DocExample title="hint" :code="example[3]">
        <template #example>
          <EzField label="date" hint="(dd/mm/yyyy)" is-mandatory></EzField>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- description -->

      <DocExample title="description" :code="example[4]">
        <template #example>
          <EzField
            label="email"
            description="Primary email id"
            is-mandatory
          ></EzField>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- clear btn -->

      <DocExample title="clear btn" :code="example[5]">
        <template #example>
          <EzField label="email" is-mandatory show-clear-btn></EzField>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- focused -->

      <DocExample title="focused" :code="example[6]">
        <template #example>
          <EzField is-focused></EzField>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- error -->

      <DocExample title="error" :code="example[7]">
        <template #example>
          <EzField error="field is required"></EzField>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- disabled -->

      <DocExample title="disabled" :code="example[8]">
        <template #example>
          <EzField is-disabled></EzField>
        </template>
      </DocExample>

      <!-- ... -->
    </template>
  </DocApi>
</template>

<script>
const EzField = () => import("@/library/components/ez-field/index");
const DocApi = () => import("@/components/doc-api/index");
const DocExample = () => import("@/components/doc-example/index");

export default {
  name: "Field",

  components: { EzField, DocApi, DocExample },

  data() {
    return {
      propList: [
        {
          id: this.$nano.id(),
          name: "label",
          type: "String",
          description: "Name of the field",
          acceptedValues: "",
          defaultValue: "",
        },
        {
          id: this.$nano.id(),
          name: "hint",
          type: "String",
          description: "Hint of the field",
          acceptedValues: "",
          defaultValue: "",
        },
        {
          id: this.$nano.id(),
          name: "description",
          type: "String",
          description: "Description of the field",
          acceptedValues: "",
          defaultValue: "",
        },
        {
          id: this.$nano.id(),
          name: "isMandatory",
          type: "Boolean",
          description: "Displays a red star near the name of the field",
          acceptedValues: "true | false",
          defaultValue: "false",
        },
        {
          id: this.$nano.id(),
          name: "error",
          type: "String",
          description: "Displays the error below the field",
          acceptedValues: "",
          defaultValue: "",
        },
        {
          id: this.$nano.id(),
          name: "isFocused",
          type: "Boolean",
          description:
            "Changes the border color to secondary, used to show focused state",
          acceptedValues: "true | false",
          defaultValue: "false",
        },
        {
          id: this.$nano.id(),
          name: "isDisabled",
          type: "Boolean",
          description: "Disables the field",
          acceptedValues: "true | false",
          defaultValue: "false",
        },
        {
          id: this.$nano.id(),
          name: "showInfoBtn",
          type: "Boolean",
          description: "Displays an info button near the name of the field",
          acceptedValues: "true | false",
          defaultValue: "false",
        },
        {
          id: this.$nano.id(),
          name: "noPadding",
          type: "Boolean",
          description: "Removes the default padding of the field",
          acceptedValues: "true | false",
          defaultValue: "false",
        },
        {
          id: this.$nano.id(),
          name: "showClearBtn",
          type: "Boolean",
          description:
            "Displays a clear button, which can be used to clear model values",
          acceptedValues: "true | false",
          defaultValue: "false",
        },
      ],
      eventList: [
        {
          id: this.$nano.id(),
          name: "info",
          description: "Triggers when the info btn is clicked",
          parameters: "Native event",
        },
        {
          id: this.$nano.id(),
          name: "clear",
          description: "Triggers when the clear btn is clicked",
          parameters: "Native event",
        },
      ],
      slotList: [
        {
          id: this.$nano.id(),
          name: "default",
          description: "default slot for input control",
        },
        {
          id: this.$nano.id(),
          name: "action",
          description: "extra slot for action buttons",
        },
      ],
      example: [
        '<EzField label="email"></EzField>',
        '<EzField label="email" is-mandatory></EzField>',
        '<EzField label="password" show-info-btn></EzField>',
        '<EzField label="date" hint="(dd/mm/yyyy)" is-mandatory></EzField>',
        '<EzField label="email" description="Primary email id" is-mandatory></EzField>',
        '<EzField label="email" is-mandatory show-clear-btn></EzField>',
        "<EzField is-focused></EzField>",
        '<EzField error="field is required"></EzField>',
        "<EzField is-disabled></EzField>",
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
