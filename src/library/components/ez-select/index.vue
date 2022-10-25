<template>
  <EzField
    ref="control"
    :label="label"
    :hint="hint"
    :error="error"
    :description="description"
    :is-mandatory="isMandatory"
    :is-disabled="isDisabled"
    :is-focused="isFocused"
    :show-info-btn="showInfoBtn"
    :show-clear-btn="!Boolean(placeholder)"
    @info="(e) => $emit('info', e)"
    @clear="handleClear"
    @click="showOptions"
  >
    <template #default>
      <div class="row q-py-xs">
        <!-- selected -->

        <div v-if="isMultiple" class="row items-center q-col-gutter-xs">
          <div v-for="option in model" :key="option" class="col-auto">
            <div
              class="rounded-borders bg-gray-2 border border-gray-3 q-pl-sm q-py-xs row items-center"
            >
              <div class="text-2 text-gray-10 q-mr-sm">
                {{ mapLabel(option) }}
              </div>

              <q-icon
                name="eva-close"
                color="gray-5"
                size="14px"
                class="q-mr-xs cursor-pointer"
                @click="handleClick(option)"
              ></q-icon>
            </div>
          </div>
        </div>

        <template v-else>
          <div class="col-auto">{{ mapLabel(model) }}</div>
        </template>

        <!-- ... -->

        <!-- filter -->

        <div class="col">
          <input
            v-model="filter"
            :placeholder="placeholder"
            :disabled="isDisabled"
            class="text-gray-10"
            @focus="handleFocus"
            @blur="handleBlur"
            @keypress.enter="addNew"
          />
        </div>

        <!-- ... -->
      </div>

      <!-- options -->

      <q-menu
        v-model="optionPicker"
        :target="$refs.control"
        fit
        no-focus
        no-parent-event
        transition-show="jump-down"
        transition-hide="jump-up"
        content-class="q-py-sm"
      >
        <template v-if="_options.length">
          <EzScrollbar height="175px">
            <div
              v-for="option in _options"
              :key="option.id"
              class="q-pa-sm rounded-borders hover text-3"
              :class="
                isSelected(option.value)
                  ? 'text-secondary text-weight-bold'
                  : 'text-gray-10'
              "
              @click="handleClick(option.value)"
            >
              {{ option.label }}
            </div>
          </EzScrollbar>
        </template>

        <div v-else class="q-pa-sm text-gray-5 text-3 text-center">
          {{ addNewOption ? 'Press "Enter" to add' : "No results found" }}
        </div>
      </q-menu>

      <!-- ... -->
    </template>

    <template #action>
      <!-- indicator -->

      <div class="col-auto q-mr-xs">
        <q-icon
          name="expand_more"
          color="gray-5"
          size="20px"
          :class="optionPicker ? 'active' : 'inactive'"
        ></q-icon>
      </div>

      <!-- ... -->
    </template>
  </EzField>
</template>

<script>
import { sortBy, toLower, isArray, isString, isNumber } from "lodash";

const EzField = () => import("@/library/components/ez-field/index.vue");
const EzScrollbar = () => import("@/library/components/ez-scrollbar/index");

export default {
  name: "EzSelect",

  components: { EzField, EzScrollbar },

  props: {
    value: {
      type: [String, Number, Array],
      default: null,
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

    options: {
      type: Array,
      default: () => [],
    },

    isMultiple: {
      type: Boolean,
      default: false,
    },

    addNewOption: {
      type: Boolean,
      default: false,
    },

    showLabel: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      model: "",
      filter: "",
      isFocused: false,
      optionPicker: false,
      optionsCopy: [],
    };
  },

  computed: {
    placeholder() {
      if (this.isMultiple) {
        return this.model && this.model.length ? "" : "Select";
      } else {
        return this.model ? "" : "Select";
      }
    },

    _options() {
      const result = this.filter
        ? this.optionsCopy.filter((option) =>
            toLower(option.label).includes(toLower(this.filter))
          )
        : this.optionsCopy;

      return sortBy(result, "label");
    },
  },

  watch: {
    value: {
      immediate: true,
      handler: function () {
        if (this.isMultiple) {
          if (isArray(this.value)) this.model = this.value;
          else console.error("Invalid prop type");
        } else {
          if (isString(this.value) || isNumber(this.value))
            this.model = this.value;
          else console.error("Invalid prop type");
        }
      },
    },

    options: {
      immediate: true,
      handler: function () {
        this.optionsCopy = this.options;
      },
    },

    optionPicker() {
      this.isFocused = this.optionPicker;
    },

    filter() {
      this.optionPicker = Boolean(this.filter);
    },

    model() {
      this.emitValue();
    },
  },

  methods: {
    emitValue() {
      this.$emit("input", this.model);
    },

    handleClear() {
      this.reset();
      this.model = null;
      this.emitValue();
    },

    handleFocus() {
      this.isFocused = true;
    },

    handleBlur() {
      this.isFocused = this.optionPicker;
    },

    showOptions() {
      this.optionPicker = true;
    },

    hideOptions() {
      this.optionPicker = false;
    },

    reset() {
      this.hideOptions();
      this.filter = "";
    },

    isSelected(option) {
      if (this.isMultiple) {
        if (!this.model || !this.model.length) return false;
        else return this.model.includes(option);
      } else {
        return this.model === option;
      }
    },

    handleClick(option) {
      if (this.isMultiple) {
        const idx = this.model.indexOf(option);

        if (idx < 0) {
          this.model.push(option);
        } else {
          this.model.splice(idx, 1);
        }
      } else {
        this.model = option;
        this.reset();
      }
    },

    addNew() {
      this.optionsCopy.push({
        id: this.$nano.id(),
        label: this.filter,
        value: this.filter,
      });
      this.handleClick(this.filter);
      this.filter = "";
    },

    mapLabel(optionValue) {
      if (!this.showLabel) return optionValue;
      else if (!optionValue) return "";
      else
        return this.options.find((option) => option.value === optionValue)
          .label;
    },
  },
};
</script>

<style lang="scss" scoped>
.active {
  transition: transform 0.3s;
  transform: rotate(180deg);
}

.inactive {
  transition: transform 0.3s;
}
</style>
