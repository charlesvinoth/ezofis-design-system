<template>
  <div class="card row items-center border-gray-2" style="height: 38px">
    <template v-if="selectedItems.length">
      <div class="col text-2 text-weight-medium q-px-sm text-secondary">
        {{ selectedItems.length }} item(s) selected
      </div>

      <!-- edit -->

      <div
        v-if="selectedItems.length === 1"
        class="border-right"
        :class="_class"
        @click="$emit('edit')"
      >
        <div class="row items-center">
          <q-icon name="eva-edit-2-outline" color="blue-5" size="20px"></q-icon>

          <div class="label-1 text-uppercase text-blue col-auto q-mx-sm">
            Edit
          </div>
        </div>
      </div>

      <!-- ... -->

      <!-- delete -->

      <div
        v-if="selectedItems.length === 1"
        class="border-right"
        :class="_class"
        @click="$emit('delete')"
      >
        <div class="row items-center">
          <q-icon name="eva-trash-2-outline" color="red-5" size="20px"></q-icon>

          <div class="label-1 text-uppercase text-red col-auto q-mx-sm">
            Delete
          </div>
        </div>
      </div>

      <!-- ... -->

      <!-- custom actions -->

      <slot name="custom-actions"></slot>

      <!-- ... -->

      <!-- clear -->

      <div :class="_class" @click="$emit('clear')">
        <div class="row items-center">
          <q-icon name="eva-close" color="gray-5" size="20px"></q-icon>

          <div class="label-1 text-uppercase text-gray-8 col-auto q-mx-sm">
            Clear
          </div>
        </div>
      </div>

      <!-- ... -->
    </template>

    <template v-else>
      <!-- reload -->

      <div class="border-right" :class="_class" @click="$emit('reload')">
        <div class="row items-center">
          <q-icon name="eva-refresh" color="gray-5" size="20px"></q-icon>

          <div
            class="label-1 text-uppercase text-gray-8 col-auto q-mx-sm gt-sm"
          >
            Reload
          </div>
        </div>
      </div>

      <!-- ... -->

      <!-- sort -->

      <div class="border-right" :class="_class">
        <div class="row items-center">
          <q-icon name="sort" color="gray-5" size="20px"></q-icon>

          <div
            class="label-1 text-uppercase text-gray-8 col-auto q-mx-sm gt-sm"
          >
            Sort
          </div>

          <q-icon name="expand_more" color="gray-5" class="gt-sm"></q-icon>
        </div>

        <Sort
          :columns="columns"
          :sort-column="sortColumn"
          :sort-order="sortOrder"
          @setSortColumn="setSortColumn"
          @setSortOrder="setSortOrder"
        ></Sort>
      </div>

      <!-- ... -->

      <!-- group -->

      <div class="border-right" :class="_class">
        <div class="row items-center">
          <q-icon name="eva-copy-outline" color="gray-5" size="20px"></q-icon>

          <div
            class="label-1 text-uppercase text-gray-8 col-auto q-mx-sm gt-sm"
          >
            Group
          </div>

          <q-icon name="expand_more" color="gray-5" class="gt-sm"></q-icon>
        </div>

        <Group
          :columns="columns"
          :group-column="groupColumn"
          @setGroupColumn="setGroupColumn"
        ></Group>
      </div>

      <!-- ... -->

      <!-- filter -->

      <div class="border-right" :class="_class">
        <div class="row items-center" @click="showFilters = true">
          <q-icon name="o_filter_alt" color="gray-5" size="20px"></q-icon>

          <div
            class="label-1 text-uppercase text-gray-8 col-auto q-mx-sm gt-sm"
          >
            Filter
          </div>

          <q-icon name="expand_more" color="gray-5" class="gt-sm"></q-icon>
        </div>

        <Filters
          v-model="showFilters"
          :columns="columns"
          @apply="applyFilters"
          @clear="clearFilters"
        ></Filters>
      </div>

      <!-- ... -->

      <!-- columns -->

      <div class="border-right" :class="_class">
        <div class="row items-center" @click="showColumns = true">
          <q-icon name="eva-eye-outline" color="gray-5" size="20px"></q-icon>

          <div
            class="label-1 text-uppercase text-gray-8 col-auto q-mx-sm gt-sm"
          >
            Columns
          </div>

          <q-icon name="expand_more" color="gray-5" class="gt-sm"></q-icon>
        </div>

        <Columns
          v-model="showColumns"
          :columns="columns"
          @savePreference="savePreference"
        ></Columns>
      </div>

      <!-- ... -->

      <!-- print -->

      <div class="border-right" :class="_class">
        <div class="row items-center" @click="handlePrint">
          <q-icon
            name="eva-printer-outline"
            color="gray-5"
            size="20px"
          ></q-icon>

          <div
            class="label-1 text-uppercase text-gray-8 col-auto q-mx-sm gt-sm"
          >
            Print
          </div>
        </div>
      </div>

      <!-- ... -->

      <!-- search -->

      <div class="col row items-center q-mx-sm border-right">
        <div class="col-auto">
          <q-icon
            name="eva-search"
            :color="searchTerm ? 'secondary-5' : 'gray-5'"
            size="20px"
          ></q-icon>
        </div>

        <div class="col">
          <input
            v-model="model"
            type="text"
            placeholder="Search"
            class="text-2 text-gray-10 text-weight-medium q-ml-sm"
            @input="search"
          />
        </div>
      </div>

      <!-- ... -->

      <!-- grid -->

      <div class="border-right" :class="_class" @click="toggleView('grid')">
        <div class="row items-center">
          <q-icon
            name="grid_view"
            :color="view === 'grid' ? 'secondary-5' : 'gray-5'"
            size="20px"
          ></q-icon>

          <div
            class="label-1 text-uppercase col-auto q-mx-sm gt-sm"
            :class="view === 'grid' ? 'text-secondary' : 'text-gray-8'"
          >
            Grid
          </div>
        </div>
      </div>

      <!-- ... -->

      <!-- list -->

      <div :class="_class" @click="toggleView('list')">
        <div class="row items-center">
          <q-icon
            name="mdi-reorder-horizontal"
            :color="view === 'list' ? 'secondary-5' : 'gray-5'"
            size="20px"
          ></q-icon>

          <div
            class="label-1 text-uppercase col-auto q-mx-sm gt-sm"
            :class="view === 'list' ? 'text-secondary' : 'text-gray-8'"
          >
            List
          </div>
        </div>
      </div>

      <!-- ... -->
    </template>
  </div>
