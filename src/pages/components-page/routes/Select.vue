<template>
  <DocApi
    author="Charles Vinoth"
    version="1.0"
    :prop-list="propList"
    :event-list="eventList"
  >
    <template #title></template>

    <template #description>
      ezofis has a component called <b>EzSelect</b>, which can be used to allow
      users to select a single or multiple options from a predefined list of
      options. It can also be used as an Autocomplete.
    </template>

    <template #usage>
      <!-- default -->

      <DocExample title="Default" :code="example[0]">
        <template #example>
          <EzSelect
            v-model="country"
            label="country"
            :options="countries"
            is-mandatory
          ></EzSelect>
        </template>

        <template #options>
          <pre class="language-javascript"><code>{{options[0]}}</code></pre>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- multiple -->

      <DocExample title="multiple" :code="example[1]">
        <template #example>
          <EzSelect
            v-model="countryList"
            label="country"
            :options="countries"
            is-multiple
            is-mandatory
          ></EzSelect>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- add new option -->

      <DocExample title="add new option" :code="example[2]">
        <template #example>
          <EzSelect
            v-model="country"
            label="country"
            :options="countries"
            add-new-option
            is-mandatory
          ></EzSelect>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- description -->

      <DocExample title="description" :code="example[3]">
        <template #example>
          <EzSelect
            v-model="country"
            is-mandatory
            label="country"
            description="Select a country"
            :options="countries"
          ></EzSelect>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- error -->

      <DocExample title="error" :code="example[4]">
        <template #example>
          <EzSelect
            v-model="country"
            is-mandatory
            label="country"
            error="country is required"
            :options="countries"
          ></EzSelect>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- disabled -->

      <DocExample title="disabled" :code="example[5]">
        <template #example>
          <EzSelect
            v-model="country"
            is-mandatory
            is-disabled
            label="country"
            :options="countries"
          ></EzSelect>
        </template>
      </DocExample>

      <!-- ... -->
    </template>
  </DocApi>
</template>

<script>
const EzSelect = () => import("@/library/components/ez-select/index");
const DocApi = () => import("@/components/doc-api/index");
const DocExample = () => import("@/components/doc-example/index");

export default {
  name: "Select",

  components: { EzSelect, DocApi, DocExample },

  data() {
    return {
      country: "",
      countryList: [],
      countries: [
        {
          id: 1,
          label: "India",
          value: "India",
        },
        {
          id: 2,
          label: "USA",
          value: "USA",
        },
        {
          id: 3,
          label: "China",
          value: "China",
        },
        {
          id: 4,
          label: "Russia",
          value: "Russia",
        },
        {
          id: 5,
          label: "Japan",
          value: "Japan",
        },
      ],
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
          description: "Displays an info button near the name of the field",
          acceptedValues: "true | false",
          defaultValue: "false",
        },
        {
          id: this.$nano.id(),
          name: "options",
          type: "Array",
          description: "Options",
          acceptedValues: "Array",
          defaultValue: "[ ]",
        },
        {
          id: this.$nano.id(),
          name: "isMultiple",
          type: "Boolean",
          description: "Select multiple values",
          acceptedValues: "true | false",
          defaultValue: "false",
        },
        {
          id: this.$nano.id(),
          name: "addNewOption",
          type: "Boolean",
          description: "Can add new options",
          acceptedValues: "true | false",
          defaultValue: "false",
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
        '<EzSelect v-model="country" label="country" :options="countries" is-mandatory></EzSelect>',
        '<EzSelect v-model="country" label="country" :options="countries" is-multiple></EzSelect>',
        '<EzSelect v-model="country" label="country" :options="countries" add-new-option></EzSelect>',
        '<EzSelect v-model="country" label="country" :options="countries" description="Select a country"></EzSelect>',
        '<EzSelect v-model="country" label="country" :options="countries" error="country is required"></EzSelect>',
        '<EzSelect v-model="country" label="country" :options="countries" is-disabled></EzSelect>',
      ],
      options: [
        `countries: [
            {
              id: 1,
              label: "India",
              value: "India",
            },
            {
              id: 2,
              label: "USA",
              value: "USA",
            },
            {
              id: 3,
              label: "China",
              value: "China",
            },
            {
              id: 4,
              label: "Russia",
              value: "Russia",
            },
            {
              id: 5,
              label: "Japan",
              value: "Japan",
            },
          ]`,
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
