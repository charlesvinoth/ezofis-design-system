<template>
  <DocApi
    author="Charles Vinoth"
    version="1.0"
    :prop-list="propList"
    :event-list="eventList"
  >
    <template #title>Tabs</template>

    <template #description>
      ezofis has a component called <b>EzTabs</b>, which can be used for hiding
      content behind a selectable item and as a pseudo-navigation.
    </template>

    <template #usage>
      <!-- default -->
      <DocExample title="Default" :code="example[0]">
        <template #example>
          <EzTabs v-model="tab" :tabs="tabs"></EzTabs>
        </template>

        <template #options>
          <pre class="language-javascript"><code>{{options[0]}}</code></pre>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- left align -->
      <DocExample title="left align" :code="example[1]">
        <template #example>
          <EzTabs v-model="tab" :tabs="tabs" position="left"></EzTabs>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- right align -->
      <DocExample title="right align" :code="example[2]">
        <template #example>
          <EzTabs v-model="tab" :tabs="tabs" position="right"></EzTabs>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- color -->
      <DocExample title="color" :code="example[3]">
        <template #example>
          <EzTabs v-model="tab" :tabs="tabs" color="deep-orange"></EzTabs>
        </template>
      </DocExample>
      <!-- ... -->
    </template>
  </DocApi>
</template>

<script>
const EzTabs = () => import("@/library/components/ez-tabs/index");
const DocApi = () => import("@/components/doc-api/index");
const DocExample = () => import("@/components/doc-example/index");

export default {
  name: "Tabs",

  components: { EzTabs, DocApi, DocExample },

  data() {
    return {
      tab: "upload",
      tabs: [
        {
          id: this.$nano.id(),
          label: "upload",
          value: "upload",
          icon: "eva-cloud-upload-outline",
        },
        {
          id: this.$nano.id(),
          label: "crop",
          value: "crop",
          icon: "crop",
        },
        {
          id: this.$nano.id(),
          label: "save",
          value: "save",
          icon: "eva-save-outline",
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
          name: "tabs",
          type: "Array",
          description: "Tabs",
          acceptedValues: "Array of TAB objects",
          defaultValue: "[ ]",
        },
        {
          id: this.$nano.id(),
          name: "color",
          type: "String",
          description: "Sets the color of the active tab",
          acceptedValues: "Quasar colors",
          defaultValue: "secondary",
        },
        {
          id: this.$nano.id(),
          name: "position",
          type: "String",
          description: "Alignment",
          acceptedValues: "left | center | right | justify",
          defaultValue: "center",
        },
      ],
      eventList: [
        {
          id: this.$nano.id(),
          name: "input",
          description: "Triggers when the tab is clicked",
          parameters: "Tab value",
        },
      ],
      example: [
        '<EzTabs v-model="tab" :tabs="tabs"></EzTabs>',
        '<EzTabs v-model="tab" :tabs="tabs" position="left"></EzTabs>',
        '<EzTabs v-model="tab" :tabs="tabs" position="right"></EzTabs>',
        '<EzTabs v-model="tab" :tabs="tabs" color="deep-orange"></EzTabs>',
      ],
      options: [
        `tabs: [
          {
            id: this.$nano.id(),
            label: "upload",
            value: "upload",
            icon: "eva-cloud-upload-outline"
          },
          {
            id: this.$nano.id(),
            label: "crop",
            value: "crop",
            icon: "crop"
          },
          {
            id: this.$nano.id(),
            label: "save",
            value: "save",
            icon: "eva-save-outline"
          }
        ]`,
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
