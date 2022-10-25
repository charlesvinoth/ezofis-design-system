<template>
  <DocApi
    author="Charles Vinoth"
    version="1.0"
    :prop-list="propList"
    :event-list="eventList"
  >
    <template #title>choose</template>

    <template #description>
      ezofis has a component called <b>EzChoose</b>, which can be used to allow
      users to select single or multiple options from a predefined set of
      options.
    </template>

    <template #usage>
      <!-- default -->
      <DocExample title="Default" :code="example[0]">
        <template #example>
          <EzChoose
            v-model="country"
            label="country"
            is-mandatory
            :options="countries"
          ></EzChoose>
        </template>

        <template #options>
          <pre class="language-javascript"><code>{{options[0]}}</code></pre>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- multiple -->
      <DocExample title="multiple" :code="example[1]">
        <template #example>
          <EzChoose
            v-model="countryList"
            label="country"
            is-multiple
            is-mandatory
            :options="countries"
          ></EzChoose>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- with description -->
      <DocExample title="with description" :code="example[2]">
        <template #example>
          <EzChoose
            v-model="country"
            label="country"
            is-mandatory
            with-description
            :options="countries"
          ></EzChoose>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- with icon -->
      <DocExample title="with icon" :code="example[3]">
        <template #example>
          <EzChoose
            v-model="country"
            label="country"
            is-mandatory
            with-description
            with-icon
            :options="countries"
          ></EzChoose>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- disabled -->
      <DocExample title="Disabled" :code="example[4]">
        <template #example>
          <EzChoose
            v-model="country"
            label="country"
            is-mandatory
            is-disabled
            :options="countries"
          ></EzChoose>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- error -->
      <DocExample title="Error" :code="example[5]">
        <template #example>
          <EzChoose
            v-model="country"
            is-mandatory
            label="country"
            error="country is required"
            :options="countries"
          ></EzChoose>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- options size -->
      <DocExample title="options size" :code="example[6]">
        <template #example>
          <EzChoose
            v-model="country"
            label="country"
            is-mandatory
            :options="countries"
            option-size-class="col-2"
          ></EzChoose>
        </template>
      </DocExample>
      <!-- ... -->
    </template>
  </DocApi>
</template>

<script>
const EzChoose = () => import("@/library/components/ez-choose/index");
const DocApi = () => import("@/components/doc-api/index");
const DocExample = () => import("@/components/doc-example/index");

export default {
  name: "Choose",

  components: { EzChoose, DocApi, DocExample },

  data() {
    return {
      country: "",
      countryList: [],
      countries: [
        {
          id: 1,
          label: "India",
          value: "India",
          description: "New Delhi",
          icon: "flag",
          color: "green",
        },
        {
          id: 2,
          label: "USA",
          value: "USA",
          description: "Washington",
          icon: "flag",
          color: "pink",
        },
        {
          id: 3,
          label: "China",
          value: "China",
          description: "Beijing",
          icon: "flag",
          color: "deep-orange",
        },
        {
          id: 4,
          label: "Russia",
          value: "Russia",
          description: "Moscow",
          icon: "flag",
          color: "indigo",
        },
      ],
      propList: [
        {
          id: this.$nano.id(),
          name: "value",
          type: "String | Array",
          description:
            "Model of the component; Either use this property (along with a listener for 'choose' event) OR use v-model directive",
          acceptedValues: "String | Number | Array",
          defaultValue: null,
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
          description: "Displays a red star near the label",
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
          description: "Displays an info button near the label of the field",
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
          name: "optionSizeClass",
          type: "String",
          description: "Options per line",
          acceptedValues: "Quasar flex class names",
          defaultValue: "col",
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
          name: "withDescription",
          type: "Boolean",
          description: "Displays the option description if true",
          acceptedValues: "true | false",
          defaultValue: "false",
        },
        {
          id: this.$nano.id(),
          name: "withIcon",
          type: "Boolean",
          description: "Displays the option icon if true",
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
        '<EzChoose v-model="country" label="country" :options="countries"></EzChoose>',
        '<EzChoose v-model="country" label="country" :options="countries" is-multiple></EzChoose>',
        '<EzChoose v-model="country" label="country" :options="countries" with-description></EzChoose>',
        '<EzChoose v-model="country" label="country" :options="countries" with-icon></EzChoose>',
        '<EzChoose v-model="country" label="country" :options="countries" is-disabled></EzChoose>',
        '<EzChoose v-model="country" label="country" :options="countries" error="country is required"></EzChoose>',
        '<EzChoose v-model="country" label="country" :options="countries" option-size-class="col-2"></EzChoose>',
      ],
      options: [
        `countries: [
            {
              id: 1,
              label: "India",
              value: "India",
              description: "New Delhi",
              icon: "flag",
              color: "green",
            },
            {
              id: 2,
              label: "USA",
              value: "USA",
              description: "Washington",
              icon: "flag",
              color: "pink",
            },
            {
              id: 3,
              label: "China",
              value: "China",
              description: "Beijing",
              icon: "flag",
              color: "deep-orange",
            },
            {
              id: 4,
              label: "Russia",
              value: "Russia",
              description: "Moscow",
              icon: "flag",
              color: "indigo",
            },
          ],`,
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
