<template>
  <EzField
    ref="control"
    :label="label"
    :error="error"
    :hint="hint"
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
      <input
        :value="model"
        readonly
        :disabled="isDisabled"
        class="text-gray-10"
        @click="toggleColorPicker"
      />

      <q-popup-proxy
        v-model="colorPicker"
        :target="$refs.control"
        no-parent-event
        transition-show="scale"
        transition-hide="scale"
      >
        <div>
          <q-color
            v-model="model"
            no-header
            format-model="hex"
            default-view="palette"
          ></q-color>
        </div>
      </q-popup-proxy>
    </template>

    <template #action>
      <div class="col-auto q-mr-xs">
        <EzFab
          is-flat
          :size="4"
          color="gray-5"
          icon="eva-color-palette"
          class="q-mr-xs"
          @click="toggleColorPicker"
        >
        </EzFab>
      </div>
    </template>
  </EzField>
</template>

<script>
import { mask } from "vue-the-mask";

const EzField = () => import("@/library/components/ez-field/index.vue");
const EzFab = () => import("@/library/components/ez-fab/index.vue");

export default {
  name: "EzColor",

  components: { EzField, EzFab },

  directives: { mask },

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
      colorPicker: false,
    };
  },

  watch: {
    value: {
      immediate: true,
      handler: function () {
        this.model = this.value;
      },
    },

    model() {
      this.emitValue();
    },

    colorPicker() {
      this.colorPicker ? this.handleFocus() : this.handleBlur();
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

    toggleColorPicker() {
      this.colorPicker = !this.colorPicker;
    },
  },
};
</script>

<style lang="scss"></style>
