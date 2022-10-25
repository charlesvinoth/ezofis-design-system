<template>
  <DocApi
    author="Charles Vinoth"
    version="1.0"
    :prop-list="propList"
    :event-list="eventList"
  >
    <template #title>Pagination</template>

    <template #description>
      ezofis has a component called <b>EzPagination</b>, which allows users to
      keep track of their location within the app.
    </template>

    <template #usage>
      <!-- default -->

      <DocExample title="Default" :code="example[0]">
        <template #example>
          <EzPagination
            :current-page="currentPage"
            :total-items="totalRows"
            :items-per-page="rowsPerPage"
            :item-from="rowFrom"
            :item-to="rowTo"
            @goto="gotoPage"
            @change="changeRowsPerPage"
          ></EzPagination>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- no label -->

      <DocExample title="no label" :code="example[1]">
        <template #example>
          <EzPagination
            no-label
            :current-page="currentPage"
            :total-items="totalRows"
            :items-per-page="rowsPerPage"
            :item-from="rowFrom"
            :item-to="rowTo"
            @goto="gotoPage"
            @change="changeRowsPerPage"
          ></EzPagination>
        </template>
      </DocExample>

      <!-- ... -->
    </template>
  </DocApi>
</template>

<script>
const EzPagination = () => import("@/library/components/ez-pagination/index");
const DocApi = () => import("@/components/doc-api/index");
const DocExample = () => import("@/components/doc-example/index");

export default {
  name: "Pagination",

  components: { EzPagination, DocApi, DocExample },

  data() {
    return {
      currentPage: 1,
      rowsPerPage: 10,
      totalRows: 50,
      propList: [
        {
          id: this.$nano.id(),
          name: "currentPage",
          type: "Number",
          description: "Current page",
          acceptedValues: "",
          defaultValue: "1",
        },
        {
          id: this.$nano.id(),
          name: "totalPages",
          type: "Number",
          description: "Total no of pages",
          acceptedValues: "",
          defaultValue: "1",
        },
        {
          id: this.$nano.id(),
          name: "itemsPerPage",
          type: "Number",
          description: "items per page",
          acceptedValues: "",
          defaultValue: "10",
        },
        {
          id: this.$nano.id(),
          name: "itemFrom",
          type: "Number",
          description: "item from",
          acceptedValues: "",
          defaultValue: "0",
        },
        {
          id: this.$nano.id(),
          name: "itemTo",
          type: "Number",
          description: "items to",
          acceptedValues: "",
          defaultValue: "0",
        },
      ],
      eventList: [
        {
          id: this.$nano.id(),
          name: "goto",
          description: "Emitted when the component needs to change the page",
          parameters: "New page value",
        },
        {
          id: this.$nano.id(),
          name: "change",
          description:
            "Emitted when the component needs to change the items per page",
          parameters: "New page value",
        },
      ],
      example: [
        '<EzPagination :current-page="currentPage" :total-items="totalRows" :items-per-page="rowsPerPage" :item-from="rowFrom" :item-to="rowTo" @goto="gotoPage" @change="changeRowsPerPage"></EzPagination>',
        '<EzPagination no-label :current-page="currentPage" :total-items="totalRows" :items-per-page="rowsPerPage" :item-from="rowFrom" :item-to="rowTo" @goto="gotoPage" @change="changeRowsPerPage"></EzPagination>',
      ],
    };
  },

  computed: {
    rowFrom() {
      return (this.currentPage - 1) * this.rowsPerPage;
    },

    rowTo() {
      return this.currentPage * this.rowsPerPage;
    },
  },

  methods: {
    gotoPage(page) {
      this.currentPage = page;
    },

    changeRowsPerPage(noOfRows) {
      this.currentPage = 1;
      this.rowsPerPage = noOfRows;
    },
  },
};
</script>

<style lang="scss" scoped></style>
