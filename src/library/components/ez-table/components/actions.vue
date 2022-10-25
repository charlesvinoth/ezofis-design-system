<template>
  <div class="card row items-center border-gray-2" style="height: 38px">
    <template v-if="selectedRows.length">
      <div class="col text-2 text-weight-medium q-px-sm text-secondary">
        {{ selectedRows.length }} item(s) selected
      </div>

      <!-- edit -->

      <div :class="_class">
        <div class="row items-center">
          <q-icon name="edit" color="blue-5" size="20px"></q-icon>

          <div class="text-2 text-blue col-auto q-mx-sm">Edit</div>
        </div>
      </div>

      <!-- ... -->

      <!-- delete -->

      <div :class="_class">
        <div class="row items-center">
          <q-icon name="delete" color="red-5" size="20px"></q-icon>

          <div class="text-2 text-red col-auto q-mx-sm">Delete</div>
        </div>
      </div>

      <!-- ... -->

      <!-- clear -->

      <div class="col-auto q-px-sm q-py-xs hover" @click="$emit('clear')">
        <div class="row items-center">
          <q-icon name="eva-close" color="gray-5" size="20px"></q-icon>

          <div class="text-2 text-gray-7 col-auto q-mx-sm">Clear</div>
        </div>
      </div>

      <!-- ... -->
    </template>

    <template v-else>
      <!-- reload -->

      <div :class="_class" @click="$emit('reload')">
        <div class="row items-center">
          <q-icon name="eva-refresh" color="gray-5" size="20px"></q-icon>

          <div class="text-2 text-gray-7 col-auto q-mx-sm">Reload</div>
        </div>
      </div>

      <!-- ... -->

      <!-- filter -->

      <div :class="_class">
        <div class="row items-center">
          <q-icon name="filter_alt" color="gray-5" size="20px"></q-icon>

          <div class="text-2 text-gray-7 col-auto q-mx-sm">Filter</div>

          <q-icon name="expand_more" color="gray-5"></q-icon>
        </div>

        <q-menu>
          <div class="q-pa-md"></div>
        </q-menu>
      </div>

      <!-- ... -->

      <!-- hidden columns -->

      <div :class="_class">
        <div class="row items-center">
          <q-icon name="eva-eye" color="gray-5" size="20px"></q-icon>

          <div class="text-2 text-gray-7 col-auto q-mx-sm">Columns</div>

          <q-icon name="expand_more" color="gray-5"></q-icon>
        </div>

        <q-menu>
          <div class="q-pa-md"></div>
        </q-menu>
      </div>

      <!-- ... -->

      <!-- export -->

      <div :class="_class">
        <div class="row items-center">
          <q-icon name="eva-download" color="gray-5" size="20px"></q-icon>

          <div class="text-2 text-gray-7 col-auto q-mx-sm">Export</div>

          <q-icon name="expand_more" color="gray-5"></q-icon>
        </div>

        <q-menu>
          <div class="q-pa-md"></div>
        </q-menu>
      </div>

      <!-- ... -->

      <!-- search -->

      <div class="col row items-center q-mx-sm">
        <div class="col-auto">
          <q-icon name="eva-search" color="gray-5" size="20px"></q-icon>
        </div>

        <div class="col">
          <input
            v-model="searchFor"
            type="text"
            placeholder="Search"
            class="text-2 text-gray-10 q-ml-sm"
          />
        </div>
      </div>

      <!-- ... -->
    </template>
  </div>
</template>

<script>
export default {
  name: "Actions",

  props: {
    columns: {
      type: Array,
      default: () => [],
    },

    selectedRows: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      searchFor: "",
    };
  },

  computed: {
    _class() {
      return "col-auto q-px-sm border-right q-py-xs hover";
    },
  },

  watch: {
    searchFor() {
      this.$emit("search", this.searchFor);
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
