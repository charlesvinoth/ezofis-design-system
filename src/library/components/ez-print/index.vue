<template>
  <div class="q-pa-lg">
    <div class="row items-center q-mb-lg">
      <div class="col-auto">
        <img src="@/assets/logo/logo-2.png" height="26" />
      </div>

      <div class="col text-center text-6 text-weight-bold text-gray-10">
        User Report
      </div>

      <div class="col-auto text-right">
        <div class="text-3 text-weight-bold text-gray-6">
          charles@ezofis.com
        </div>

        <div class="text-1 text-gray-5 q-mt-xs">
          {{ $day.now() }}
        </div>
      </div>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th
            class="label-1 text-gray-5 text-uppercase text-weight-medium q-pa-sm"
            v-for="column in columns"
            :key="column.id"
          >
            {{ column.label }}
          </th>
        </tr>
      </thead>

      <tbody v-for="(groupedRows, groupName) in rows" :key="groupName">
        <tr v-if="groupName">
          <td :colspan="colSpan" class="q-pa-sm">
            <div
              class="label-1 text-deep-orange text-weight-bold text-uppercase"
            >
              {{ groupName }}
            </div>
          </td>
        </tr>

        <tr v-for="row in groupedRows" :key="row.id">
          <td
            class="text-2 text-gray-10 q-pa-sm"
            v-for="column in columns"
            :key="column.id"
          >
            {{ row[column.name] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "EzPrint",

  data() {
    return {
      columns: [],
      rows: [],
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

    colSpan() {
      return this.columns.length + 1;
    },
  },

  created() {
    document.documentElement.style.setProperty("--bodyCol", "white");

    this.columns = this.$q.sessionStorage.getItem("columns");
    this.rows = this.$q.sessionStorage.getItem("rows");

    setTimeout(() => window.print(), 1000);
  },

  beforeDestroy() {
    document.documentElement.style.setProperty("--bodyCol", "#f8fafc");
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

.table th,
.table td {
  border: 1px solid $gray-2;
}
</style>
