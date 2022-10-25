<template>
  <div class="text-center wrapper">
    <q-avatar :color="color" size="120px" class="shadow-1">
      <q-icon :name="icon" color="white" size="80px"></q-icon>
    </q-avatar>

    <div class="q-mt-xl q-mb-lg">
      <div class="text-5 text-weight-bold text-center q-mb-sm">
        {{ title }}
      </div>

      <div class="text-2 text-center text-gray-5">
        {{ subtitle }}
      </div>
    </div>

    <EzButton
      v-if="action"
      :label="action"
      :icon-left="actionIcon"
      :color="color"
      @click="handleClick"
    >
    </EzButton>
  </div>
</template>

<script>
const EzButton = () => import("@/library/components/ez-button/index");

export default {
  name: "EzEmptyState",

  components: { EzButton },

  props: {
    icon: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    subtitle: {
      type: String,
      default: "",
    },

    color: {
      type: String,
      default: "primary",
    },

    action: {
      type: String,
      default: "",
    },

    actionIcon: {
      type: String,
      default: "",
    },
  },

  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 380px;
  margin: 24px auto;
}
</style>
