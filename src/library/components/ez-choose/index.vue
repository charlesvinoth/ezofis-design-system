<template>
  <div :class="{ 'no-pointer-events disabled': isDisabled }">
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

    <div class="row items-center q-col-gutter-sm">
      <!-- option -->

      <div
        v-for="option in _options"
        :key="option.id"
        class="relative-position"
        :class="optionSizeClass"
      >
        <div
          class="field row items-center q-pa-sm"
          :class="getClass(option.id)"
        >
          <!-- check -->

          <div class="col-auto q-mr-sm">
            <q-icon
              :name="
                isSelected(option.value)
                  ? 'mdi-checkbox-marked-circle'
                  : 'mdi-checkbox-blank-circle'
              "
              :color="isSelected(option.value) ? 'secondary' : 'gray-3'"
              size="20px"
            ></q-icon>
          </div>

          <!-- ... -->

          <div class="col q-mr-sm">
            <!-- label -->

            <div
              class="ellipsis text-gray-10 text-3"
              :class="{ 'text-weight-medium': withDescription }"
            >
              {{ option.label }}
            </div>

            <!-- ... -->

            <!-- description -->

            <div v-if="withDescription" class="text-gray-5 text-2">
              {{ option.description }}
            </div>

            <!-- ... -->
          </div>

          <!-- icon -->

          <div v-if="withIcon" class="col-auto">
            <q-avatar :color="`${option.color}-2` || 'secondary-2'" size="40px">
              <q-icon
                :name="option.icon"
                :color="option.color || 'secondary'"
                size="20px"
              ></q-icon>
            </q-avatar>
          </div>

          <!-- ... -->

          <!-- hidden input to imitate radio group or checkbox group  -->

          <input
            v-model="model"
            :type="isMultiple ? 'checkbox' : 'radio'"
            :name="option.label"
            :value="option.value"
            class="absolute-full cursor-pointer"
            style="opacity: 0"
            @focus="focusedOption = option.id"
            @blur="focusedOption = ''"
          />

          <!-- ... -->
        </div>
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
import { sortBy, isArray, isString, isNumber } from "lodash";

const EzLabel = () => import("@/library/components/ez-label/index.vue");
const EzError = () => import("@/library/components/ez-error/index.vue");

export default {
  name: "EzChoose",

  components: {
    EzLabel,
    EzError,
  },

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

    isMultiple: {
      type: Boolean,
      default: false,
    },

    options: {
      type: Array,
      default: () => [],
    },

    optionSizeClass: {
      type: String,
      default: "col",
    },

    withDescription: {
      type: Boolean,
      default: false,
    },

    withIcon: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      model: "",
      focusedOption: "",
    };
  },

  computed: {
    _options() {
      return sortBy(this.options, "label");
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

    model() {
      this.$emit("input", this.model);
    },
  },

  methods: {
    getClass(option) {
      if (this.error) return "field-error";
      if (this.focusedOption === option) return "field-focused";

      return "field-normal";
    },

    isSelected(option) {
      if (this.isMultiple) {
        if (!this.model || !this.model.length) return false;
        else return this.model.includes(option);
      } else {
        return this.model === option;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
