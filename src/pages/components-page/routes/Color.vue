<template>
  <DocApi
    author="Charles Vinoth"
    version="1.0"
    :prop-list="propList"
    :event-list="eventList"
  >
    <template #title>Color</template>

    <template #description>
      ezofis has a component called <b>EzColor</b>, which can be used to get
      color input from user.
    </template>

    <template #usage>
      <!-- default -->

      <DocExample title="Default" :code="example[0]">
        <template #example>
          <EzColor v-model="color" label="color" is-mandatory></EzColor>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- error -->

      <DocExample title="error" :code="example[1]">
        <template #example>
          <EzColor
            v-model="color"
            label="color"
            error="color is required"
            is-mandatory
          ></EzColor>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- disabled -->

      <DocExample title="disabled" :code="example[2]">
        <template #example>
          <EzColor
            v-model="color"
            label="color"
            is-mandatory
            is-disabled
          ></EzColor>
        </template>
      </DocExample>

      <!-- ... -->
    </template>
  </DocApi>
</template>

<script>
const EzColor = () => import("@/library/components/ez-color/index");
const DocApi = () => import("@/components/doc-api/index");
const DocExample = () => import("@/components/doc-example/index");

export default {
  name: "Color",

  components: { EzColor, DocApi, DocExample },

  data() {
    return {
      color: "",
      startColor: "",
      endColor: "",
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
        '<EzColor v-model="color" label="color" is-mandatory></EzColor>',
        '<EzColor v-model="color" label="color" error="color is required" is-mandatory></EzColor>',
        '<EzColor v-model="color" label="color" is-mandatory is-disabled></EzColor>',
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
