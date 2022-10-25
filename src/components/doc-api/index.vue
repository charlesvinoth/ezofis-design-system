<template>
  <div class="q-pa-lg">
    <!-- meta -->

    <div class="row items-center q-mb-xl text-1 text-gray-5">
      <div>
        Author: <span class="text-weight-medium">{{ author }}</span>
      </div>

      <q-space></q-space>

      <div>
        Version: <b>{{ version }}</b>
      </div>
    </div>

    <!-- ... -->

    <!-- title -->

    <div class="text-6 text-weight-bold q-mb-sm text-capitalize">
      <slot name="title"></slot>
    </div>

    <!-- ... -->

    <!-- description -->

    <div class="q-mb-xl text-3 text-gray-8">
      <slot name="description"></slot>
    </div>

    <!-- ... -->

    <!-- usage -->

    <SectionHeader title="usage"></SectionHeader>
    <slot name="usage"></slot>

    <!-- ... -->

    <!-- props -->

    <template v-if="propList.length">
      <SectionHeader title="props"></SectionHeader>
      <SectionBody :columns="propListColumns" :rows="propList"></SectionBody>
    </template>

    <!-- ... -->

    <!-- events -->

    <template v-if="eventList.length">
      <SectionHeader title="events"></SectionHeader>
      <SectionBody :columns="eventListColumns" :rows="eventList"></SectionBody>
    </template>

    <!-- ... -->

    <!-- slots -->

    <template v-if="slotList.length">
      <SectionHeader title="slots"></SectionHeader>
      <SectionBody :columns="slotListColumns" :rows="slotList"></SectionBody>
    </template>

    <!-- ... -->
  </div>
</template>

<script>
import { mapState } from "vuex";

const SectionHeader = () => import("./components/section-header");
const SectionBody = () => import("./components/section-body");

export default {
  name: "DocApi",

  components: {
    SectionHeader,
    SectionBody,
  },

  props: {
    author: {
      type: String,
      required: true,
    },

    version: {
      type: String,
      required: true,
    },

    propList: {
      type: Array,
      default: () => [],
    },

    eventList: {
      type: Array,
      default: () => [],
    },

    slotList: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      propListColumns: [
        {
          id: this.$nano.id(),
          name: "name",
          label: "name",
        },
        {
          id: this.$nano.id(),
          name: "type",
          label: "type",
        },
        {
          id: this.$nano.id(),
          name: "description",
          label: "description",
        },
        {
          id: this.$nano.id(),
          name: "acceptedValues",
          label: "accepted values",
        },
        {
          id: this.$nano.id(),
          name: "defaultValue",
          label: "default value",
        },
      ],
      eventListColumns: [
        {
          id: this.$nano.id(),
          name: "name",
          label: "name",
        },
        {
          id: this.$nano.id(),
          name: "description",
          label: "description",
        },
        {
          id: this.$nano.id(),
          name: "parameters",
          label: "parameters",
        },
      ],
      slotListColumns: [
        {
          id: this.$nano.id(),
          name: "name",
          label: "name",
        },
        {
          id: this.$nano.id(),
          name: "description",
          label: "description",
        },
      ],
    };
  },

  computed: {
    ...mapState(["darkMode"]),
  },
};
</script>

<style lang="scss" scoped></style>
