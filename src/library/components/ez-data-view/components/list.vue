<template>
  <EzScrollbar class="card q-mt-sm">
    <table class="table">
      <thead>
        <tr :class="{ 'no-pointer-events': fetchingData }">
          <th v-if="showStatusIndicator" style="width: 3px"></th>

          <!-- select all -->

          <th
            class="cursor-pointer q-pa-sm"
            style="width: 36px"
            @click="toggleRows"
          >
            <q-icon
              :name="
                areAllRowsSelected
                  ? 'mdi-checkbox-marked-circle'
                  : 'mdi-checkbox-blank-circle-outline'
              "
              :color="areAllRowsSelected ? 'secondary' : 'gray-3'"
              size="20px"
            ></q-icon>
          </th>

          <!-- ... -->

          <!-- avatar column -->

          <th
            v-if="hasAvatarColumn"
            class="label-1 text-gray-5 text-uppercase text-weight-medium q-pa-sm"
            style="width: 60px"
          >
            avatar
          </th>

          <!-- ... -->

          <!-- columns -->

          <th
            v-for="column in visibleColumns"
            :key="column.id"
            class="label-1 text-gray-5 text-uppercase text-weight-medium q-pa-sm cursor-pointer"
            :class="getSortIconColor(column.name)"
            @click="setSortColumn(column.name)"
          >
            <div class="row items-center">
              <div class="col non-selectable">{{ column.label }}</div>

              <div class="col-auto q-ml-xs">
                <q-icon :name="getSortIcon(column.name)" size="16px"></q-icon>
              </div>
            </div>
          </th>

          <!-- ... -->
        </tr>
      </thead>

      <!-- fetching data -->

      <tbody v-if="fetchingData">
        <tr v-for="row in rowsPerPage" :key="row">
          <td v-for="column in _columns" :key="column" class="q-pa-sm">
            <q-skeleton class="bg-gray-3" animation="blink" type="text" />
          </td>
        </tr>
      </tbody>

      <!-- ... -->

      <!-- fetched data -->

      <template v-else>
        <tbody v-for="group in groups" :key="group.id">
          <!-- group name -->

          <tr
            v-if="group.name"
            @click="group.isMinimized = !group.isMinimized"
            class="hover"
          >
            <td :colspan="colSpan" class="q-pa-sm">
              <div class="row items-center">
                <div
                  class="label-1 text-deep-orange text-weight-bold text-uppercase"
                >
                  {{ group.name }}
                </div>

                <!-- indicator -->

                <div class="col-auto q-ml-sm">
                  <q-icon
                    name="expand_more"
                    color="gray-5"
                    size="16px"
                    :class="!group.isMinimized ? 'active' : 'inactive'"
                  ></q-icon>
                </div>

                <!-- ... -->
              </div>
            </td>
          </tr>

          <!-- ... -->

          <!-- group rows -->

          <template v-if="!group.isMinimized">
            <tr
              v-for="row in rows[group.name]"
              :key="row.id"
              class="hover"
              @click="handleRowClick(row.id)"
            >
              <!-- status indicator -->

              <td
                v-if="showStatusIndicator"
                :class="getStatusIndicatorColor(row.status)"
                style="width: 3px"
              ></td>

              <!-- ... -->

              <!-- select -->

              <td class="text-center" @click="selectRow(row.id)">
                <q-icon
                  :name="
                    isRowSelected(row.id)
                      ? 'mdi-checkbox-marked-circle'
                      : 'mdi-checkbox-blank-circle-outline'
                  "
                  :color="getRowSelectorColor(row.status, row.id)"
                  size="20px"
                ></q-icon>
              </td>

              <!-- ... -->

              <!-- avatar column -->

              <td v-if="hasAvatarColumn" class="q-pa-xs text-center">
                <q-avatar size="24px">
                  <img :src="row.avatar" alt="avatar" />
                </q-avatar>
              </td>

              <!-- ... -->

              <!-- columns -->

              <td
                v-for="column in visibleColumns"
                :key="column.id"
                class="text-2 text-gray-10 q-pa-sm"
              >
                <slot :name="column.name" :value="row[column.name]">
                  {{ row[column.name] }}
                </slot>
              </td>

              <!-- ... -->
            </tr>
          </template>

          <!-- ... -->
        </tbody>
      </template>

      <!-- ... -->
    </table>
  </EzScrollbar>
</template>

<script>
const EzScrollbar = () => import("@/library/components/ez-scrollbar/index");

export default {
  name: "List",

  components: { EzScrollbar },

  props: {
    columns: {
      type: Array,
      default: () => [],
    },

    rows: {
      type: [Array, Object],
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

    selectedRows: {
      type: Array,
      default: () => [],
    },

    areAllRowsSelected: {
      type: Boolean,
      default: false,
    },

    fetchingData: {
      type: Boolean,
      default: false,
    },

    rowsPerPage: {
      type: Number,
      default: 5,
    },

    hasAvatarColumn: {
      type: Boolean,
      default: false,
    },

    showStatusIndicator: {
      type: Boolean,
      default: false,
    },

    statusIndicatorColors: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      activeRow: "",
      groups: [],
    };
  },

  computed: {
    visibleColumns() {
      return this.columns.filter((column) => column.isVisible);
    },

    colSpan() {
      return this.columns.length + 1;
    },

    _columns() {
      let totalColumns = this.visibleColumns.length + 1;

      if (this.hasAvatarColumn) totalColumns += 1;

      return totalColumns;
    },
  },

  watch: {
    rows: {
      immediate: true,
      deep: true,
      handler: function () {
        const groups = Object.keys(this.rows);

        this.groups = groups.map((group) => ({
          id: this.$nano.id(),
          name: group,
          isMinimized: false,
        }));
      },
    },
  },

  methods: {
    getSortIcon(columnName) {
      const icon = {
        "": "unfold_more",
        ASC: "north",
        DESC: "south",
      };

      if (this.sortColumn !== columnName) return icon[""];
      else return icon[this.sortOrder];
    },

    getSortIconColor(columnName) {
      return this.getSortIcon(columnName) === "unfold_more"
        ? "text-gray-5"
        : "text-secondary";
    },

    getStatusIndicatorColor(status) {
      const color = this.statusIndicatorColors[status] || "gray-5";
      return `bg-${color}`;
    },

    getRowSelectorColor(status, rowId) {
      if (!this.showStatusIndicator) {
        return this.isRowSelected(rowId) ? "secondary" : "gray-3";
      } else {
        return this.statusIndicatorColors[status] || "gray-3";
      }
    },

    isRowSelected(rowId) {
      return this.selectedRows.includes(rowId);
    },

    /* events */

    setSortColumn(columnName) {
      this.$emit("setColumn", columnName);
    },

    handleRowClick(rowId) {
      this.$emit("rowClick", rowId);
    },

    toggleRows() {
      this.$emit("toggleRows");
    },

    selectRow(rowId) {
      this.$emit("select", rowId);
    },

    /* ... */
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/quasar.variables.scss";

.table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  white-space: nowrap;
}

.table tr {
  border-bottom: 1px solid $gray-2;
}

.table tbody:last-child tr:last-child {
  border-bottom: none;
}

.table th,
.table td {
  border-right: 1px solid $gray-2;
}

.table th:first-child,
.table th:last-child,
.table td:last-child {
  border-right: none;
}

.active {
  transition: transform 0.3s;
  transform: rotate(180deg);
}

.inactive {
  transition: transform 0.3s;
}
</style>
