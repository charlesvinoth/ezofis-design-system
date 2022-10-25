<template>
  <div>
    <!-- actions -->

    <Actions
      :columns="columns"
      :selected-rows="selectedRows"
      @clear="deSelectAllRows"
      @search="searchRows"
    ></Actions>

    <!-- ... -->

    <!-- table -->

    <EzScrollbar class="card q-my-lg">
      <table class="table" :class="separator">
        <thead>
          <tr>
            <!-- select all -->

            <th
              class="cursor-pointer text-center q-pa-sm"
              style="width: 36px"
              @click="areAllRowsSelected ? deSelectAllRows() : selectAllRows()"
            >
              <q-icon
                :name="
                  areAllRowsSelected
                    ? 'mdi-checkbox-marked-circle'
                    : 'mdi-checkbox-blank-circle-outline'
                "
                :color="areAllRowsSelected ? 'secondary' : 'gray-2'"
                size="20px"
              ></q-icon>
            </th>

            <!-- ... -->

            <!-- columns -->

            <th
              v-for="column in columns"
              :key="column.id"
              class="label-1 text-uppercase text-weight-bold q-pa-sm cursor-pointer"
              :class="
                getSortIcon(column.name) === 'unfold_more'
                  ? 'text-gray-5'
                  : 'text-secondary'
              "
              @click="setSortData(column.name)"
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
            <td
              v-for="column in columns.length + 1"
              :key="column"
              class="q-pa-sm"
            >
              <q-skeleton class="bg-gray-3" animation="wave" type="text" />
            </td>
          </tr>
        </tbody>

        <!-- ... -->

        <tbody v-else>
          <tr
            v-for="row in _rows"
            :key="row.id"
            class="hover"
            :class="{ 'bg-gray-2': isRowSelected(row.id) }"
            @click="handleRowClick(row.id)"
          >
            <!-- select -->

            <td
              class="cursor-pointer text-center q-pa-sm"
              style="width: 36px"
              @click="selectRow(row.id)"
            >
              <q-icon
                :name="
                  isRowSelected(row.id)
                    ? 'mdi-checkbox-marked-circle'
                    : 'mdi-checkbox-blank-circle-outline'
                "
                :color="isRowSelected(row.id) ? 'secondary' : 'gray-2'"
                size="20px"
              ></q-icon>
            </td>

            <!-- ... -->

            <!-- columns -->

            <td
              v-for="column in columns"
              :key="column.id"
              class="text-2 text-gray-10 q-pa-sm"
            >
              <slot :name="column.name" :value="row[column.name]">
                {{ row[column.name] }}
              </slot>
            </td>

            <!-- ... -->
          </tr>
        </tbody>
      </table>
    </EzScrollbar>

    <!-- ... -->

    <!-- pagination -->

    <EzPagination
      class="bg-white"
      :current-page="currentPage"
      :items-per-page="rowsPerPage"
      :total-items="_totalRows"
      :no-label="noPaginationLabel"
      @goto="gotoPage"
      @change="changeRowsPerPage"
    ></EzPagination>

    <!-- ... -->
  </div>
</template>

<script>
import { sortBy } from "lodash";

const EzScrollbar = () => import("@/library/components/ez-scrollbar/index");
const EzPagination = () => import("@/library/components/ez-pagination/index");

const Actions = () => import("./components/actions");

export default {
  name: "EzTable",

  components: { EzScrollbar, EzPagination, Actions },

  props: {
    columns: {
      type: Array,
      default: () => [],
    },

    rows: {
      type: Array,
      default: () => [],
    },

    separator: {
      type: String,
      default: "cell", // cell || horizontal || vertical
      validator: function (value) {
        return ["cell", "horizontal", "vertical"].includes(value);
      },
    },

    totalRows: {
      type: Number,
      default: 0,
    },

    noPaginationLabel: {
      type: Boolean,
      default: false,
    },

    fetchingData: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      sortBy: "",
      sortOrder: "",
      selectedRows: [],
      currentPage: 1,
      rowsPerPage: 5,
      searchFor: "",
    };
  },

  computed: {
    _totalRows() {
      return this.totalRows || this.filteredRows.length;
    },

    rowFrom() {
      return (this.currentPage - 1) * this.rowsPerPage;
    },

    rowTo() {
      return this.currentPage * this.rowsPerPage > this._totalRows
        ? this._totalRows
        : this.currentPage * this.rowsPerPage;
    },

    filteredRows() {
      const rows = this.rows.filter((row) => {
        const column = Object.values(row);
        const _column = column.toString().toLowerCase();
        const value = this.searchFor.toLowerCase();

        return _column.includes(value);
      });

      return rows;
    },

    _rows() {
      const rows = this.getCurrentPageRows();
      return this.sortRows(rows);
    },

    areAllRowsSelected() {
      return this.selectedRows.length === this.rows.length;
    },
  },

  methods: {
    setSortData(columnName) {
      if (this.sortBy !== columnName) {
        this.sortOrder = "ASC";
        this.sortBy = columnName;
        return;
      }

      const switchOrder = {
        "": "ASC",
        ASC: "DESC",
        DESC: "",
      };
      this.sortOrder = switchOrder[this.sortOrder];
    },

    getSortIcon(columnName) {
      const icon = {
        "": "unfold_more",
        ASC: "north",
        DESC: "south",
      };

      if (this.sortBy !== columnName) return icon[""];
      else return icon[this.sortOrder];
    },

    sortRows(rows) {
      const sortedRows = sortBy(rows, this.sortBy);

      if (this.sortOrder === "ASC") return sortedRows;
      if (this.sortOrder === "DESC") return sortedRows.reverse();
      else return rows;
    },

    getCurrentPageRows() {
      if (this.rowTo <= this.filteredRows.length)
        return this.filteredRows.slice(this.rowFrom, this.rowTo);

      this.$emit("fetch", { rowFrom: this.rowFrom, rowTo: this.rowTo });
      return [];
    },

    isRowSelected(rowId) {
      return this.selectedRows.includes(rowId);
    },

    selectRow(rowId) {
      const idx = this.selectedRows.indexOf(rowId);

      if (idx >= 0) this.selectedRows.splice(idx, 1);
      else this.selectedRows.push(rowId);
    },

    deSelectAllRows() {
      this.selectedRows = [];
    },

    selectAllRows() {
      this.deSelectAllRows();
      this.rows.forEach((row) => this.selectedRows.push(row.id));
    },

    handleRowClick(rowId) {
      this.$emit("click", rowId);
    },

    gotoPage(page) {
      this.currentPage = page;
    },

    changeRowsPerPage(noOfRows) {
      this.currentPage = 1;
      this.rowsPerPage = noOfRows;
    },

    searchRows(searchFor) {
      this.searchFor = searchFor;
    },
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

.horizontal tr,
.cell tr {
  border-bottom: 1px solid $gray-2;
}

.horizontal tbody tr:last-child,
.cell tbody tr:last-child {
  border-bottom: none;
}

.vertical th,
.vertical td,
.cell th,
.cell td {
  border-right: 1px solid $gray-2;
}

.vertical th:last-child,
.vertical td:last-child,
.cell th:last-child,
.cell td:last-child {
  border-right: none;
}
</style>
