<template>
  <DocApi
    author="Charles Vinoth"
    version="1.0"
    :prop-list="propList"
    :event-list="eventList"
  >
    <template #title>Breadcrumbs</template>

    <template #description>
      ezofis has a component called <b>EzBreadcrumbs</b>, which allows users to
      keep track of their location within the app.
    </template>

    <template #usage>
      <!-- default -->
      <DocExample title="Default" :code="example[0]">
        <template #example>
          <EzBreadcrumbs>
            <q-breadcrumbs-el label="Home" />
            <q-breadcrumbs-el label="Components" />
            <q-breadcrumbs-el label="Breadcrumbs" />
          </EzBreadcrumbs>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- color -->
      <DocExample title="color" :code="example[1]">
        <template #example>
          <EzBreadcrumbs color="primary">
            <q-breadcrumbs-el label="Home" icon="home" />
            <q-breadcrumbs-el label="Components" icon="widgets" />
            <q-breadcrumbs-el label="Breadcrumbs" />
          </EzBreadcrumbs>
        </template>
      </DocExample>
      <!-- ... -->
    </template>
  </DocApi>
</template>

<script>
const EzBreadcrumbs = () => import("@/library/components/ez-breadcrumbs/index");
const DocApi = () => import("@/components/doc-api/index");
const DocExample = () => import("@/components/doc-example/index");

export default {
  name: "Breadcrumbs",

  components: { EzBreadcrumbs, DocApi, DocExample },

  data() {
    return {
      propList: [
        {
          id: this.$nano.id(),
          name: "color",
          type: "String",
          description: "Sets the color of the header",
          acceptedValues: "Quasar colors",
          defaultValue: "Secondary",
        },
      ],
      eventList: [],
      example: [
        '<EzBreadcrumbs>\n <q-breadcrumbs-el label="Home" />\n <q-breadcrumbs-el label="Components" />\n <q-breadcrumbs-el label="Breadcrumbs" />\n</EzBreadcrumbs>',
        '<EzBreadcrumbs color="primary">\n <q-breadcrumbs-el label="Home" icon="home" />\n <q-breadcrumbs-el label="Components" icon="widgets" />\n <q-breadcrumbs-el label="Breadcrumbs" />\n</EzBreadcrumbs>',
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
