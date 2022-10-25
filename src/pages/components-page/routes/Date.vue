<template>
  <DocApi
    author="Charles Vinoth"
    version="1.0"
    :prop-list="propList"
    :event-list="eventList"
  >
    <template #title>Date</template>

    <template #description>
      ezofis has a component called <b>EzDate</b>, which can be used to get date
      input from user.
    </template>

    <template #usage>
      <!-- default -->

      <DocExample title="Default" :code="example[0]">
        <template #example>
          <EzDate v-model="date" label="date" is-mandatory></EzDate>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- description -->

      <DocExample title="description" :code="example[1]">
        <template #example>
          <EzDate
            v-model="date"
            label="date"
            description="Invoice date"
            is-mandatory
          ></EzDate>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- error -->

      <DocExample title="error" :code="example[2]">
        <template #example>
          <EzDate
            v-model="date"
            label="date"
            error="date is required"
            is-mandatory
          ></EzDate>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- disabled -->

      <DocExample title="disabled" :code="example[3]">
        <template #example>
          <EzDate v-model="date" label="date" is-mandatory is-disabled></EzDate>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- minimum date allowed -->

      <DocExample title="minimum date allowed" :code="example[4]">
        <template #example>
          <EzDate
            v-model="date"
            label="date"
            description="Enter a date after 1st March 2021"
            minDate="2021/03/01"
          ></EzDate>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- maximum date allowed -->

      <DocExample title="maximum date allowed" :code="example[5]">
        <template #example>
          <EzDate
            v-model="date"
            label="date"
            description="Enter a date before 30th March 2021"
            maxDate="2021/03/30"
          ></EzDate>
        </template>
      </DocExample>
      <!-- ... -->
    </template>
  </DocApi>
</template>

<script>
const EzDate = () => import("@/library/components/ez-date/index");
const DocApi = () => import("@/components/doc-api/index");
const DocExample = () => import("@/components/doc-example/index");

export default {
  name: "Date",

  components: { EzDate, DocApi, DocExample },

  data() {
    return {
      date: "",
      startDate: "",
      endDate: "",
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
          name: "minDate",
          type: "String",
          description:
            "Minimum date allowed (yyyy/mm/dd). User won't be able to select the dates before minimum date",
          acceptedValues: "",
          defaultValue: "",
        },
        {
          id: this.$nano.id(),
          name: "maxDate",
          type: "String",
          description:
            "Maximum date allowed (yyyy/mm/dd). User won't be able to select the dates after maximum date",
          acceptedValues: "",
          defaultValue: "",
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
        '<EzDate v-model="date" label="date" is-mandatory></EzDate>',
        '<EzDate v-model="date" label="date" description="Invoice date" is-mandatory></EzDate>',
        '<EzDate v-model="date" label="date" error="date is required" is-mandatory></EzDate>',
        '<EzDate v-model="date" label="date" is-mandatory is-disabled></EzDate>',
        '<EzDate v-model="date" label="date" description="Enter a date after 1st March 2021" minDate="2021/03/01"></EzDate>',
        '<EzDate v-model="date" label="date" description="Enter a date before 30th March 2021" maxDate="2021/03/30"></EzDate>',
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
