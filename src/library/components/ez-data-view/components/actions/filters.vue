<template>
  <EzModal
    :value="value"
    title="filter wizard"
    width="640px"
    @input="handleInput"
  >
    <div class="q-pa-md">
      <!-- hint -->

      <div
        class="text-2 text-gray-7 text-justify q-mb-md"
        style="line-height: 20px"
      >
        The Filter wizard allows you to filter the data by specifying logical
        conditions based on the data's type. You can have multiple conditions
        and add or remove conditions as per your need.
      </div>

      <!-- ... -->

      <!-- header -->

      <div class="col label-1 text-gray-5 text-uppercase q-mb-sm">Filters</div>

      <div class="row items-center q-mb-sm">
        <div class="col q-mr-sm">
          <EzLabel label="column" is-mandatory></EzLabel>
        </div>

        <div class="col-3 q-mr-sm">
          <EzLabel label="condition" is-mandatory></EzLabel>
        </div>

        <div class="col q-mr-sm">
          <EzLabel label="value" is-mandatory></EzLabel>
        </div>

        <div class="col-auto">
          <q-btn
            v-tooltip="'add filter'"
            round
            flat
            size="sm"
            icon="eva-plus"
            color="secondary"
            @click="addFilter"
          ></q-btn>
        </div>
      </div>

      <!-- ... -->

      <!-- filters -->

      <div
        v-for="(filter, idx) in filters"
        :key="filter.id"
        class="row q-mb-sm"
      >
        <div class="col q-mr-sm">
          <EzSelect
            v-model="filter.column"
            :options="_columns"
            is-mandatory
            :error="showErrors && !filter.column ? 'required' : ''"
          ></EzSelect>
        </div>

        <div class="col-3 q-mr-sm">
          <EzSelect
            v-model="filter.condition"
            :options="getConditions(filter.column)"
            is-mandatory
            :error="showErrors && !filter.condition ? 'required' : ''"
          ></EzSelect>
        </div>

        <div class="col q-mr-sm">
          <EzInput
            v-model="filter.value"
            is-mandatory
            :error="showErrors && !filter.value ? 'required' : ''"
          ></EzInput>
        </div>

        <div class="col-auto">
          <q-btn
            v-tooltip="'remove filter'"
            round
            flat
            size="sm"
            icon="eva-trash-2-outline"
            color="red"
            @click="removeFilter(idx)"
          ></q-btn>
        </div>
      </div>

      <!-- ... -->

      <!-- action -->

      <div class="row items-center justify-end q-mt-lg">
        <EzButton
          label="clear"
          is-flat
          class="q-mr-sm"
          @click="clearFilters"
        ></EzButton>

        <EzButton label="apply" @click="applyFilters"></EzButton>
      </div>

      <!-- ... -->
    </div>
  </EzModal>
</template>

<script>
const EzModal = () => import("@/library/components/ez-modal/index");
const EzLabel = () => import("@/library/components/ez-label/index");
const EzSelect = () => import("@/library/components/ez-select/index");
const EzInput = () => import("@/library/components/ez-input/index");
const EzButton = () => import("@/library/components/ez-button/index.vue");

export default {
  name: "Filters",

  components: { EzModal, EzSelect, EzInput, EzLabel, EzButton },

  props: {
    value: {
      type: Boolean,
      default: false,
    },

    columns: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      conditions: [
        {
          id: this.$nano.id(),
          label: "Contains (⊃)",
          value: "LIKE",
          for: ["STRING", "DATE", "NUMBER", "UNKNOWN"],
        },
        {
          id: this.$nano.id(),
          label: "Equals (=)",
          value: "=",
          for: ["STRING", "DATE", "NUMBER", "UNKNOWN"],
        },
        {
          id: this.$nano.id(),
          label: "Not Equals (!=)",
          value: "!=",
          for: ["STRING", "DATE", "NUMBER", "UNKNOWN"],
        },
        {
          id: this.$nano.id(),
          label: "Greater Than (>)",
          value: ">",
          for: ["DATE", "NUMBER", "UNKNOWN"],
        },
        {
          id: this.$nano.id(),
          label: "Lesser Than (<)",
          value: "<",
          for: ["DATE", "NUMBER", "UNKNOWN"],
        },
        {
          id: this.$nano.id(),
          label: "Greater Than or Equals (<=)",
          value: "<=",
          for: ["DATE", "NUMBER", "UNKNOWN"],
        },
        {
          id: this.$nano.id(),
          label: "Lesser Than or Equals (>=)",
          value: ">=",
          for: ["DATE", "NUMBER", "UNKNOWN"],
        },
      ],
      filters: [],
      showErrors: false,
    };
  },

  computed: {
    _columns() {
      const columns = this.columns.filter((column) => column.isVisible);

      return columns.map((column) => ({
        id: column.id,
        label: column.label,
        value: column.name,
      }));
    },
  },

  watch: {
    value: {
      immediate: true,
      handler: function () {
        this.value && this.addFilter();
      },
    },
  },

  methods: {
    handleInput() {
      this.$emit("input", !this.value);
    },

    getConditions(column) {
      let columnType = "UNKNOWN";

      if (column) {
        columnType = this.columns.find((_column) => _column.name === column)
          .dataType;
      }

      return this.conditions.filter((condition) =>
        condition.for.includes(columnType)
      );
    },

    addFilter() {
      this.filters.push({
        id: this.$nano.id(),
        column: "",
        condition: "",
        value: "",
      });
    },

    removeFilter(idx) {
      this.filters.splice(idx, 1);
    },

    validateFilters() {
      const isValid = this.filters.every(
        (filter) => filter.column && filter.condition && filter.value
      );

      this.showErrors = !isValid;
    },

    applyFilters() {
      this.validateFilters();

      if (!this.showErrors) {
        this.$emit("apply", this.filters);
        this.filters = [];
      }
    },

    clearFilters() {
      this.filters = [];
      this.showErrors = false;
      this.addFilter();
      this.$emit("clear");
    },
  },
};
</script>

<style lang="scss" scoped></style>
