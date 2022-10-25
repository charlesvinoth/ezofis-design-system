<template>
  <DocApi
    author="Charles Vinoth"
    version="1.0"
    :prop-list="propList"
    :event-list="eventList"
  >
    <template #title>Time</template>

    <template #description>
      ezofis has a component called <b>EzTime</b>, which can be used to get time
      input from user.
    </template>

    <template #usage>
      <!-- default -->

      <DocExample title="Default" :code="example[0]">
        <template #example>
          <EzTime v-model="time" label="time" is-mandatory></EzTime>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- description -->

      <DocExample title="description" :code="example[1]">
        <template #example>
          <EzTime
            v-model="time"
            label="time"
            description="Start time"
            is-mandatory
          ></EzTime>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- error -->

      <DocExample title="error" :code="example[2]">
        <template #example>
          <EzTime
            v-model="time"
            label="time"
            error="time is required"
            is-mandatory
          ></EzTime>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- disabled -->

      <DocExample title="disabled" :code="example[3]">
        <template #example>
          <EzTime v-model="time" label="time" is-mandatory is-disabled></EzTime>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- minimum time allowed -->

      <DocExample title="minimum time allowed" :code="example[4]">
        <template #example>
          <EzTime
            v-model="time"
            label="time"
            description="Enter a time after 10:30 AM"
            minTime="10:30"
          ></EzTime>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- maximum time allowed -->

      <DocExample title="maximum time allowed" :code="example[5]">
        <template #example>
          <EzTime
            v-model="time"
            label="time"
            description="Enter a time before 06:30 PM"
            maxTime="18:30"
          ></EzTime>
        </template>
      </DocExample>
      <!-- ... -->
    </template>
  </DocApi>
</template>

<script>
const EzTime = () => import("@/library/components/ez-time/index");
const DocApi = () => import("@/components/doc-api/index");
const DocExample = () => import("@/components/doc-example/index");

export default {
  name: "Time",

  components: { EzTime, DocApi, DocExample },

  data() {
    return {
      time: "",
      startTime: "",
      endTime: "",
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
          name: "minTime",
          type: "String",
          description:
            "Minimum time allowed (hh:mm). User won't be able to select the times before minimum time",
          acceptedValues: "",
          defaultValue: "",
        },
        {
          id: this.$nano.id(),
          name: "maxTime",
          type: "String",
          description:
            "Maximum time allowed (hh:mm). User won't be able to select the times after maximum time",
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
        '<EzTime v-model="time" label="time" is-mandatory></EzTime>',
        '<EzTime v-model="time" label="time" description="Start time" is-mandatory></EzTime>',
        '<EzTime v-model="time" label="time" error="time is required" is-mandatory></EzTime>',
        '<EzTime v-model="time" label="time" is-mandatory is-disabled></EzTime>',
        '<EzTime v-model="time" label="time" description="Enter a time after 10:30 AM" minTime="10:30"></EzTime>',
        '<EzTime v-model="time" label="time" description="Enter a time before 06:30 PM" maxTime="18:30"></EzTime>',
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
