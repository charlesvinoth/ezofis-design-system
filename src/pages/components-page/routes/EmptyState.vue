<template>
  <DocApi
    author="Charles Vinoth"
    version="1.0"
    :prop-list="propList"
    :event-list="eventList"
  >
    <template #title>Empty State</template>

    <template #description>
      ezofis has a component called <b>EzEmptyState</b>, which can be used to
      show no data is available.
    </template>

    <template #usage>
      <!-- default -->
      <DocExample title="Default" :code="example[0]">
        <template #example>
          <EzEmptyState
            icon="eva-people"
            title="Start by creating a group"
            subtitle="Creating a group makes working in teams easier. Share content with the people who need it and find content where you need it."
            action="add group"
            action-icon="eva-plus"
          ></EzEmptyState>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- color -->
      <DocExample title="Color" :code="example[1]">
        <template #example>
          <EzEmptyState
            icon="eva-archive"
            title="You don't have any cabinets"
            color="secondary"
            subtitle="All cabinets will appear in this list"
            action="add cabinet"
            action-icon="eva-plus"
          ></EzEmptyState>
        </template>
      </DocExample>
      <!-- ... -->
    </template>
  </DocApi>
</template>

<script>
const EzEmptyState = () => import("@/library/components/ez-empty-state/index");
const DocApi = () => import("@/components/doc-api/index");
const DocExample = () => import("@/components/doc-example/index");

export default {
  name: "EmptyState",

  components: { EzEmptyState, DocApi, DocExample },

  data() {
    return {
      propList: [
        {
          id: this.$nano.id(),
          name: "icon",
          type: "String",
          description: "Sets the Icon",
          acceptedValues: "Quasar icons",
          defaultValue: "",
        },
        {
          id: this.$nano.id(),
          name: "title",
          type: "String",
          description: "Sets the title",
          acceptedValues: "",
          defaultValue: "",
        },
        {
          id: this.$nano.id(),
          name: "subtitle",
          type: "String",
          description: "Sets the subtitle",
          acceptedValues: "",
          defaultValue: "",
        },
        {
          id: this.$nano.id(),
          name: "color",
          type: "String",
          description: "Sets the color",
          acceptedValues: "Quasar colors",
          defaultValue: "Primary",
        },
        {
          id: this.$nano.id(),
          name: "action",
          type: "String",
          description: "Displays an action button",
          acceptedValues: "",
          defaultValue: "",
        },
        {
          id: this.$nano.id(),
          name: "actionIcon",
          type: "String",
          description: "Display an icon on the action button",
          acceptedValues: "Quasar icons",
          defaultValue: "",
        },
      ],
      eventList: [
        {
          id: this.$nano.id(),
          name: "click",
          description: "Triggers when the action button is clicked",
          parameters: "Native event",
        },
      ],
      example: [
        `<EzEmptyState icon="eva-people" title="Start by creating a group" subtitle="Creating a group makes working in teams easier. Share content with the people who need it and find content where you need it." action="add group" action-icon="eva-plus"></EzEmptyState>`,
        `<EzEmptyState icon="eva-archive" title="You don't have any cabinets" subtitle="All cabinets will appear in this list" color="secondary" action="add cabinet" action-icon="eva-plus"></EzEmptyState>`,
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
