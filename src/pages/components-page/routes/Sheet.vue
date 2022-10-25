<template>
  <DocApi
    author="Charles Vinoth"
    version="1.0"
    :prop-list="propList"
    :event-list="eventList"
  >
    <template #title>Sheet</template>

    <template #description>
      ezofis has a component called <b>EzSheet</b>, which can be used to show
      content on top of an overlay. It blocks any interaction with the page —
      until the overlay is clicked, or a close action is triggered.
    </template>

    <template #usage>
      <!-- default -->
      <DocExample title="Default" :code="example[0]">
        <template #example>
          <EzButton label="sheet" @click="sheet1 = !sheet1"></EzButton>
          <EzSheet v-model="sheet1" title="sheet"></EzSheet>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- color -->
      <DocExample title="Color" :code="example[1]">
        <template #example>
          <EzButton
            label="sheet"
            color="secondary"
            @click="sheet2 = !sheet2"
          ></EzButton>
          <EzSheet v-model="sheet2" color="secondary" title="sheet"></EzSheet>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- persistent -->
      <DocExample title="persistent" :code="example[2]">
        <template #example>
          <EzButton label="sheet" @click="sheet3 = !sheet3"></EzButton>
          <EzSheet v-model="sheet3" title="sheet" is-persistent></EzSheet>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- width -->
      <DocExample title="width" :code="example[3]">
        <template #example>
          <EzButton label="sheet" @click="sheet4 = !sheet4"></EzButton>
          <EzSheet v-model="sheet4" title="sheet" width="50vw"></EzSheet>
        </template>
      </DocExample>
      <!-- ... -->
    </template>
  </DocApi>
</template>

<script>
const EzSheet = () => import("@/library/components/ez-sheet/index");
const EzButton = () => import("@/library/components/ez-button/index");
const DocApi = () => import("@/components/doc-api/index");
const DocExample = () => import("@/components/doc-example/index");

export default {
  name: "Sheet",

  components: { EzSheet, EzButton, DocApi, DocExample },

  data() {
    return {
      sheet1: false,
      sheet2: false,
      sheet3: false,
      sheet4: false,
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
        {
          id: this.$nano.id(),
          name: "width",
          type: "String",
          description: "Sets the sheet width",
          acceptedValues: "",
          defaultValue: "320px",
        },
        {
          id: this.$nano.id(),
          name: "title",
          type: "String",
          description: "Sets the header title",
          acceptedValues: "",
          defaultValue: "",
        },
        {
          id: this.$nano.id(),
          name: "color",
          type: "String",
          description: "Sets the color of the header",
          acceptedValues: "Quasar colors",
          defaultValue: "Primary",
        },
        {
          id: this.$nano.id(),
          name: "isPersistent",
          type: "Boolean",
          description:
            "Can't dismiss Sheet if clicking outside of it or hitting ESC key",
          acceptedValues: "true | false",
          defaultValue: "false",
        },
      ],
      eventList: [
        {
          id: this.$nano.id(),
          name: "input",
          description: "Triggers when the action button is clicked",
          parameters: "Native event",
        },
      ],
      example: [
        `<EzSheet v-model="sheet1" title="sheet"></EzSheet>`,
        `<EzSheet v-model="sheet2" title="sheet" color="secondary"></EzSheet>`,
        '<EzSheet v-model="sheet3" title="sheet" is-persistent></EzSheet>',
        '<EzSheet v-model="sheet5" title="sheet" width="480px"></EzSheet>',
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
