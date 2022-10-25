<template>
  <EzField
    :label="label"
    :hint="hint"
    :error="error"
    :description="description"
    :is-mandatory="isMandatory"
    :is-disabled="isDisabled"
    :is-focused="isFocused"
    :show-info-btn="showInfoBtn"
    :show-clear-btn="Boolean(model)"
    @info="(e) => $emit('info', e)"
    @clear="handleClear"
  >
    <template #default>
      <textarea
        v-model="model"
        :disabled="isDisabled"
        :rows="3"
        class="text-gray-10"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="emitValue"
      />
    </template>
  </EzField>
</template>

<script>
const EzField = () => import("@/library/components/ez-field/index.vue");

export default {
  name: "EzInput",

  components: { EzField },

  props: {
    value: {
      type: String,
      default: "",
    },

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
  },

  data() {
    return {
      model: "",
      isFocused: false,
    };
  },

  watch: {
    value: {
      immediate: true,
      handler: function () {
        this.model = this.value;
      },
    },
  },

  methods: {
    emitValue() {
      this.$emit("input", this.model);
    },

    handleClear() {
      this.model = "";
      this.emitValue();
    },

    handleFocus() {
      this.isFocused = true;
    },

    handleBlur() {
      this.isFocused = false;
    },
  },
};
</script>

<style lang="scss" scoped>
textarea {
  outline: none;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  resize: vertical;
}
</style>
