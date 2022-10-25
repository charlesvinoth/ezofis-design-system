<template>
  <DocApi
    author="Charles Vinoth"
    version="1.0"
    :prop-list="propList"
    :event-list="eventList"
  >
    <template #title>Error</template>

    <template #description>
      ezofis has a component called <b>EzError</b>, which is commonly used to
      show error on the form controls.
    </template>

    <template #usage>
      <!-- default -->
      <DocExample title="Default" :code="example[0]">
        <template #example>
          <EzError error="error text"></EzError>
        </template>
      </DocExample>
      <!-- ... -->
    </template>
  </DocApi>
</template>

<script>
const EzError = () => import("@/library/components/ez-error/index");
const DocApi = () => import("@/components/doc-api/index");
const DocExample = () => import("@/components/doc-example/index");

export default {
  name: "Error",

  components: { EzError, DocApi, DocExample },

  data() {
    return {
      propList: [
        {
          id: this.$nano.id(),
          name: "error",
          type: "String",
          description: "Error text",
          acceptedValues: "",
          defaultValue: "",
        },
      ],
      eventList: [],
      example: ['<EzError error="error text"></EzError>'],
    };
  },
};
</script>

<style lang="scss" scoped></style>
