<template>
  <EzField
    no-padding
    :label="label"
    :hint="hint"
    :error="_error"
    :description="description"
    :is-mandatory="isMandatory"
    :is-disabled="isDisabled"
    :is-focused="isFocused"
    :show-info-btn="showInfoBtn"
    @info="(e) => $emit('info', e)"
    @clear="handleClear"
  >
    <template #default>
      <div class="row items-center">
        <!-- decrease -->

        <div
          v-ripple
          class="col-auto spinner left"
          :class="
            model === min ? 'no-pointer-events disabled' : 'cursor-pointer'
          "
          @click="decrease"
        >
          <q-icon name="eva-minus" size="20px"></q-icon>
        </div>

        <!-- ... -->

        <!-- input -->

        <div class="col">
          <input
            v-model.number="model"
            type="number"
            :disabled="isDisabled"
            class="text-gray-10 text-center"
            @focus="handleFocus"
            @blur="handleBlur"
            @input="validate"
          />
        </div>

        <!-- ... -->

        <!-- increase -->

        <div
          v-ripple
          class="col-auto spinner right"
          :class="
            model === max ? 'no-pointer-events disabled' : 'cursor-pointer'
          "
          @click="increase"
        >
          <q-icon name="eva-plus" size="20px"></q-icon>
        </div>

        <!-- ... -->
      </div>
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
      type: Number,
      default: 0,
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

    min: {
      type: Number,
      default: 0,
    },

    max: {
      type: Number,
      default: 100,
    },
  },

  data() {
    return {
      model: "",
      isFocused: false,
      validationError: "",
    };
  },

  computed: {
    _error() {
      return this.validationError || this.error;
    },
  },

  watch: {
    value: {
      immediate: true,
      handler: function () {
        this.model = this.value || this.min;
      },
    },
  },

  methods: {
    emitValue() {
      this.$emit("input", this.model);
    },

    handleClear() {
      this.model = 0;
      this.emitValue();
    },

    handleFocus() {
      this.isFocused = true;
    },

    handleBlur() {
      this.isFocused = false;
    },

    increase() {
      if (this.model < this.max) {
        this.model++;
        this.emitValue();
      }
    },

    decrease() {
      if (this.model > this.min) {
        this.model--;
        this.emitValue();
      }
    },

    validate() {
      if (this.model < this.min || this.model > this.max) {
        this.validationError = `enter a value between ${this.min} and ${this.max}`;
        this.$emit("input", 0);
      } else {
        this.validationError = "";
        this.emitValue();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/quasar.variables.scss";

.spinner {
  height: 38px;
  width: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $gray-2;
  color: gray-7;
  position: relative;
}

.spinner.right {
  border-left: 1px solid $gray-3;
}

.spinner.left {
  border-right: 1px solid $gray-3;
}
</style>
