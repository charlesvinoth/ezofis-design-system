<template>
  <div class="expand bg-white" :class="classList">
    <q-expansion-item
      :group="groupName"
      :default-opened="isPinned"
      expand-separator
      expand-icon-class="no-padding text-gray-5"
      header-class="hover items-center q-px-md q-py-sm overflow-hidden"
    >
      <template #header>
        <slot name="header">
          <!-- icon -->

          <slot name="icon">
            <div v-if="icon" class="col-auto q-mr-md">
              <q-icon :name="icon" color="gray-5" size="20px"></q-icon>
            </div>
          </slot>

          <!-- ... -->

          <div class="col">
            <!-- title -->

            <slot name="title">
              <div class="text-4 text-weight-medium text-capitalize">
                {{ title }}
              </div>
            </slot>

            <!-- ... -->

            <!-- description -->

            <slot name="description">
              <div v-if="description" class="text-2 text-gray-5">
                {{ description }}
              </div>
            </slot>

            <!-- ... -->
          </div>

          <q-btn
            v-if="groupName"
            v-tooltip="'pin'"
            flat
            round
            size="sm"
            color="gray-5"
            class="q-mr-sm"
            @click="$emit('pin')"
          >
            <q-icon
              :name="isPinned ? 'mdi-pin' : 'mdi-pin'"
              :color="isPinned ? 'secondary' : 'gray-3'"
              size="20px"
            ></q-icon>
          </q-btn>
        </slot>
      </template>

      <!-- content -->

      <slot></slot>

      <!-- ... -->
    </q-expansion-item>
  </div>
</template>

<script>
export default {
  name: "EzAccordion",

  props: {
    isPinned: {
      type: Boolean,
      default: false,
    },

    title: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },

    icon: {
      type: String,
      default: "",
    },

    groupName: {
      type: String,
      default: "",
    },

    classList: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
.expand .q-hoverable:hover > .q-focus-helper {
  opacity: 0 !important;
}
</style>
