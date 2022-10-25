<template>
  <DocApi
    author="Charles Vinoth"
    version="1.0"
    :prop-list="propList"
    :event-list="eventList"
  >
    <template #title>Table</template>

    <template #description>
      ezofis has a component called <b>EzTable</b>, which can be used to show
      tabular data.
    </template>

    <template #usage>
      <!-- default -->

      <DocExample title="Default" :code="example[0]">
        <template #example>
          <EzTable :columns="columns" :rows="rows"></EzTable>
        </template>

        <template #options>
          <pre class="language-javascript"><code>{{options[0]}}</code></pre>
          <pre class="language-javascript"><code>{{options[1]}}</code></pre>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- no pagination label -->

      <DocExample title="no pagination label" :code="example[1]">
        <template #example>
          <EzTable
            :columns="columns"
            :rows="rows"
            no-pagination-label
          ></EzTable>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- lazy load -->

      <DocExample title="lazy load" :code="example[1]">
        <template #example>
          <EzTable
            :columns="columns"
            :rows="asyncRows"
            :total-rows="10"
            :fetching-data="fetchingData"
            @fetch="fetchData"
          ></EzTable>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- horizontal border -->

      <DocExample title="horizontal border" :code="example[1]">
        <template #example>
          <EzTable
            :columns="columns"
            :rows="rows"
            separator="horizontal"
          ></EzTable>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- vertical border -->

      <DocExample title="vertical border" :code="example[2]">
        <template #example>
          <EzTable
            :columns="columns"
            :rows="rows"
            separator="vertical"
          ></EzTable>
        </template>
      </DocExample>

      <!-- ... -->
    </template>
  </DocApi>
</template>

<script>
const EzTable = () => import("@/library/components/ez-table/index");
const DocApi = () => import("@/components/doc-api/index");
const DocExample = () => import("@/components/doc-example/index");

