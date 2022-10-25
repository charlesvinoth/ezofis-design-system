<template>
  <DocApi
    author="Charles Vinoth"
    version="1.0"
    :prop-list="propList"
    :event-list="eventList"
  >
    <template #title>Textarea</template>

    <template #description>
      ezofis has a component called <b>EzTextarea</b>, which can be used for
      collecting large amounts of textual data.
    </template>

    <template #usage>
      <!-- default -->
      <DocExample title="Default" :code="example[0]">
        <template #example>
          <EzTextarea
            v-model="comments"
            label="comments"
            is-mandatory
          ></EzTextarea>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- description -->
      <DocExample title="description" :code="example[1]">
        <template #example>
          <EzTextarea
            v-model="comments"
            label="comments"
            description="Message for the next stage user"
            is-mandatory
          ></EzTextarea>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- error -->
      <DocExample title="error" :code="example[2]">
        <template #example>
          <EzTextarea
            v-model="comments"
            label="comments"
            error="comments is required"
            is-mandatory
          ></EzTextarea>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- disabled -->
      <DocExample title="disabled" :code="example[3]">
        <template #example>
          <EzTextarea
            v-model="comments"
            label="comments"
            is-mandatory
            is-disabled
          ></EzTextarea>
        </template>
      </DocExample>
      <!-- ... -->
    </template>
  </DocApi>
</template>

<script>
const EzTextarea = () => import("@/library/components/ez-textarea/index");
const DocApi = () => import("@/components/doc-api/index");
const DocExample = () => import("@/components/doc-example/index");

export default {
  name: "Textarea",

  components: { EzTextarea, DocApi, DocExample },

  data() {
    return {
      comments: "",
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
        '<EzTextarea v-model="comments" label="comments"></EzTextarea>',
        '<EzTextarea v-model="comments" label="comments" description="Message for the next stage user"></EzTextarea>',
        '<EzTextarea v-model="comments" label="comments" error="comments is required"></EzTextarea>',
        '<EzTextarea v-model="comments" label="comments" is-disabled></EzTextarea>',
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
