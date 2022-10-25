<template>
  <q-menu>
    <div class="q-pa-md" style="width: 240px">
      <!-- columns -->

      <div class="label-1 text-gray-5 text-uppercase q-mb-sm">Columns</div>

      <div class="row items-center q-col-gutter-sm">
        <div v-for="column in _columns" :key="column.id" class="col-auto">
          <EzChip
            :label="column.name"
            :is-active="groupColumn === column.name"
            @click="setGroupColumn(column.name)"
          ></EzChip>
        </div>

        <EzChip
          label="none"
          :is-active="!groupColumn"
          @click="setGroupColumn('')"
        ></EzChip>
      </div>

      <!-- ... -->
    </div>
  </q-menu>
</template>

<script>
const EzChip = () => import("@/library/components/ez-chip/index");

export default {
  name: "Group",

  components: { EzChip },

  props: {
    columns: {
      type: Array,
      default: () => [],
    },

    groupColumn: {
      type: String,
      default: "",
    },
  },

  computed: {
    _columns() {
      return this.columns.filter(
        (column) => column.isGroupable && column.isVisible
      );
    },
  },

  methods: {
    setGroupColumn(columnName) {
      this.$emit("setGroupColumn", columnName);
    },
  },
};
</script>

<style lang="scss" scoped></style>
