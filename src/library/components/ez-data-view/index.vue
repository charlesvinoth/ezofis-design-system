<template>
  <div>
    <div
      v-if="fetchingData"
      class="card q-mb-md row items-center justify-center"
      style="height: 38px"
    >
      <div class="row items-center">
        <q-icon
          name="eva-cloud-download-outline"
          color="secondary"
          size="20px"
        ></q-icon>

        <div
          class="label-1 text-weight-bold text-uppercase text-secondary col-auto q-mx-sm"
        >
          Fetching data ... Please wait ...
        </div>
      </div>
    </div>

    <!-- actions -->

    <Actions
      v-else
      :columns="_columns"
      :view="activeView"
      :search-term="searchTerm"
      :selected-items="selectedRows"
      :sort-column="sortColumn"
      :sort-order="sortOrder"
      :group-column="groupColumn"
      class="q-mb-md"
      @reload="handleReload"
      @clear="deSelectAllRows"
      @search="setSearchTerm"
      @toggle="toggleView"
      @print="printRows"
      @edit="editRow"
      @delete="deleteRow"
      @setSortColumn="setSortData"
      @setSortOrder="setSortOrder"
      @setGroupColumn="setGroupColumn"
      @clearFilters="clearFilters"
      @applyFilters="applyFilters"
      @saveColumnPreference="saveColumnPreference"
    >
      <template #custom-actions>
        <slot name="custom-actions" :value="selectedItems"></slot>
      </template>
    </Actions>

    <!-- ... -->

    <!-- filters -->

    <div>
      <div class="row items-center q-col-gutter-sm">
        <!-- search -->

        <div v-if="searchTerm" class="col-auto">
          <EzChip
            :label="`Search for: ${searchTerm}`"
            is-removable
            is-active
            active-color="teal"
            @remove="clearSearch"
          ></EzChip>
        </div>

        <!-- ... -->

        <!-- sort -->

        <div v-if="sortOrder" class="col-auto">
          <EzChip
            :label="`Sort by: ${sortColumn} (${
              sortOrder === 'ASC' ? 'A to Z' : 'Z to A'
            })`"
            is-removable
            is-active
            active-color="indigo"
            @remove="clearSort"
          ></EzChip>
        </div>

        <!-- ... -->

        <!-- group -->

        <div v-if="groupColumn" class="col-auto">
          <EzChip
            :label="`Group by: ${groupColumn}`"
            is-removable
            is-active
            active-color="deep-orange"
            @remove="clearGroup"
          ></EzChip>
        </div>

        <!-- ... -->

        <!-- filters -->

        <template v-if="filters.length">
          <div
            v-for="(filter, idx) in filters"
            :key="filter.id"
            class="col-auto"
          >
            <EzChip
              :label="`${filter.column} ${filter.condition} ${filter.value}`"
              is-removable
              is-active
              @remove="clearFilter(idx)"
            ></EzChip>
          </div>
        </template>

        <!-- ... -->
      </div>
    </div>

    <!-- ... -->

    <!-- grid -->

    <Grid
      v-if="activeView === 'grid'"
      :columns="_columns"
      :rows="_rows"
      :sort-column="sortColumn"
      :sort-order="sortOrder"
      :selected-rows="selectedRows"
      :fetching-data="fetchingData"
      :rows-per-page="rowsPerPage"
      :has-avatar-column="hasAvatarColumn"
      :are-all-rows-selected="areAllRowsSelected"
      :show-status-indicator="showStatusIndicator"
      :status-indicator-colors="statusIndicatorColors"
      @select="selectRow"
      @setColumn="setSortData"
      @rowClick="handleRowClick"
      @toggleRows="toggleRows"
    >
      <template v-for="column in columns" v-slot:[column.name]="{ value }">
        <div :key="column.id">
          <slot :name="column.name" :value="value">
            {{ value }}
          </slot>
        </div>
      </template>
    </Grid>

    <!-- ... -->

    <!-- list -->

    <List
      v-if="activeView === 'list'"
      :columns="_columns"
      :rows="_rows"
      :selected-rows="selectedRows"
      :rows-per-page="rowsPerPage"
      :are-all-rows-selected="areAllRowsSelected"
      :sort-column="sortColumn"
      :sort-order="sortOrder"
      :fetching-data="fetchingData"
      :has-avatar-column="hasAvatarColumn"
      :show-status-indicator="showStatusIndicator"
      :status-indicator-colors="statusIndicatorColors"
      @select="selectRow"
      @setColumn="setSortData"
      @rowClick="handleRowClick"
      @toggleRows="toggleRows"
    >
      <template v-for="column in columns" v-slot:[column.name]="{ value }">
        <div :key="column.id">
          <slot :name="column.name" :value="value">
            {{ value }}
          </slot>
        </div>
      </template>
    </List>

    <!-- ... -->

    <!-- pagination -->

    <EzPagination
      :current-page="currentPage"
      :items-per-page="rowsPerPage"
      :total-items="_totalRows"
      :item-from="rowFrom"
      :item-to="rowTo"
      class="q-mt-md"
      :class="{ 'no-pointer-events': fetchingData }"
      @goto="gotoPage"
      @change="changeRowsPerPage"
    ></EzPagination>

    <!-- ... -->
  </div>
</template>

<script>
import { sortBy, groupBy } from "lodash";

const EzChip = () => import("@/library/components/ez-chip/index");
const EzPagination = () => import("@/library/components/ez-pagination/index");

const Actions = () => import("./components/actions/index");
const Grid = () => import("./components/grid");
const List = () => import("./components/list");

export default {
  name: "EzDataView",

  components: { EzChip, Actions, Grid, List, EzPagination },

  props: {
    columns: {
      type: Array,
      default: () => [],
    },

    rows: {
      type: Array,
      default: () => [],
    },

    totalRows: {
      type: Number,
      required: true,
    },

    fetchingData: {
      type: Boolean,
      default: false,
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
      activeView: "list",
      sortColumn: "",
      sortOrder: "",
      selectedRows: [],
      searchTerm: "",
      currentPage: 1,
      rowsPerPage: 10,
      groupColumn: "",
      filters: [],
    };
  },

  computed: {
    _columns() {
      return sortBy(this.columns, "sequence");
    },

    _rows() {
      let rows = [];

      rows = this.getFilteredRows();
      rows = this.getSortedRows(rows);
      rows = this.getCurrentPageRows(rows);
      rows = this.groupRows(rows);

      return rows;
    },

    areAllRowsSelected() {
      if (!this.rows.length) return false;
      else return this.selectedRows.length === this.rows.length;
    },

    _totalRows() {
      return this.searchTerm ? this.getFilteredRows().length : this.totalRows;
    },

    rowFrom() {
      if (!this._totalRows) return 0;
      else return (this.currentPage - 1) * this.rowsPerPage;
    },

    rowTo() {
      if (!this._totalRows) {
        return 0;
      } else {
        return this.currentPage * this.rowsPerPage > this._totalRows
          ? this._totalRows
          : this.currentPage * this.rowsPerPage;
      }
    },
  },

  methods: {
    /* toggle view */

    toggleView(view) {
      this.activeView = view;
    },

    /* ... */

    /* select/deselect rows */

    deSelectAllRows() {
      this.selectedRows = [];
    },

    selectAllRows() {
      this.deSelectAllRows();
      this.rows.forEach((row) => this.selectedRows.push(row.id));
    },

    selectRow(rowId) {
      const idx = this.selectedRows.indexOf(rowId);

      if (idx >= 0) this.selectedRows.splice(idx, 1);
      else this.selectedRows.push(rowId);
    },

    toggleRows() {
      this.areAllRowsSelected ? this.deSelectAllRows() : this.selectAllRows();
    },

    /* ... */

    /* search rows */

    setSearchTerm(searchTerm) {
      this.clearPagination();
      this.searchTerm = searchTerm;
    },

    getFilteredRows() {
      const rows = this.rows.filter((row) => {
        const column = Object.values(row);
        const _column = column.toString().toLowerCase();
        const value = this.searchTerm.toLowerCase();

        return _column.includes(value);
      });

      return rows;
    },

    clearSearch() {
      this.searchTerm = "";
    },

    /* ... */

    /* filter rows */

    clearFilters() {
      this.filters = [];
    },

    clearFilter(filterIdx) {
      this.filters.splice(filterIdx, 1);
    },

    applyFilters(filters) {
      this.filters = filters;
      this.emitFilters();
    },

    /* ... */

    /* sort rows */

    setSortData(columnName) {
      if (this.sortColumn !== columnName) {
        this.sortOrder = "ASC";
        this.sortColumn = columnName;
        return;
      }

      const switchOrder = {
        "": "ASC",
        ASC: "DESC",
        DESC: "",
      };
      this.sortOrder = switchOrder[this.sortOrder];
    },

    setSortOrder(order) {
      this.sortOrder = order;
    },

    getSortedRows(rows) {
      const sortedRows = sortBy(rows, this.sortColumn);

      if (this.sortOrder === "ASC") return sortedRows;
      else if (this.sortOrder === "DESC") return sortedRows.reverse();
      else return rows;
    },

    clearSort() {
      this.sortColumn = "";
      this.sortOrder = "";
    },

    /* ... */

    /* paginate rows */

    gotoPage(page) {
      this.currentPage = page;
    },

    changeRowsPerPage(noOfRows) {
      this.currentPage = 1;
      this.rowsPerPage = noOfRows;
    },

    getCurrentPageRows(rows) {
      if (this.rowTo > this.rows.length) {
        this.$emit("loadMore");
      } else {
        return rows.slice(this.rowFrom, this.rowTo);
      }
    },

    clearPagination() {
      this.currentPage = 1;
    },

    /* ... */

    /* group rows */

    setGroupColumn(column) {
      this.groupColumn = column;
    },

    groupRows(rows) {
      let groupedRows = {};

      if (!this.groupColumn) groupedRows = { "": rows };
      else groupedRows = groupBy(rows, this.groupColumn);

      return groupedRows;
    },

    clearGroup() {
      this.groupColumn = "";
    },

    /* ... */

    /* print rows */

    printRows() {
      this.$q.sessionStorage.clear();
      this.$q.sessionStorage.set("columns", this._columns);
      this.$q.sessionStorage.set("rows", this._rows);
      this.$router.push({ name: "Print" });
    },

    /* ... */

    /* events */

    handleReload() {
      this.clearPagination();
      this.$emit("reload");
    },

    handleRowClick(rowId) {
      this.$emit("rowClick", rowId);
    },

    editRow() {
      this.$emit("editRow", this.selectedRows[0]);
    },

    deleteRow() {
      this.$emit("deleteRow", this.selectedRows[0]);
    },

    emitFilters() {
      this.$emit("applyFilters", this.filters);
    },

    saveColumnPreference(preference) {
      this.$emit("saveColumnPreference", preference);
    },

    /* ... */
  },
};
</script>

<style lang="scss" scoped></style>
