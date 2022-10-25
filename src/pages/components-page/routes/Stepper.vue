<template>
  <DocApi
    author="Charles Vinoth"
    version="1.0"
    :prop-list="propList"
    :event-list="eventList"
  >
    <template #title>Stepper</template>

    <template #description>
      ezofis has a component called <b>EzStepper</b>, which can be used to show
      progress through a sequence of steps, the user has to follow to complete a
      process.
    </template>

    <template #usage>
      <!-- default -->
      <DocExample title="Default" :code="example[0]">
        <template #example>
          <EzStepper v-model="step1" :steps="steps1"></EzStepper>
        </template>

        <template #options>
          <pre class="language-javascript"><code>{{options[0]}}</code></pre>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- clickable -->
      <DocExample title="clickable" :code="example[1]">
        <template #example>
          <EzStepper v-model="step1" :steps="steps1" is-clickable></EzStepper>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- error -->
      <DocExample title="error" :code="example[2]">
        <template #example>
          <EzStepper v-model="step2" :steps="steps2" is-clickable></EzStepper>
        </template>

        <template #options>
          <pre class="language-javascript"><code>{{options[1]}}</code></pre>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- completed -->
      <DocExample title="completed" :code="example[3]">
        <template #example>
          <EzStepper v-model="step1" :steps="steps1" is-completed></EzStepper>
        </template>
      </DocExample>
      <!-- ... -->
    </template>
  </DocApi>
</template>

<script>
const EzStepper = () => import("@/library/components/ez-stepper/index");
const DocApi = () => import("@/components/doc-api/index");
const DocExample = () => import("@/components/doc-example/index");

export default {
  name: "Stepper",

  components: { EzStepper, DocApi, DocExample },

  data() {
    return {
      step1: 1,
      step2: 2,
      steps1: [
        {
          id: this.$nano.id(),
          label: "Upload Logo",
          value: 1,
          hasError: false,
        },
        {
          id: this.$nano.id(),
          label: "Crop Image",
          value: 2,
          hasError: false,
        },
        {
          id: this.$nano.id(),
          label: "Save Logo",
          value: 3,
          hasError: false,
        },
      ],
      steps2: [
        {
          id: this.$nano.id(),
          label: "Upload Logo",
          value: 1,
          hasError: true,
        },
        {
          id: this.$nano.id(),
          label: "Crop Image",
          value: 2,
          hasError: false,
        },
        {
          id: this.$nano.id(),
          label: "Save Logo",
          value: 3,
          hasError: false,
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
          name: "steps",
          type: "Array",
          description: "Steps",
          acceptedValues: "Array of STEP objects",
          defaultValue: "[ ]",
        },
        {
          id: this.$nano.id(),
          name: "isClickable",
          type: "Boolean",
          description:
            "If true, clicking on the steps will emit an input event",
          acceptedValues: "true | false",
          defaultValue: "false",
        },
        {
          id: this.$nano.id(),
          name: "isCompleted",
          type: "Boolean",
          description: "If true, put the stepper in a completed state",
          acceptedValues: "true | false",
          defaultValue: "false",
        },
      ],
      eventList: [
        {
          id: this.$nano.id(),
          name: "input",
          description: "Triggers when the step is clicked",
          parameters: "Step value",
        },
      ],
      example: [
        '<EzStepper v-model="step1" :steps="steps1"></EzStepper>',
        '<EzStepper v-model="step1" :steps="steps1" is-clickable></EzStepper>',
        '<EzStepper v-model="step2" :steps="steps2"></EzStepper>',
        '<EzStepper v-model="step1" :steps="steps1" is-completed></EzStepper>',
      ],
      options: [
        `steps: [
          {
            id: this.$nano.id(),
            label: "Upload Logo",
            value: 1,
            hasError: false,
          },
          {
            id: this.$nano.id(),
            label: "Crop Image",
            value: 2,
            hasError: false,
          },
          {
            id: this.$nano.id(),
            label: "Save Logo",
            value: 3,
            hasError: false,
          },
        ],`,
        `steps: [
          {
            id: this.$nano.id(),
            label: "Upload Logo",
            value: 1,
            hasError: true,
          },
          {
            id: this.$nano.id(),
            label: "Crop Image",
            value: 2,
            hasError: false,
          },
          {
            id: this.$nano.id(),
            label: "Save Logo",
            value: 3,
            hasError: false,
          },
        ],`,
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
