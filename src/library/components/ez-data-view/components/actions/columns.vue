<template>
  <EzModal
    :value="value"
    title="column wizard"
    width="640px"
    @input="handleInput"
  >
    <div class="q-px-md q-py-lg">
      <!-- hint -->

      <div
        class="text-2 text-gray-7 text-justify q-mb-md"
        style="line-height: 20px"
      >
        The Column wizard allows you to change the visibility and the order of
        the columns as per your need. You can click to toggle the column
        visibility and you can Drag & Drop to reorder the columns.
      </div>

      <!-- ... -->

      <!-- columns -->

      <div class="label-1 text-gray-5 text-uppercase q-mb-sm">Columns</div>

      <Draggable
        v-model="clonedColumns"
        v-bind="dragOptions"
        class="row items-center q-col-gutter-sm"
      >
        <div
          v-for="(column, idx) in clonedColumns"
          :key="column.id"
          class="col-auto"
        >
          <EzChip
            :label="`${idx + 1}. ${column.name}`"
            :is-active="column.isVisible"
            @click="toggleColumnVisibility(column.id)"
          ></EzChip>
        </div>
      </Draggable>

      <!-- ... -->
    </div>
  </EzModal>
</template>

<script>
import Draggable from "vuedraggable";
import { cloneDeep } from "lodash";

const EzModal = () => import("@/library/components/ez-modal/index");
const EzChip = () => import("@/library/components/ez-chip/index");

export default {
  name: "Columns",

  components: { Draggable, EzModal, EzChip },

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
      clonedColumns: [],
    };
  },

  computed: {
    visibleColumns() {
      return this.columns.filter((column) => column.isVisible);
    },

    hiddenColumns() {
      return this.columns.filter((column) => !column.isVisible);
    },

    dragOptions() {
      return {
        animation: 200,
        group: "columns",
        disabled: false,
        ghostClass: "ghost",
      };
    },
  },

  watch: {
    columns: {
      immediate: true,
      deep: true,
      handler: function () {
        this.clonedColumns = cloneDeep(this.columns);
      },
    },

    clonedColumns: {
      deep: true,
      handler: function () {
        this.clonedColumns.forEach((column, index) => {
          const idx = this.columns.findIndex(
            (_column) => _column.id === column.id
          );

          this.columns[idx].sequence = index + 1;
          this.columns[idx].isVisible = column.isVisible;
        });

        this.saveColumnPreference();
      },
    },
  },

  methods: {
    handleInput() {
      this.$emit("input", !this.value);
    },

    toggleColumnVisibility(columnId) {
      const idx = this.clonedColumns.findIndex(
        (column) => column.id === columnId
      );
      this.clonedColumns[idx].isVisible = !this.clonedColumns[idx].isVisible;
    },

    saveColumnPreference() {
      const preference = this.clonedColumns.map((column) => ({
        name: column.name,
        sequence: column.sequence,
        isVisible: column.isVisible,
      }));

      this.$emit("saveColumnPreference", preference);
    },
  },
};
</script>

<style lang="scss" scoped>
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>
