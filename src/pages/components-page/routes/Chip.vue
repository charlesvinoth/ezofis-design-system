<template>
  <DocApi
    author="Charles Vinoth"
    version="1.0"
    :prop-list="propList"
    :event-list="eventList"
  >
    <template #title>Chip</template>

    <template #description>
      ezofis has a component called <b>EzChip</b>, which is commonly used to
      represent an input, attribute, or an action.
    </template>

    <template #usage>
      <!-- default -->
      <DocExample title="Default" :code="example[0]">
        <template #example>
          <div class="row items-center q-col-gutter-sm">
            <EzChip label="India"></EzChip>
            <EzChip label="USA"></EzChip>
            <EzChip label="Russia"></EzChip>
            <EzChip label="China"></EzChip>
            <EzChip label="Mexico"></EzChip>
          </div>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- removable -->
      <DocExample title="removable" :code="example[1]">
        <template #example>
          <div class="row items-center q-col-gutter-sm">
            <EzChip label="India" is-removable></EzChip>
            <EzChip label="USA" is-removable></EzChip>
            <EzChip label="Russia" is-removable></EzChip>
            <EzChip label="China" is-removable></EzChip>
            <EzChip label="Mexico" is-removable></EzChip>
          </div>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- active -->
      <DocExample title="active" :code="example[2]">
        <template #example>
          <div class="row items-center q-col-gutter-sm">
            <EzChip label="India" is-removable></EzChip>
            <EzChip label="USA" is-removable is-active></EzChip>
            <EzChip label="Russia" is-removable></EzChip>
            <EzChip
              label="China"
              is-removable
              is-active
              active-color="deep-orange"
            ></EzChip>
            <EzChip label="Mexico" is-removable></EzChip>
          </div>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- disabled -->
      <DocExample title="disabled" :code="example[3]">
        <template #example>
          <div class="row items-center q-col-gutter-sm">
            <EzChip label="India"></EzChip>
            <EzChip label="USA" is-disabled></EzChip>
            <EzChip label="Russia"></EzChip>
            <EzChip label="China" is-disabled></EzChip>
            <EzChip label="Mexico"></EzChip>
          </div>
        </template>
      </DocExample>
      <!-- ... -->
    </template>
  </DocApi>
</template>

<script>
const EzChip = () => import("@/library/components/ez-chip/index");
const DocApi = () => import("@/components/doc-api/index");
const DocExample = () => import("@/components/doc-example/index");

export default {
  name: "Chip",

  components: { EzChip, DocApi, DocExample },

  data() {
    return {
      propList: [
        {
          id: this.$nano.id(),
          name: "label",
          type: "String",
          description: "Text that will be shown inside the chip",
          acceptedValues: "",
          defaultValue: "",
        },
        {
          id: this.$nano.id(),
          name: "bgColor",
          type: "String",
          description: "Background color of the chip",
          acceptedValues: "Quasar colors",
          defaultValue: "gray-3",
        },
        {
          id: this.$nano.id(),
          name: "textColor",
          type: "String",
          description: "Text color of the chip",
          acceptedValues: "Quasar colors",
          defaultValue: "gray-10",
        },
        {
          id: this.$nano.id(),
          name: "iconColor",
          type: "String",
          description: "Color of the 'remove' icon",
          acceptedValues: "Quasar colors",
          defaultValue: "gray-5",
        },
        {
          id: this.$nano.id(),
          name: "isRemovable",
          type: "Boolean",
          description: "Displays a 'remove' icon inside the chip",
          acceptedValues: "true | false",
          defaultValue: "false",
        },
        {
          id: this.$nano.id(),
          name: "isDisabled",
          type: "Boolean",
          description: "Disables the chip",
          acceptedValues: "true | false",
          defaultValue: "false",
        },
        {
          id: this.$nano.id(),
          name: "isActive",
          type: "Boolean",
          description:
            "Set background color to secondary, text color and icon color to white",
          acceptedValues: "true | false",
          defaultValue: "false",
        },
        {
          id: this.$nano.id(),
          name: "activeColor",
          type: "Boolean",
          description:
            "Set background color to activeColor, text color and icon color to white",
          acceptedValues: "true | false",
          defaultValue: "false",
        },
      ],
      eventList: [
        {
          id: this.$nano.id(),
          name: "click",
          description: "Triggers when chip is clicked",
          parameters: "Native event",
        },
        {
          id: this.$nano.id(),
          name: "remove",
          description: "Triggers when remove icon is clicked",
          parameters: "Native event",
        },
      ],
      example: [
        '<EzChip label="India"></EzChip>\n<EzChip label="USA"></EzChip>\n<EzChip label="Russia"></EzChip>\n<EzChip label="China"></EzChip>\n<EzChip label="Mexico"></EzChip>',
        '<EzChip label="India" is-removable></EzChip>\n<EzChip label="USA" is-removable></EzChip>\n<EzChip label="Russia" is-removable></EzChip>\n<EzChip label="China" is-removable></EzChip>\n<EzChip label="Mexico" is-removable></EzChip>',
        '<EzChip label="India" is-removable></EzChip>\n<EzChip label="USA" is-removable is-active></EzChip>\n<EzChip label="Russia" is-removable></EzChip>\n<EzChip label="China" is-removable is-active active-color="deep-orange"></EzChip>\n<EzChip label="Mexico" is-removable></EzChip>',
        '<EzChip label="India"></EzChip>\n<EzChip label="USA" is-disabled></EzChip>\n<EzChip label="Russia"></EzChip>\n<EzChip label="China" is-disabled></EzChip>\n<EzChip label="Mexico"></EzChip>',
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