export default {
  name: "Table",

  components: { EzTable, DocApi, DocExample },

  data() {
    return {
      fetchingData: false,
      columns: [
        {
          id: this.$nano.id(),
          label: "name",
          name: "name",
          isVisible: true,
          isSortable: true,
        },
        {
          id: this.$nano.id(),
          label: "email",
          name: "email",
          isVisible: true,
          isSortable: true,
        },
        {
          id: this.$nano.id(),
          label: "phone",
          name: "phone",
          isVisible: true,
          isSortable: true,
        },
        {
          id: this.$nano.id(),
          label: "gender",
          name: "gender",
          isVisible: true,
          isSortable: true,
        },
        {
          id: this.$nano.id(),
          label: "company",
          name: "company",
          isVisible: true,
          isSortable: true,
        },
        {
          id: this.$nano.id(),
          label: "country",
          name: "country",
          isVisible: true,
          isSortable: true,
        },
      ],
      rows: [
        {
          id: 1,
          name: "Holli Blues",
          email: "hblues0@example.com",
          gender: "Non-binary",
          company: "Meetz",
          country: "China",
          phone: "566-639-8585",
        },
        {
          id: 2,
          name: "Toby Haughton",
          email: "thaughton1@yellowpages.com",
          gender: "Polygender",
          company: "Eidel",
          country: "Mongolia",
          phone: "800-186-9634",
        },
        {
          id: 3,
          name: "Mandie Sighard",
          email: "msighard2@kickstarter.com",
          gender: "Polygender",
          company: "Shufflester",
          country: "Indonesia",
          phone: "411-265-8230",
        },
        {
          id: 4,
          name: "Isa Skirven",
          email: "iskirven3@alexa.com",
          gender: "Female",
          company: "Chatterbridge",
          country: "Poland",
          phone: "481-304-5162",
        },
        {
          id: 5,
          name: "Latisha Evequot",
          email: "levequot4@flavors.me",
          gender: "Non-binary",
          company: "Dabtype",
          country: "China",
          phone: "961-941-8979",
        },
        {
          id: 6,
          name: "Ileane Vasyuchov",
          email: "ivasyuchov5@facebook.com",
          gender: "Male",
          company: "Skilith",
          country: "Indonesia",
          phone: "391-551-1678",
        },
        {
          id: 7,
          name: "Ellynn Upcraft",
          email: "eupcraft6@wikimedia.org",
          gender: "Polygender",
          company: "Wordware",
          country: "Iran",
          phone: "576-244-8501",
        },
        {
          id: 8,
          name: "Rosene Dood",
          email: "rdood7@usatoday.com",
          gender: "Bigender",
          company: "Fivebridge",
          country: "Democratic Republic of the Congo",
          phone: "700-281-9839",
        },
        {
          id: 9,
          name: "Abbe Franchyonok",
          email: "afranchyonok8@jiathis.com",
          gender: "Female",
          company: "Avaveo",
          country: "China",
          phone: "879-940-1357",
        },
        {
          id: 10,
          name: "Maryjane Spowart",
          email: "mspowart9@dailymail.co.uk",
          gender: "Male",
          company: "Devcast",
          country: "France",
          phone: "221-876-3249",
        },
        {
          id: 11,
          name: "Charles Vinoth",
          email: "charles@ezofis.com",
          gender: "Male",
          company: "ezofis",
          country: "India",
          phone: "7010034120",
        },
      ],
      asyncRows: [
        {
          id: 1,
          name: "Holli Blues",
          email: "hblues0@example.com",
          gender: "Non-binary",
          company: "Meetz",
          country: "China",
          phone: "566-639-8585",
        },
        {
          id: 2,
          name: "Toby Haughton",
          email: "thaughton1@yellowpages.com",
          gender: "Polygender",
          company: "Eidel",
          country: "Mongolia",
          phone: "800-186-9634",
        },
        {
          id: 3,
          name: "Mandie Sighard",
          email: "msighard2@kickstarter.com",
          gender: "Polygender",
          company: "Shufflester",
          country: "Indonesia",
          phone: "411-265-8230",
        },
        {
          id: 4,
          name: "Isa Skirven",
          email: "iskirven3@alexa.com",
          gender: "Female",
          company: "Chatterbridge",
          country: "Poland",
          phone: "481-304-5162",
        },
        {
          id: 5,
          name: "Latisha Evequot",
          email: "levequot4@flavors.me",
          gender: "Non-binary",
          company: "Dabtype",
          country: "China",
          phone: "961-941-8979",
        },
      ],
      propList: [
        {
          id: this.$nano.id(),
          name: "columns",
          type: "Array",
          description: "Table Header",
          acceptedValues: "",
          defaultValue: "[ ]",
        },
        {
          id: this.$nano.id(),
          name: "rows",
          type: "Array",
          description: "Table body",
          acceptedValues: "",
          defaultValue: "[ ]",
        },
        {
          id: this.$nano.id(),
          name: "separator",
          type: "String",
          description: "Table border style",
          acceptedValues: "cell",
          defaultValue: "cell || horizontal || vertical",
        },
        {
          id: this.$nano.id(),
          name: "rowsPerPage",
          type: "Number",
          description: "No of visible rows per page",
          acceptedValues: "",
          defaultValue: "5",
        },
      ],
      eventList: [
        {
          id: this.$nano.id(),
          name: "click",
          description: "Triggers when the row is clicked",
          parameters: "row id",
        },
      ],
      example: [
        '<EzTable :columns="columns" :rows="rows"></EzTable>',
        '<EzTable :columns="columns" :rows="rows" separator="horizontal"></EzTable>',
        '<EzTable :columns="columns" :rows="rows" separator="vertical"></EzTable>',
      ],
      options: [
        `columns: [
          {
            id: this.$nano.id(),
            label: "name",
            name: "name",
          },
          {
            id: this.$nano.id(),
            label: "email",
            name: "email",
          },
          {
            id: this.$nano.id(),
            label: "phone",
            name: "phone",
          },
          {
            id: this.$nano.id(),
            label: "gender",
            name: "gender",
          },
          {
            id: this.$nano.id(),
            label: "company",
            name: "company",
          },
          {
            id: this.$nano.id(),
            label: "country",
            name: "country",
          },
        ]`,
        `rows: [
          {
            id: 1,
            name: "Holli Blues",
            email: "hblues0@example.com",
            gender: "Non-binary",
            company: "Meetz",
            country: "China",
            phone: "566-639-8585",
          },
          {
            id: 2,
            name: "Toby Haughton",
            email: "thaughton1@yellowpages.com",
            gender: "Polygender",
            company: "Eidel",
            country: "Mongolia",
            phone: "800-186-9634",
          },
          {
            id: 3,
            name: "Mandie Sighard",
            email: "msighard2@kickstarter.com",
            gender: "Polygender",
            company: "Shufflester",
            country: "Indonesia",
            phone: "411-265-8230",
          },
          {
            id: 4,
            name: "Isa Skirven",
            email: "iskirven3@alexa.com",
            gender: "Female",
            company: "Chatterbridge",
            country: "Poland",
            phone: "481-304-5162",
          },
          {
            id: 5,
            name: "Latisha Evequot",
            email: "levequot4@flavors.me",
            gender: "Non-binary",
            company: "Dabtype",
            country: "China",
            phone: "961-941-8979",
          },
          {
            id: 6,
            name: "Ileane Vasyuchov",
            email: "ivasyuchov5@facebook.com",
            gender: "Male",
            company: "Skilith",
            country: "Indonesia",
            phone: "391-551-1678",
          },
          {
            id: 7,
            name: "Ellynn Upcraft",
            email: "eupcraft6@wikimedia.org",
            gender: "Polygender",
            company: "Wordware",
            country: "Iran",
            phone: "576-244-8501",
          },
          {
            id: 8,
            name: "Rosene Dood",
            email: "rdood7@usatoday.com",
            gender: "Bigender",
            company: "Fivebridge",
            country: "Democratic Republic of the Congo",
            phone: "700-281-9839",
          },
          {
            id: 9,
            name: "Abbe Franchyonok",
            email: "afranchyonok8@jiathis.com",
            gender: "Female",
            company: "Avaveo",
            country: "China",
            phone: "879-940-1357",
          },
          {
            id: 10,
            name: "Maryjane Spowart",
            email: "mspowart9@dailymail.co.uk",
            gender: "Male",
            company: "Devcast",
            country: "France",
            phone: "221-876-3249",
          },
        ]`,
      ],
    };
  },

  methods: {
    fetchData() {
      this.fetchingData = true;
      setTimeout(() => {
        this.asyncRows.push(
          ...[
            {
              id: 6,
              name: "Ileane Vasyuchov",
              email: "ivasyuchov5@facebook.com",
              gender: "Male",
              company: "Skilith",
              country: "Indonesia",
              phone: "391-551-1678",
            },
            {
              id: 7,
              name: "Ellynn Upcraft",
              email: "eupcraft6@wikimedia.org",
              gender: "Polygender",
              company: "Wordware",
              country: "Iran",
              phone: "576-244-8501",
            },
            {
              id: 8,
              name: "Rosene Dood",
              email: "rdood7@usatoday.com",
              gender: "Bigender",
              company: "Fivebridge",
              country: "Democratic Republic of the Congo",
              phone: "700-281-9839",
            },
            {
              id: 9,
              name: "Abbe Franchyonok",
              email: "afranchyonok8@jiathis.com",
              gender: "Female",
              company: "Avaveo",
              country: "China",
              phone: "879-940-1357",
            },
            {
              id: 10,
              name: "Maryjane Spowart",
              email: "mspowart9@dailymail.co.uk",
              gender: "Male",
              company: "Devcast",
              country: "France",
              phone: "221-876-3249",
            },
          ]
        );
        this.fetchingData = false;
      }, 1500);
    },
  },
};
</script>

<style lang="scss" scoped></style>
