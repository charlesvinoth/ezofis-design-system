<template>
  <DocApi
    author="Charles Vinoth"
    version="1.0"
    :prop-list="propList"
    :event-list="eventList"
  >
    <template #title>Input</template>

    <template #description>
      ezofis has a component called <b>EzInput</b>, which can be used to collect
      various types of input from user.
    </template>

    <template #usage>
      <!-- default -->
      <DocExample title="Default" :code="example[0]">
        <template #example>
          <EzInput v-model="email" label="email" is-mandatory></EzInput>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- description -->
      <DocExample title="description" :code="example[1]">
        <template #example>
          <EzInput
            v-model="email"
            label="email"
            description="Primary email id"
            is-mandatory
          ></EzInput>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- password -->
      <DocExample title="password" :code="example[2]">
        <template #example>
          <EzInput
            v-model="password"
            label="password"
            type="password"
            is-mandatory
            show-info-btn
          ></EzInput>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- number -->
      <DocExample title="number" :code="example[3]">
        <template #example>
          <EzInput
            v-model="number"
            label="number"
            type="number"
            is-mandatory
          ></EzInput>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- date -->
      <DocExample title="date" :code="example[4]">
        <template #example>
          <EzInput
            v-model="date"
            label="date"
            hint="(invoice date)"
            type="date"
            is-mandatory
          ></EzInput>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- time -->
      <DocExample title="time" :code="example[5]">
        <template #example>
          <EzInput
            v-model="time"
            label="time"
            hint="(start time)"
            type="time"
            is-mandatory
          ></EzInput>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- error -->
      <DocExample title="error" :code="example[6]">
        <template #example>
          <EzInput
            v-model="email"
            label="email"
            error="email id is required"
            is-mandatory
          ></EzInput>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- disabled -->
      <DocExample title="disabled" :code="example[7]">
        <template #example>
          <EzInput
            v-model="email"
            label="email"
            is-mandatory
            is-disabled
          ></EzInput>
        </template>
      </DocExample>
      <!-- ... -->
    </template>
  </DocApi>
</template>

<script>
const EzInput = () => import("@/library/components/ez-input/index");
const DocApi = () => import("@/components/doc-api/index");
const DocExample = () => import("@/components/doc-example/index");

export default {
  name: "Input",

  components: { EzInput, DocApi, DocExample },

  data() {
    return {
      email: "",
      password: "",
      number: "",
      date: "",
      time: "",
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
          name: "type",
          type: "String",
          description: "Type of the input control",
          acceptedValues: "text, password, number, date, time",
          defaultValue: "text",
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
        '<EzInput v-model="email" label="email" is-mandatory></EzInput>',
        '<EzInput v-model="email" label="email" description="Primary email id" is-mandatory></EzInput>',
        '<EzInput v-model="password" label="password" type="password" is-mandatory show-info-btn></EzInput>',
        '<EzInput v-model="number" label="number" type="number" is-mandatory></EzInput>',
        '<EzInput v-model="date" label="date" type="date" is-mandatory></EzInput>',
        '<EzInput v-model="time" label="time" type="time" is-mandatory></EzInput>',
        '<EzInput v-model="email" label="email" error="email id is required" is-mandatory></EzInput>',
        '<EzInput v-model="email" label="email" is-mandatory is-disabled></EzInput>',
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
