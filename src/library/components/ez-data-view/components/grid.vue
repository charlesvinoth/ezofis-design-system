<template>
  <div>
    <!-- fetching data -->

    <template v-if="fetchingData">
      <div class="row items-center q-col-gutter-md">
        <div
          v-for="row in rowsPerPage"
          :key="row"
          class="col-xs-12 col-sm-6 col-md-4 col-lg-3"
        >
          <div class="card">
            <div
              v-for="column in visibleColumns"
              :key="column.id"
              class="q-py-sm q-px-md"
            >
              <q-skeleton
                class="bg-gray-3"
                animation="blink"
                type="text"
                width="75px"
              />

              <q-skeleton
                class="bg-gray-3"
                animation="blink"
                type="text"
                width="150px"
              />
            </div>
          </div>
        </div>
      </div>
    </template>

    <!-- ... -->

    <!-- fetched data -->

    <template v-else>
      <div v-for="group in groups" :key="group.id" class="q-mt-sm">
        <!-- group name -->

        <div
          v-if="group.name"
          class="q-py-sm q-px-xs row items-center hover"
          @click="group.isMinimized = !group.isMinimized"
        >
          <div class="label-1 text-deep-orange text-weight-bold text-uppercase">
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

        <!-- ... -->

        <!-- grouped rows -->

        <template v-if="!group.isMinimized">
          <div class="row items-center q-col-gutter-md">
            <div
              v-for="row in rows[group.name]"
              :key="row.id"
              class="col-xs-12 col-sm-6 col-md-4 col-lg-3"
            >
              <div class="card hover-shadow overflow-hidden q-pa-xs">
                <div class="row items-center q-pr-md q-py-sm">
                  <!-- status indicator -->

                  <div
                    v-if="showStatusIndicator"
                    :class="getStatusIndicatorColor(row.status)"
                    style="width: 3px; height: 32px; margin-left: -4px"
                  ></div>

                  <!-- ... -->

                  <!-- avatar column -->

                  <div v-if="hasAvatarColumn" class="col">
                    <q-avatar size="36px">
                      <img :src="row.avatar" alt="avatar" />
                    </q-avatar>
                  </div>

                  <!-- ... -->

                  <!-- select -->
                  <div
                    class="col-auto q-ml-md"
                    style="width: 32px"
                    @click="selectRow(row.id)"
                  >
                    <q-icon
                      :name="
                        isRowSelected(row.id)
                          ? 'mdi-checkbox-marked-circle'
                          : 'mdi-checkbox-blank-circle-outline'
                      "
                      :color="getRowSelectorColor(row.status, row.id)"
                      size="20px"
                    ></q-icon>
                  </div>

                  <!-- ... -->
                </div>

                <!-- columns -->

                <div
                  v-for="column in visibleColumns"
                  :key="column.id"
                  class="q-py-sm q-px-md"
                >
                  <div
                    class="label-1 text-uppercase text-weight-medium"
                    :class="
                      getSortIcon(column.name)
                        ? 'text-secondary'
                        : 'text-gray-5'
                    "
                    style="margin-bottom: 1px"
                  >
                    {{ column.name }}
                    <span v-if="getSortIcon(column.name)">
                      (<q-icon :name="getSortIcon(column.name)"></q-icon>)
                    </span>
                  </div>

                  <div class="text-2 text-gray-10">
                    <slot :name="column.name" :value="row[column.name]">
                      {{ row[column.name] }}
                    </slot>
                  </div>
                </div>

                <!-- ... -->
              </div>
            </div>
          </div>
        </template>

        <!-- ... -->
      </div>
    </template>

    <!-- ... -->
  </div>
</template>

<script>
export default {
  name: "Grid",

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
      groups: [],
    };
  },

  computed: {
    visibleColumns() {
      return this.columns.filter((column) => column.isVisible);
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
    isRowSelected(rowId) {
      return this.selectedRows.includes(rowId);
    },

    selectRow(rowId) {
      this.$emit("select", rowId);
    },

    getSortIcon(columnName) {
      const icon = {
        "": "",
        ASC: "north",
        DESC: "south",
      };

      if (this.sortColumn !== columnName) return icon[""];
      else return icon[this.sortOrder];
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
