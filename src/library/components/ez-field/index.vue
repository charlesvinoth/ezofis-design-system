<template>
  <div>
    <!-- label -->

    <EzLabel
      v-if="label"
      :label="label"
      :hint="hint"
      :description="description"
      :is-mandatory="isMandatory"
      :show-info-btn="showInfoBtn"
      class="q-mb-sm"
      @info="(e) => $emit('info', e)"
    >
    </EzLabel>

    <!-- ... -->

    <!-- control -->

    <div
      class="row items-center field"
      :class="[_class, { disabled: isDisabled, 'q-px-sm': !noPadding }]"
      @click="handleClick"
    >
      <!-- input -->

      <div class="col">
        <slot></slot>
      </div>

      <!-- ... -->

      <!-- action slot -->

      <slot name="action"></slot>

      <!-- ... -->

      <!-- clear btn -->

      <div v-if="showClearBtn" class="col-auto">
        <EzFab
          :size="4"
          is-flat
          icon="eva-close"
          color="gray-5"
          @click="handleClear"
        ></EzFab>
      </div>

      <!-- ... -->
    </div>

    <!-- ... -->

    <!-- error -->

    <EzError v-if="error" :error="error" class="q-mt-xs"></EzError>

    <!-- ... -->
  </div>
</template>

<script>
const EzLabel = () => import("@/library/components/ez-label/index.vue");
const EzFab = () => import("@/library/components/ez-fab/index.vue");
const EzError = () => import("@/library/components/ez-error/index.vue");

export default {
  name: "EzField",

  components: {
    EzLabel,
    EzFab,
    EzError,
  },

  props: {
    label: {
      type: String,
      default: "",
    },

    hint: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },

    showInfoBtn: {
      type: Boolean,
      default: false,
    },

    showClearBtn: {
      type: Boolean,
      default: false,
    },

    isMandatory: {
      type: Boolean,
      default: false,
    },

    error: {
      type: String,
      default: "",
    },

    isDisabled: {
      type: Boolean,
      default: false,
    },

    isFocused: {
      type: Boolean,
      default: false,
    },

    noPadding: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    _class() {
      if (this.error) return "field-error";
      if (this.isFocused) return "field-focused";

      return "field-normal";
    },
  },

  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },

    handleClear(e) {
      this.$emit("clear", e);
    },
  },
};
</script>

<style lang="scss" scoped></style>
