<template>
  <q-menu>
    <div class="q-pa-md" style="width: 240px">
      <!-- sort column -->

      <div class="label-1 text-gray-5 text-uppercase q-mb-sm">Columns</div>

      <div class="row items-center q-col-gutter-sm">
        <div v-for="column in _columns" :key="column.id" class="col-auto">
          <EzChip
            :label="column.name"
            :is-active="sortColumn === column.name"
            @click="setSortColumn(column.name)"
          ></EzChip>
        </div>
      </div>

      <!-- ... -->

      <!-- sort order -->

      <div class="label-1 text-gray-5 text-uppercase q-mt-lg q-mb-sm">
        Order
      </div>

      <div class="row items-center q-col-gutter-sm">
        <div
          v-for="order in sortOrders"
          :key="order.id"
          class="col-auto text-capitalize"
        >
          <EzChip
            :label="order.label"
            :is-active="sortOrder === order.value"
            active-color="deep-orange"
            @click="setSortOrder(order.value)"
          ></EzChip>
        </div>
      </div>

      <!-- ... -->
    </div>
  </q-menu>
</template>

<script>
const EzChip = () => import("@/library/components/ez-chip/index");

export default {
  name: "Sort",

  components: { EzChip },

  props: {
    columns: {
      type: Array,
      default: () => [],
    },

    sortColumn: {
      type: String,
      default: "",
    },

    sortOrder: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      sortOrders: [
        { id: this.$nano.id(), label: "ASC", value: "ASC" },
        { id: this.$nano.id(), label: "DESC", value: "DESC" },
        { id: this.$nano.id(), label: "NONE", value: "" },
      ],
    };
  },

  computed: {
    _columns() {
      return this.columns.filter((column) => column.isVisible);
    },
  },

  methods: {
    setSortColumn(columnName) {
      this.$emit("setSortColumn", columnName);
    },

    setSortOrder(order) {
      this.$emit("setSortOrder", order);
    },
  },
};
</script>

<style lang="scss" scoped></style>