</template>

<script>
const Sort = () => import("./sort");
const Group = () => import("./group");
const Filters = () => import("./filters");
const Columns = () => import("./columns");

export default {
  name: "Actions",

  components: { Sort, Group, Filters, Columns },

  props: {
    columns: {
      type: Array,
      default: () => [],
    },

    selectedItems: {
      type: Array,
      default: () => [],
    },

    view: {
      type: String,
      default: "grid",
    },

    searchTerm: {
      type: String,
      default: "",
    },

    sortColumn: {
      type: String,
      default: "",
    },

    sortOrder: {
      type: String,
      default: "",
    },

    groupColumn: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      model: "",
      showFilters: false,
      showColumns: false,
    };
  },

  computed: {
    _class() {
      return "col-auto q-px-sm q-py-xs hover";
    },
  },

  watch: {
    searchTerm: {
      immediate: true,
      handler: function () {
        this.model = this.searchTerm;
      },
    },
  },

  methods: {
    search() {
      this.$emit("search", this.model);
    },

    toggleView(view) {
      this.$emit("toggle", view);
    },

    setSortColumn(columnName) {
      this.$emit("setSortColumn", columnName);
    },

    setSortOrder(order) {
      this.$emit("setSortOrder", order);
    },

    setGroupColumn(columnName) {
      this.$emit("setGroupColumn", columnName);
    },

    clearFilters() {
      this.$emit("clearFilters");
    },

    applyFilters(filters) {
      this.$emit("applyFilters", filters);
      this.showFilters = false;
    },

    handlePrint() {
      this.$emit("print");
    },

    saveColumnPreference(preference) {
      this.$emit("saveColumnPreference", preference);
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  outline: none;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
}
</style>
