<template>
  <EzField
    ref="control"
    :label="label"
    :hint="_hint"
    :error="_error"
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
        v-model="model"
        v-mask="'##:## AA'"
        :disabled="isDisabled"
        class="text-gray-10"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="emitValue"
      />

      <q-popup-proxy
        v-model="timePicker"
        :target="$refs.control"
        no-parent-event
        transition-show="scale"
        transition-hide="scale"
      >
        <TimePicker
          v-model="model"
          :min-time="minTime"
          :max-time="maxTime"
        ></TimePicker>
      </q-popup-proxy>
    </template>

    <template #action>
      <div class="col-auto q-mr-xs">
        <EzFab
          is-flat
          :size="4"
          color="gray-5"
          icon="eva-clock"
          class="q-mr-xs"
          @click="toggleTimePicker"
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
const TimePicker = () => import("./time-picker.vue");

export default {
  name: "EzTime",

  components: { EzField, EzFab, TimePicker },

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

    minTime: {
      type: String,
      default: "00:00",
    },

    maxTime: {
      type: String,
      default: "23:59",
    },
  },

  data() {
    return {
      model: "",
      isFocused: false,
      timePicker: false,
      validationError: "",
    };
  },

  computed: {
    _error() {
      return this.validationError || this.error;
    },

    _hint() {
      return this.hint || "(hh:mm A)";
    },
  },

  watch: {
    value: {
      immediate: true,
      handler: function () {
        this.model = this.value;
      },
    },

    model: {
      immediate: true,
      handler: function () {
        this.model && this.validate();
      },
    },

    timePicker() {
      this.timePicker ? this.handleFocus() : this.handleBlur();
    },
  },

  methods: {
    emitValue() {
      this.$emit("input", this.model);
    },

    handleClear() {
      this.model = "";
      this.validationError = "";
      this.emitValue();
    },

    handleFocus() {
      this.isFocused = true;
    },

    handleBlur() {
      this.isFocused = false;
      this.validate();
    },

    toggleTimePicker() {
      this.timePicker = !this.timePicker;
    },

    isValidHour(hour) {
      return Number(hour) >= 1 && hour <= Number(12);
    },

    isValidMinute(minute) {
      return Number(minute) >= 0 && minute <= Number(59);
    },

    isValidMeridian(meridian) {
      return meridian === "AM" || meridian === "PM";
    },

    validate() {
      if (!this.model) {
        this.validationError = "";
        this.emitValue();
        return;
      }

      if (this.model.length !== 8) {
        this.validationError = "invalid time";
        this.$emit("input", "");
        return;
      }

      const [time, meridian] = this.model.split(" ");
      const [hour, minute] = time.split(":");

      if (!this.isValidHour(hour)) {
        this.validationError = "invalid hour";
        this.$emit("input", "");
      } else if (!this.isValidMinute(minute)) {
        this.validationError = "invalid minute";
        this.$emit("input", "");
      } else if (!this.isValidMeridian(meridian)) {
        this.validationError = "invalid meridian";
        this.$emit("input", "");
      } else {
        this.validationError = "";
        this.emitValue();
      }
    },
  },
};
</script>

<style lang="scss"></style>
