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
        v-mask="'##/##/####'"
        :disabled="isDisabled"
        class="text-gray-10"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="emitValue"
      />

      <q-popup-proxy
        v-model="datePicker"
        :target="$refs.control"
        no-parent-event
        transition-show="scale"
        transition-hide="scale"
      >
        <div>
          <q-date
            v-model="model"
            today-btn
            minimal
            mask="DD/MM/YYYY"
            color="secondary"
            :options="limitDates"
          ></q-date>
        </div>
      </q-popup-proxy>
    </template>

    <template #action>
      <div class="col-auto q-mr-xs">
        <EzFab
          is-flat
          :size="4"
          color="gray-5"
          icon="eva-calendar"
          class="q-mr-xs"
          @click="toggleDatePicker"
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
  name: "EzDate",

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

    minDate: {
      type: String,
      default: "",
    },

    maxDate: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      model: "",
      isFocused: false,
      datePicker: false,
      validationError: "",
    };
  },

  computed: {
    _limitDates() {
      return this.minDate || this.maxDate;
    },

    _error() {
      return this.validationError || this.error;
    },

    _hint() {
      return this.hint || "(dd/mm/yyyy)";
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

    datePicker() {
      this.datePicker ? this.handleFocus() : this.handleBlur();
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

    validate() {
      if (!this.model) {
        this.validationError = "";
        this.emitValue();
        return;
      }

      if (this.model.length !== 10) {
        this.validationError = "invalid date";
        this.$emit("input", "");
        return;
      }

      if (!this.$day.isValidDate(this.model)) {
        this.validationError = "invalid date";
        this.$emit("input", "");
      } else {
        this.validationError = "";
        this.emitValue();
      }
    },

    toggleDatePicker() {
      this.datePicker = !this.datePicker;
    },

    limitDates(date) {
      if (this.minDate && this.maxDate) {
        return date >= this.minDate && date <= this.maxDate;
      }

      if (this.minDate && !this.maxDate) {
        return date >= this.minDate;
      }

      if (!this.minDate && this.maxDate) {
        return date <= this.maxDate;
      }

      return true;
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/quasar.variables.scss";

.q-date__view {
  padding: 0px !important;
}

.q-date__navigation {
  background-color: $primary;
  color: white;
  padding: 8px;
}

.q-date__calendar-weekdays,
.q-date__calendar-days-container {
  padding: 8px 8px 0px 8px;
}
</style>
