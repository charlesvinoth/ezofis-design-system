<template>
  <DocApi
    author="Charles Vinoth"
    version="1.0"
    :prop-list="propList"
    :event-list="eventList"
  >
    <template #title>Pulse</template>

    <template #description>
      ezofis has a component called <b>EzPulse</b>, which can be used to show no
      data is available.
    </template>

    <template #usage>
      <!-- default -->
      <DocExample title="Default" :code="example[0]">
        <template #example>
          <EzPulse></EzPulse>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- color -->
      <DocExample title="Color" :code="example[1]">
        <template #example>
          <div class="row items-center q-col-gutter-sm">
            <div class="col-auto">
              <EzPulse color="red"></EzPulse>
            </div>

            <div class="col-auto">
              <EzPulse color="green"></EzPulse>
            </div>

            <div class="col-auto">
              <EzPulse color="blue"></EzPulse>
            </div>

            <div class="col-auto">
              <EzPulse color="orange"></EzPulse>
            </div>
          </div>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- usage -->
      <DocExample title="usage" :code="example[2]">
        <template #example>
          <q-btn
            flat
            round
            color="gray-5"
            class="border bg-gray-1 border-gray-2"
          >
            <q-icon name="eva-bell-outline" size="20px"></q-icon>
            <EzPulse class="absolute-top-right"></EzPulse>
          </q-btn>
        </template>
      </DocExample>
      <!-- ... -->
    </template>
  </DocApi>
</template>

<script>
import { mapState } from "vuex";

const EzPulse = () => import("@/library/components/ez-pulse/index");
const DocApi = () => import("@/components/doc-api/index");
const DocExample = () => import("@/components/doc-example/index");

export default {
  name: "Pulse",

  components: { EzPulse, DocApi, DocExample },

  data() {
    return {
      propList: [
        {
          id: this.$nano.id(),
          name: "color",
          type: "String",
          description: "Sets the color",
          acceptedValues: "Quasar colors",
          defaultValue: "Secondary",
        },
      ],
      eventList: [],
      example: [
        `<EzPulse></EzPulse>`,
        `<EzPulse color="red"></EzPulse>\n<EzPulse color="green"></EzPulse>\n<EzPulse color="blue"></EzPulse>\n<EzPulse color="orange"></EzPulse>`,
        `<q-btn flat round color="grey" class="border-full">\n\t<q-icon name="eva-bell-outline" size="20px"></q-icon>\n\t<EzPulse class="absolute-top-right"></EzPulse>\n</q-btn>`,
      ],
    };
  },

  computed: {
    ...mapState(["darkMode"]),
  },
};
</script>

<style lang="scss" scoped></style>
