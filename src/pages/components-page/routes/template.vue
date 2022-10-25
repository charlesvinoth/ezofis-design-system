<template>
  <DocApi
    author="Charles Vinoth"
    version="1.0"
    :prop-list="propList"
    :event-list="eventList"
  >
    <template #title></template>

    <template #description>
      ezofis has a component called <b>EzEmptyState</b>, which can be used to .
    </template>

    <template #usage>
      <!-- default -->

      <DocExample title="Default" :code="example[0]">
        <template #example>
          <EzEmptyState></EzEmptyState>
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
      propList: [],
      eventList: [],
      example: [""],
    };
  },
};
</script>

<style lang="scss" scoped></style>
