<template>
  <DocApi
    author="Charles Vinoth"
    version="1.0"
    :prop-list="propList"
    :event-list="eventList"
  >
    <template #title>Signature</template>

    <template #description>
      ezofis has a component called <b>EzSignature</b>, which allows users to
      draw or upload signature.
    </template>

    <template #usage>
      <!-- default -->
      <DocExample title="Default" :code="example[0]">
        <template #example>
          <EzSignature v-model="signature"></EzSignature>
        </template>
      </DocExample>
      <!-- ... -->
    </template>
  </DocApi>
</template>

<script>
const EzSignature = () => import("@/library/components/ez-signature/index");
const DocApi = () => import("@/components/doc-api/index");
const DocExample = () => import("@/components/doc-example/index");

export default {
  name: "Signature",

  components: { EzSignature, DocApi, DocExample },

  data() {
    return {
      signature: "",
      propList: [
        {
          id: this.$nano.id(),
          name: "value",
          type: "Boolean",
          description:
            "Model of the component; Either use this property (along with a listener for 'input' event) OR use v-model directive",
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
      example: ['<EzSignature v-model="signature"></EzSignature>'],
    };
  },
};
</script>

<style lang="scss" scoped></style>
