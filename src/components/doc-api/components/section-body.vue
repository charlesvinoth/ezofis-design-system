<template>
  <div class="card q-mb-xl">
    <EzScrollbar>
      <table>
        <thead>
          <tr class="label-1 text-uppercase text-gray-5">
            <th v-for="column in columns" :key="column.id">
              {{ column.label }}
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="row in _rows"
            :key="row.id"
            class="text-3 border-bottom border-gray-2"
          >
            <td v-for="column in columns" :key="column.id">
              <template v-if="column.name === 'name'">
                <span
                  class="rounded-borders border bg-gray-2 border-gray-3"
                  style="padding: 3px 6px"
                >
                  {{ row[column.name] }}
                </span>
              </template>

              <template v-else> {{ row[column.name] || "-" }} </template>
            </td>
          </tr>
        </tbody>
      </table>
    </EzScrollbar>
  </div>
</template>

<script>
import { sortBy } from "lodash";

import { mapState } from "vuex";

const EzScrollbar = () => import("@/library/components/ez-scrollbar/index");

export default {
  name: "SectionBody",

  components: { EzScrollbar },

  props: {
    columns: {
      type: Array,
      default: () => [],
    },

    rows: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    ...mapState(["darkMode"]),

    _rows() {
      return sortBy(this.rows, "name");
    },
  },
};
</script>

<style lang="scss" scoped>
table {
  table-layout: fixed;
  white-space: nowrap;
  border-collapse: collapse;
  text-align: left;
  min-width: 100%;
}

th {
  font-weight: 400;
}

th,
td {
  padding: 10px;
}

tbody tr:last-child {
  border-bottom: none;
}
</style>
