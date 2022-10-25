<template>
  <div class="card row items-center justify-between non-selectable">
    <div class="col-auto q-mx-sm">
      <div class="text-1 text-gray-6">
        Showing <b>{{ _itemFrom }}</b> - <b>{{ itemTo }}</b> of
        <b>{{ totalItems }}</b> items
      </div>
    </div>

    <div class="row items-center border-gray-2">
      <!-- first page -->

      <div class="col-auto q-px-md border-right">
        <Navigator
          :no-label="noLabel"
          label="first"
          icon-left="first_page"
          :is-disabled="currentPage === 1"
          @click="goto(1)"
        ></Navigator>
      </div>

      <!-- ... -->

      <!-- previous page -->

      <div class="col-auto q-px-md border-right">
        <Navigator
          :no-label="noLabel"
          label="prev"
          icon-left="navigate_before"
          :is-disabled="currentPage === 1"
          @click="goto(currentPage - 1)"
        ></Navigator>
      </div>

      <!-- ... -->

      <!-- current page -->

      <div class="col-auto wrapper">
        <input
          v-model.number="model"
          type="number"
          :placeholder="pages"
          class="text-weight-bold text-gray-6"
          @keypress.enter="handleKeypress"
        />
      </div>

      <!-- ... -->

      <!-- next page -->

      <div class="col-auto q-px-md border-left">
        <Navigator
          :no-label="noLabel"
          label="next"
          icon-right="navigate_next"
          :is-disabled="currentPage === totalPages"
          @click="goto(currentPage + 1)"
        ></Navigator>
      </div>

      <!-- ... -->

      <!-- last page -->

      <div class="col-auto q-px-md border-left">
        <Navigator
          :no-label="noLabel"
          label="last"
          icon-right="last_page"
          :is-disabled="currentPage === totalPages"
          @click="goto(totalPages)"
        ></Navigator>
      </div>

      <!-- ... -->
    </div>

    <!-- items per page -->

    <div class="col-auto q-mx-sm cursor-pointer">
      <div class="row items-center text-1 text-gray-6">
        <div class="col-auto">
          <b>{{ itemsPerPage }}</b> items / page
        </div>

        <div class="col-auto q-ml-xs">
          <q-icon name="expand_more" color="gray-5" size="16px"></q-icon>
        </div>
      </div>

      <q-menu>
        <div
          v-for="option in itemsPerPageOptions"
          :key="option"
          class="q-pa-sm label-2 text-gray-10 hover"
          @click="changeItemsPerPage(option)"
        >
          {{ option }}
        </div>
      </q-menu>
    </div>

    <!-- ... -->
  </div>
</template>

<script>
const Navigator = () => import("./components/navigator");

export default {
  name: "EzPagination",

  components: { Navigator },

  props: {
    currentPage: {
      type: Number,
      default: 0,
    },

    totalItems: {
      type: Number,
      default: 0,
    },

    itemsPerPage: {
      type: Number,
      required: true,
    },

    itemFrom: {
      type: Number,
      required: true,
    },

    itemTo: {
      type: Number,
      required: true,
    },

    noLabel: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      model: null,
      itemsPerPageOptions: [5, 10, 25, 50, 100],
    };
  },

  computed: {
    _itemFrom() {
      if (!this.totalItems) return 0;
      else return this.itemFrom + 1;
    },

    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },

    pages() {
      if (!this.totalItems) return 0;
      else return `${this.currentPage} / ${this.totalPages}`;
    },
  },

  methods: {
    handleKeypress() {
      if (this.model < 1) {
        this.$emit("goto", 1);
      } else if (this.model > this.totalPages) {
        this.$emit("goto", this.totalPages);
      } else {
        this.model && this.$emit("goto", this.model);
      }

      this.model = null;
    },

    goto(page) {
      this.$emit("goto", page);
    },

    changeItemsPerPage(noOfItems) {
      this.$emit("change", noOfItems);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/quasar.variables.scss";

.wrapper {
  height: 36px;
  width: 72px;
}

input {
  outline: none;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  text-align: center;
  font-size: 12px;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

input::-webkit-input-placeholder {
  color: inherit;
  font-size: 12px;
}

/* Internet Explorer 10-11 */
input::-ms-input-placeholder {
  color: inherit;
  font-size: 12px;
}

input::placeholder {
  color: inherit;
  font-size: 12px;
}
</style>
