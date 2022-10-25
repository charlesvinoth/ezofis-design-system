<template>
  <DocApi
    author="Charles Vinoth"
    version="1.0"
    :prop-list="propList"
    :event-list="eventList"
  >
    <template #title>Modal</template>

    <template #description>
      ezofis has a component called <b>EzModal</b>, which can be used to show
      content on top of an overlay. It blocks any interaction with the page —
      until the overlay is clicked, or a close action is triggered.
    </template>

    <template #usage>
      <!-- default -->
      <DocExample title="Default" :code="example[0]">
        <template #example>
          <EzButton label="modal" @click="modal1 = !modal1"></EzButton>
          <EzModal v-model="modal1" title="modal"></EzModal>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- color -->
      <DocExample title="Color" :code="example[1]">
        <template #example>
          <EzButton
            label="modal"
            color="secondary"
            @click="modal2 = !modal2"
          ></EzButton>
          <EzModal v-model="modal2" color="secondary" title="modal"></EzModal>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- persistent -->
      <DocExample title="persistent" :code="example[2]">
        <template #example>
          <EzButton label="modal" @click="modal3 = !modal3"></EzButton>
          <EzModal v-model="modal3" title="modal" is-persistent></EzModal>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- maximized -->
      <DocExample title="maximized" :code="example[3]">
        <template #example>
          <EzButton label="modal" @click="modal4 = !modal4"></EzButton>
          <EzModal v-model="modal4" title="modal" is-maximized></EzModal>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- full width -->
      <DocExample title="full width" :code="example[4]">
        <template #example>
          <EzButton label="modal" @click="modal5 = !modal5"></EzButton>
          <EzModal v-model="modal5" title="modal" is-full-width></EzModal>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- full height -->
      <DocExample title="full height" :code="example[5]">
        <template #example>
          <EzButton label="modal" @click="modal6 = !modal6"></EzButton>
          <EzModal v-model="modal6" title="modal" is-full-height></EzModal>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- custom width -->
      <DocExample title="custom width" :code="example[6]">
        <template #example>
          <EzButton label="modal" @click="modal7 = !modal7"></EzButton>
          <EzModal v-model="modal7" title="modal" width="540px"></EzModal>
        </template>
      </DocExample>
      <!-- ... -->
    </template>
  </DocApi>
</template>

<script>
const EzModal = () => import("@/library/components/ez-modal/index");
const EzButton = () => import("@/library/components/ez-button/index");
const DocApi = () => import("@/components/doc-api/index");
const DocExample = () => import("@/components/doc-example/index");

export default {
  name: "Modal",

  components: { EzModal, EzButton, DocApi, DocExample },

  data() {
    return {
      modal1: false,
      modal2: false,
      modal3: false,
      modal4: false,
      modal5: false,
      modal6: false,
      modal7: false,
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
          description: "Sets the width",
          acceptedValues: "CSS width",
          defaultValue: "480px",
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
            "Can't dismiss Modal if clicking outside of it or hitting ESC key",
          acceptedValues: "true | false",
          defaultValue: "false",
        },
        {
          id: this.$nano.id(),
          name: "isMaximized",
          type: "Boolean",
          description: "Put Modal into maximized mode",
          acceptedValues: "true | false",
          defaultValue: "false",
        },
        {
          id: this.$nano.id(),
          name: "isFullWidth",
          type: "Boolean",
          description: "Set Modal width same width as the window",
          acceptedValues: "true | false",
          defaultValue: "false",
        },
        {
          id: this.$nano.id(),
          name: "isFullHeight",
          type: "Boolean",
          description: "Set Modal height same height as the window",
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
        `<EzModal v-model="modal1" title="modal"></EzModal>`,
        `<EzModal v-model="modal2" title="modal" color="secondary"></EzModal>`,
        '<EzModal v-model="modal3" title="modal" is-persistent></EzModal>',
        '<EzModal v-model="modal4" title="modal" is-maximized></EzModal>',
        '<EzModal v-model="modal5" title="modal" is-full-width></EzModal>',
        '<EzModal v-model="modal6" title="modal" is-full-height></EzModal>',
        '<EzModal v-model="modal7" title="modal" width="540px"></EzModal>',
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
