<template>
  <DocApi
    author="Charles Vinoth"
    version="1.0"
    :prop-list="propList"
    :event-list="eventList"
  >
    <template #title>Fab</template>

    <template #description>
      ezofis has a component called <b>EzFab</b>, which can be used as both an
      icon button and a floating action button.
    </template>

    <template #usage>
      <!-- default -->
      <DocExample title="Default" :code="example[0]">
        <template #example>
          <EzFab icon="eva-cloud-download-outline"></EzFab>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- color -->
      <DocExample title="Color" :code="example[1]">
        <template #example>
          <div class="row items-center q-col-gutter-sm">
            <div class="col-auto">
              <EzFab icon="eva-cloud-download-outline" color="indigo"></EzFab>
            </div>

            <div class="col-auto">
              <EzFab
                icon="eva-cloud-download-outline"
                color="deep-orange"
              ></EzFab>
            </div>
          </div>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- appearance -->
      <DocExample title="Appearance" :code="example[2]">
        <template #example>
          <div class="row items-center q-col-gutter-sm">
            <div class="col-auto">
              <EzFab icon="eva-cloud-download-outline" is-flat></EzFab>
            </div>

            <div class="col-auto">
              <EzFab icon="eva-cloud-download-outline" is-outline></EzFab>
            </div>
          </div>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- size -->
      <DocExample title="size" :code="example[3]">
        <template #example>
          <div class="row items-center q-col-gutter-sm">
            <div class="col-auto">
              <EzFab icon="eva-cloud-download-outline" :size="16"></EzFab>
            </div>

            <div class="col-auto">
              <EzFab icon="eva-cloud-download-outline" :size="24"></EzFab>
            </div>
          </div>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- state -->
      <DocExample title="State" :code="example[4]">
        <template #example>
          <div class="row items-center q-col-gutter-sm">
            <div class="col-auto">
              <EzFab icon="eva-cloud-download-outline" is-disabled></EzFab>
            </div>

            <div class="col-auto">
              <EzFab icon="eva-cloud-download-outline" is-loading></EzFab>
            </div>
          </div>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- tooltip -->
      <DocExample title="tooltip" :code="example[5]">
        <template #example>
          <EzFab icon="eva-cloud-download-outline" tooltip="tooltip"></EzFab>
        </template>
      </DocExample>
      <!-- ... -->
    </template>
  </DocApi>
</template>

<script>
const EzFab = () => import("@/library/components/ez-fab/index");
const DocApi = () => import("@/components/doc-api/index");
const DocExample = () => import("@/components/doc-example/index");

export default {
  name: "Fab",

  components: { EzFab, DocApi, DocExample },

  data() {
    return {
      example: [
        '<EzFab icon="eva-cloud-download-outline"></EzFab>',
        '<EzFab icon="eva-cloud-download-outline" color="indigo"></EzFab>\n<EzFab icon="eva-cloud-download-outline" color="deep-orange"></EzFab>',
        '<EzFab icon="eva-cloud-download-outline" is-flat></EzFab>\n<EzFab icon="eva-cloud-download-outline" is-outline></EzFab>',
        '<EzFab icon="eva-cloud-download-outline" :size="16"></EzFab>\n<EzFab icon="eva-cloud-download-outline" :size="24"></EzFab>',
        '<EzFab icon="eva-cloud-download-outline" is-disabled></EzFab>\n<EzFab icon="eva-cloud-download-outline" is-loading></EzFab>',
        '<EzFab icon="eva-cloud-download-outline" tooltip="tooltip"></EzFab>',
      ],
      propList: [
        {
          id: this.$nano.id(),
          name: "color",
          type: "String",
          description: "Set background color of the fab",
          acceptedValues: "Quasar colors",
          defaultValue: "Primary",
        },
        {
          id: this.$nano.id(),
          name: "icon",
          type: "String",
          description: "Display an icon inside the button",
          acceptedValues: "Quasar icons",
          defaultValue: "",
        },
        {
          id: this.$nano.id(),
          name: "isFlat",
          type: "Boolean",
          description: "Use flat design",
          acceptedValues: "true | false",
          defaultValue: "false",
        },
        {
          id: this.$nano.id(),
          name: "isDisabled",
          type: "Boolean",
          description: "Disable the fab",
          acceptedValues: "true | false",
          defaultValue: "false",
        },
        {
          id: this.$nano.id(),
          name: "isOutline",
          type: "Boolean",
          description: "Use outline design",
          acceptedValues: "true | false",
          defaultValue: "false",
        },
        {
          id: this.$nano.id(),
          name: "isLoading",
          type: "Boolean",
          description: "Show a loading spinner",
          acceptedValues: "true | false",
          defaultValue: "false",
        },
        {
          id: this.$nano.id(),
          name: "tooltip",
          type: "String",
          description: "Display info on mouse over",
          acceptedValues: "",
          defaultValue: "",
        },
        {
          id: this.$nano.id(),
          name: "size",
          type: "Number",
          description: "Sets the size of the fab",
          acceptedValues: "",
          defaultValue: "10",
        },
      ],
      eventList: [
        {
          id: this.$nano.id(),
          name: "click",
          description: "Triggers when clicked",
          parameters: "Native event",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
