<template>
  <DocApi
    author="Charles Vinoth"
    version="1.0"
    :prop-list="propList"
    :event-list="eventList"
  >
    <template #title>Spinner</template>

    <template #description>
      ezofis has a component called <b>EzSpinner</b>, which can be used to
      collect number input from user.
    </template>

    <template #usage>
      <!-- default -->
      <DocExample title="Default" :code="example[0]">
        <template #example>
          <EzSpinner v-model="number" label="number" is-mandatory></EzSpinner>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- error -->
      <DocExample title="error" :code="example[6]">
        <template #example>
          <EzSpinner
            v-model="number"
            label="number"
            error="number is required"
            is-mandatory
          ></EzSpinner>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- disabled -->
      <DocExample title="disabled" :code="example[7]">
        <template #example>
          <EzSpinner
            v-model="number"
            label="number"
            is-mandatory
            is-disabled
          ></EzSpinner>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- minimum value -->
      <DocExample title="minimum value" :code="example[7]">
        <template #example>
          <EzSpinner
            v-model="number"
            label="number"
            description="Minimum value is 5"
            is-mandatory
            :min="5"
          ></EzSpinner>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- maximum value -->
      <DocExample title="maximum value" :code="example[7]">
        <template #example>
          <EzSpinner
            v-model="number"
            label="number"
            description="Maximum value is 10"
            is-mandatory
            :max="10"
          ></EzSpinner>
        </template>
      </DocExample>
      <!-- ... -->
    </template>
  </DocApi>
</template>

<script>
const EzSpinner = () => import("@/library/components/ez-spinner/index");
const DocApi = () => import("@/components/doc-api/index");
const DocExample = () => import("@/components/doc-example/index");

export default {
  name: "Spinner",

  components: { EzSpinner, DocApi, DocExample },

  data() {
    return {
      number: 0,
      propList: [
        {
          id: this.$nano.id(),
          name: "value",
          type: "String",
          description:
            "Model of the component; Either use this property (along with a listener for 'input' event) OR use v-model directive",
          acceptedValues: "",
          defaultValue: "",
        },
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
          description: "Displays an info btn near the name of the field",
          acceptedValues: "true | false",
          defaultValue: "false",
        },
        {
          id: this.$nano.id(),
          name: "min",
          type: "Number",
          description: "Minimum value allowed",
          acceptedValues: "",
          defaultValue: "0",
        },
        {
          id: this.$nano.id(),
          name: "max",
          type: "Number",
          description: "Maximum value allowed",
          acceptedValues: "",
          defaultValue: "100",
        },
      ],
      eventList: [
        {
          id: this.$nano.id(),
          name: "input",
          description:
            "Emitted when the component needs to change the model; Is also used by v-model",
          parameters: "New model value",
        },
      ],
      example: [
        '<EzSpinner v-model="number" label="number" is-mandatory></EzSpinner>',
        '<EzSpinner v-model="number" label="number" description="Primary number id" is-mandatory></EzSpinner>',
        '<EzSpinner v-model="password" label="password" type="password" is-mandatory show-info-btn></EzSpinner>',
        '<EzSpinner v-model="number" label="number" type="number" is-mandatory></EzSpinner>',
        '<EzSpinner v-model="date" label="date" type="date" is-mandatory></EzSpinner>',
        '<EzSpinner v-model="time" label="time" type="time" is-mandatory></EzSpinner>',
        '<EzSpinner v-model="number" label="number" error="number id is required" is-mandatory></EzSpinner>',
        '<EzSpinner v-model="number" label="number" is-mandatory is-disabled></EzSpinner>',
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
