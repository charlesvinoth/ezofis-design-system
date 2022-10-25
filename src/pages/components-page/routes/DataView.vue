<template>
  <DocApi
    author="Charles Vinoth"
    version="1.0"
    :prop-list="propList"
    :event-list="eventList"
    :slot-list="slotList"
  >
    <template #title>Data View</template>

    <template #description>
      ezofis has a component called <b>EzDataView</b>, which can be used to
      display data in a list view or in a grid view. It packs the following
      features:

      <ul>
        <li>Filtering</li>
        <li>Sorting</li>
        <li>Grouping</li>
        <li>Single / Multiple rows selection with custom selection actions</li>
        <li>Pagination (including server-side if required)</li>
        <li>Total customization of rows and cells through scoped slots</li>
        <li>Print data</li>
      </ul>
    </template>

    <template #usage>
      <!-- default -->

      <DocExample title="Default" :code="example[0]">
        <template #example>
          <EzDataView
            :columns="columns"
            :rows="rows1"
            :total-rows="25"
            :fetching-data="fetchingData1"
            @reload="handleReload1"
          >
          </EzDataView>
        </template>

        <template #options>
          <pre class="language-javascript"><code>{{options[0]}}</code></pre>

          <pre class="language-javascript"><code>{{options[1]}}</code></pre>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- column slot -->

      <DocExample title="column slot" :code="example[1]">
        <template #example>
          <EzDataView
            :columns="columns"
            :rows="rows1"
            :total-rows="25"
            :fetching-data="fetchingData1"
            @reload="handleReload1"
          >
            <template #status="{ value }">
              <span
                class="q-pa-xs text-weight-medium rounded-borders"
                :class="
                  value === 'Inactive'
                    ? 'bg-red-1 text-red'
                    : 'bg-green-1 text-green'
                "
              >
                {{ value }}
              </span>
            </template>
          </EzDataView>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- lazy load -->

      <DocExample title="lazy load" :code="example[2]">
        <template #example>
          <EzDataView
            :columns="columns"
            :rows="rows2"
            :total-rows="25"
            :fetching-data="fetchingData2"
            @reload="handleReload2"
            @loadMore="loadMore"
          >
          </EzDataView>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- with avatar -->

      <DocExample title="with avatar" :code="example[3]">
        <template #example>
          <EzDataView
            :columns="columns"
            :rows="rows1"
            :total-rows="25"
            :fetching-data="fetchingData1"
            has-avatar-column
            @reload="handleReload1"
          >
          </EzDataView>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- with status indicator -->

      <DocExample title="with status indicator" :code="example[4]">
        <template #example>
          <EzDataView
            :columns="columns"
            :rows="rows1"
            :total-rows="25"
            :fetching-data="fetchingData1"
            show-status-indicator
            :status-indicator-colors="statusIndicatorColors"
            @reload="handleReload1"
          >
          </EzDataView>
        </template>

        <template #options>
          <pre class="language-javascript"><code>{{options[2]}}</code></pre>
        </template>
      </DocExample>

      <!-- ... -->
    </template>
  </DocApi>
</template>

<script>
const EzDataView = () => import("@/library/components/ez-data-view/index");
const DocApi = () => import("@/components/doc-api/index");
const DocExample = () => import("@/components/doc-example/index");

export default {
  name: "DataView",

  components: { EzDataView, DocApi, DocExample },

  data() {
    return {
      columns: [
        {
          id: this.$nano.id(),
          label: "name",
          name: "name",
          sequence: 3,
          isVisible: true,
          isSortable: true,
          isGroupable: false,
          dataType: "STRING",
        },
        {
          id: this.$nano.id(),
          label: "email",
          name: "email",
          sequence: 1,
          isVisible: true,
          isSortable: true,
          isGroupable: false,
          dataType: "STRING",
        },
        {
          id: this.$nano.id(),
          label: "gender",
          name: "gender",
          sequence: 6,
          isVisible: false,
          isSortable: true,
          isGroupable: true,
          dataType: "STRING",
        },
        {
          id: this.$nano.id(),
          label: "status",
          name: "status",
          sequence: 2,
          isVisible: true,
          isSortable: true,
          isGroupable: true,
          dataType: "STRING",
        },
        {
          id: this.$nano.id(),
          label: "role",
          name: "role",
          sequence: 4,
          isVisible: true,
          isSortable: true,
          isGroupable: true,
          dataType: "STRING",
        },
        {
          id: this.$nano.id(),
          label: "account",
          name: "account",
          sequence: 5,
          isVisible: true,
          isSortable: true,
          isGroupable: true,
          dataType: "STRING",
        },
      ],
      rows1: [
        {
          id: 1,
          name: "Piper Lamers",
          email: "plamers0@4shared.com",
          gender: "Male",
          status: "Active",
          role: "User",
          account: "Microsoft",
          avatar: "https://i.pravatar.cc/100",
        },
        {
          id: 2,
          name: "Tasia Jedraszczyk",
          email: "tjedraszczyk1@soundcloud.com",
          gender: "Male",
          status: "Active",
          role: "User",
          account: "ezofis",
          avatar: "https://i.pravatar.cc/100",
        },
        {
          id: 3,
          name: "Fransisco Theobold",
          email: "ftheobold2@thetimes.co.uk",
          gender: "Male",
          status: "Inactive",
          role: "Administrator",
          account: "Google",
          avatar: "https://i.pravatar.cc/100",
        },
        {
          id: 4,
          name: "Sibby Spridgeon",
          email: "sspridgeon3@theatlantic.com",
          gender: "Male",
          status: "Active",
          role: "User",
          account: "Google",
          avatar: "https://i.pravatar.cc/100",
        },
        {
          id: 5,
          name: "Shawn Gatus",
          email: "sgatus4@fastcompany.com",
          gender: "Male",
          status: "Active",
          role: "User",
          account: "ezofis",
          avatar: "https://i.pravatar.cc/100",
        },
        {
          id: 6,
          name: "Shara Sidle",
          email: "ssidle5@msn.com",
          gender: "Female",
          status: "Active",
          role: "Administrator",
          account: "Google",
          avatar: "https://i.pravatar.cc/100",
        },
        {
          id: 7,
          name: "Nev Forsdyke",
          email: "nforsdyke6@imgur.com",
          gender: "Female",
          status: "Active",
          role: "Administrator",
          account: "Google",
          avatar: "https://i.pravatar.cc/100",
        },
        {
          id: 8,
          name: "Oralee Delucia",
          email: "odelucia7@multiply.com",
          gender: "Female",
          status: "Active",
          role: "Administrator",
          account: "ezofis",
          avatar: "https://i.pravatar.cc/100",
        },
        {
          id: 9,
          name: "Titus Delamere",
          email: "tdelamere8@technorati.com",
          gender: "Male",
          status: "Inactive",
          role: "User",
          account: "ezofis",
          avatar: "https://i.pravatar.cc/100",
        },
        {
          id: 10,
          name: "Tracie Wadeson",
          email: "twadeson9@elegantthemes.com",
          gender: "Male",
          status: "Active",
          role: "Administrator",
          account: "Microsoft",
          avatar: "https://i.pravatar.cc/100",
        },
        {
          id: 11,
          name: "Cosette Hostan",
          email: "chostana@1688.com",
          gender: "Male",
          status: "Inactive",
          role: "User",
          account: "Microsoft",
          avatar: "https://i.pravatar.cc/100",
        },
        {
          id: 12,
          name: "Gilbertine Gowland",
          email: "ggowlandb@histats.com",
          gender: "Female",
          status: "Active",
          role: "User",
          account: "ezofis",
          avatar: "https://i.pravatar.cc/100",
        },
        {
          id: 13,
          name: "Grange Butrimovich",
          email: "gbutrimovichc@360.cn",
          gender: "Male",
          status: "Inactive",
          role: "Administrator",
          account: "ezofis",
          avatar: "https://i.pravatar.cc/100",
        },
        {
          id: 14,
          name: "Gabriella Degg",
          email: "gdeggd@edublogs.org",
          gender: "Male",
          status: "Inactive",
          role: "Administrator",
          account: "ezofis",
          avatar: "https://i.pravatar.cc/100",
        },
        {
          id: 15,
          name: "Lexie Etter",
          email: "lettere@hc360.com",
          gender: "Male",
          status: "Inactive",
          role: "User",
          account: "Google",
          avatar: "https://i.pravatar.cc/100",
        },
        {
          id: 16,
          name: "Connor Phonix",
          email: "cphonixf@barnesandnoble.com",
          gender: "Male",
          status: "Inactive",
          role: "Administrator",
          account: "Microsoft",
          avatar: "https://i.pravatar.cc/100",
        },
        {
          id: 17,
          name: "Jannel O'Hannigan",
          email: "johannigang@infoseek.co.jp",
          gender: "Female",
          status: "Inactive",
          role: "Administrator",
          account: "ezofis",
          avatar: "https://i.pravatar.cc/100",
        },
        {
          id: 18,
          name: "Morgen Sexon",
          email: "msexonh@i2i.jp",
          gender: "Male",
          status: "Active",
          role: "Administrator",
          account: "Microsoft",
          avatar: "https://i.pravatar.cc/100",
        },
        {
          id: 19,
          name: "Abbe Riggey",
          email: "ariggeyi@upenn.edu",
          gender: "Male",
          status: "Inactive",
          role: "Administrator",
          account: "Google",
          avatar: "https://i.pravatar.cc/100",
        },
        {
          id: 20,
          name: "Zed Girk",
          email: "zgirkj@nps.gov",
          gender: "Male",
          status: "Inactive",
          role: "User",
          account: "ezofis",
          avatar: "https://i.pravatar.cc/100",
        },
        {
          id: 21,
          name: "Rachel Shillaker",
          email: "rshillakerk@xing.com",
          gender: "Male",
          status: "Active",
          role: "User",
          account: "Google",
          avatar: "https://i.pravatar.cc/100",
        },
        {
          id: 22,
          name: "Merilyn Matusovsky",
          email: "mmatusovskyl@nasa.gov",
          gender: "Male",
          status: "Active",
          role: "Administrator",
          account: "Google",
          avatar: "https://i.pravatar.cc/100",
        },
        {
          id: 23,
          name: "Cam Dufton",
          email: "cduftonm@discuz.net",
          gender: "Male",
          status: "Active",
          role: "Administrator",
          account: "Google",
          avatar: "https://i.pravatar.cc/100",
        },
        {
          id: 24,
          name: "Harriett Lynam",
          email: "hlynamn@theguardian.com",
          gender: "Male",
          status: "Active",
          role: "Administrator",
          account: "Microsoft",
          avatar: "https://i.pravatar.cc/100",
        },
        {
          id: 25,
          name: "Ritchie Camsey",
          email: "rcamseyo@fotki.com",
          gender: "Female",
          status: "Inactive",
          role: "Administrator",
          account: "ezofis",
          avatar: "https://i.pravatar.cc/100",
        },
      ],
      rows2: [
        {
          id: 1,
          name: "Piper Lamers",
          email: "plamers0@4shared.com",
          gender: "Male",
          status: "Active",
          role: "User",
          account: "Microsoft",
        },
        {
          id: 2,
          name: "Tasia Jedraszczyk",
          email: "tjedraszczyk1@soundcloud.com",
          gender: "Male",
          status: "Active",
          role: "User",
          account: "ezofis",
        },
        {
          id: 3,
          name: "Fransisco Theobold",
          email: "ftheobold2@thetimes.co.uk",
          gender: "Male",
          status: "Inactive",
          role: "Administrator",
          account: "Google",
        },
        {
          id: 4,
          name: "Sibby Spridgeon",
          email: "sspridgeon3@theatlantic.com",
          gender: "Male",
          status: "Active",
          role: "User",
          account: "Google",
        },
        {
          id: 5,
          name: "Shawn Gatus",
          email: "sgatus4@fastcompany.com",
          gender: "Male",
          status: "Active",
          role: "User",
          account: "ezofis",
        },
        {
          id: 6,
          name: "Shara Sidle",
          email: "ssidle5@msn.com",
          gender: "Female",
          status: "Active",
          role: "Administrator",
          account: "Google",
        },
        {
          id: 7,
          name: "Nev Forsdyke",
          email: "nforsdyke6@imgur.com",
          gender: "Female",
          status: "Active",
          role: "Administrator",
          account: "Google",
        },
        {
          id: 8,
          name: "Oralee Delucia",
          email: "odelucia7@multiply.com",
          gender: "Female",
          status: "Active",
          role: "Administrator",
          account: "ezofis",
        },
        {
          id: 9,
          name: "Titus Delamere",
          email: "tdelamere8@technorati.com",
          gender: "Male",
          status: "Inactive",
          role: "User",
          account: "ezofis",
        },
        {
          id: 10,
          name: "Tracie Wadeson",
          email: "twadeson9@elegantthemes.com",
          gender: "Male",
          status: "Active",
          role: "Administrator",
          account: "Microsoft",
        },
      ],
      fetchingData1: false,
      fetchingData2: false,
      statusIndicatorColors: {
        Active: "green",
        Inactive: "red",
      },
      propList: [
        {
          id: this.$nano.id(),
          name: "columns",
          type: "Array",
          description: "Array of column objects",
          acceptedValues: "Array",
          defaultValue: "[ ]",
        },
        {
          id: this.$nano.id(),
          name: "rows",
          type: "Array",
          description: "Array of row objects",
          acceptedValues: "Array",
          defaultValue: "[ ]",
        },
        {
          id: this.$nano.id(),
          name: "fetchingData",
          type: "Boolean",
          description: "Displays the loading indicator if true",
          acceptedValues: "true | false",
          defaultValue: "false",
        },
        {
          id: this.$nano.id(),
          name: "hasAvatarColumn",
          type: "Boolean",
          description: "Displays the avatar if true",
          acceptedValues: "true | false",
          defaultValue: "false",
        },
        {
          id: this.$nano.id(),
          name: "showStatusIndicator",
          type: "Boolean",
          description: "Displays the status indicator if true",
          acceptedValues: "true | false",
          defaultValue: "false",
        },
        {
          id: this.$nano.id(),
          name: "statusIndicatorColors",
          type: "Object",
          description: "Quasar colors for the status indicators",
          acceptedValues: "",
          defaultValue: "",
        },
      ],
      eventList: [
        {
          id: this.$nano.id(),
          name: "reload",
          description: "Emitted when the reload button is clicked",
          parameters: "Native event",
        },
        {
          id: this.$nano.id(),
          name: "rowClick",
          description: "Emitted when a row or card is clicked",
          parameters: "row id",
        },
        {
          id: this.$nano.id(),
          name: "editRow",
          description: "Emitted when the edit button is clicked",
          parameters: "row id",
        },
        {
          id: this.$nano.id(),
          name: "deleteRow",
          description: "Emitted when the delete button is clicked",
          parameters: "row id",
        },
        {
          id: this.$nano.id(),
          name: "applyFilters",
          description: "Emitted when the filters are applied",
          parameters: "filter criteria",
        },
        {
          id: this.$nano.id(),
          name: "saveColumnPreference",
          description: "Emitted when the column preference is changed",
          parameters: "prefered columns",
        },
      ],
      slotList: [
        {
          id: this.$nano.id(),
          name: "custom-actions",
          description: "slot for custom actions",
        },
        {
          id: this.$nano.id(),
          name: "[column.name]",
          description: "slot for custom rows",
        },
      ],
      example: [
        `<EzDataView :columns="columns" :rows="rows" :total-rows="25" :fetching-data="fetchingData" @reload="handleReload"></EzDataView>`,
        `<EzDataView :columns="columns" :rows="rows" :total-rows="25" :fetching-data="fetchingData" @reload="handleReload">\n\t<template #status="{ value }">\n\t\t<span class="q-pa-xs text-weight-medium rounded-borders" :class="value === 'Inactive'? 'bg-red-1 text-red': 'bg-green-1 text-green'">\n\t\t\t{{ value }}\n\t\t</span>\n\t</template>\n</EzDataView>`,
        `<EzDataView :columns="columns" :rows="rows" :total-rows="25" :fetching-data="fetchingData" @reload="handleReload" @loadMore="loadMore"></EzDataView>`,
        `<EzDataView :columns="columns" :rows="rows" :total-rows="25" :fetching-data="fetchingData1" has-avatar-column @reload="handleReload"></EzDataView>`,
        `<EzDataView :columns="columns" :rows="rows1" :total-rows="25" :fetching-data="fetchingData1" show-status-indicator :status-indicator-colors="statusIndicatorColors" @reload="handleReload1"></EzDataView>`,
      ],
      options: [
        `columns: [
          {
            id: this.$nano.id(),
            label: "name",
            name: "name",
            sequence: 3,
            isVisible: true,
            isSortable: true,
            isGroupable: false,
            dataType: "STRING",
          },
          {
            id: this.$nano.id(),
            label: "email",
            name: "email",
            sequence: 1,
            isVisible: true,
            isSortable: true,
            isGroupable: false,
            dataType: "STRING",
          },
          {
            id: this.$nano.id(),
            label: "gender",
            name: "gender",
            sequence: 6,
            isVisible: false,
            isSortable: true,
            isGroupable: true,
            dataType: "STRING",
          },
          {
            id: this.$nano.id(),
            label: "status",
            name: "status",
            sequence: 2,
            isVisible: true,
            isSortable: true,
            isGroupable: true,
            dataType: "STRING",
          },
          {
            id: this.$nano.id(),
            label: "role",
            name: "role",
            sequence: 4,
            isVisible: true,
            isSortable: true,
            isGroupable: true,
            dataType: "STRING",
          },
          {
            id: this.$nano.id(),
            label: "account",
            name: "account",
            sequence: 5,
            isVisible: true,
            isSortable: true,
            isGroupable: true,
            dataType: "STRING",
          },
        ]`,
        `rows: [
          {
            id: 1,
            name: "Piper Lamers",
            email: "plamers0@4shared.com",
            gender: "Male",
            status: "Active",
            role: "User",
            account: "Microsoft",
            avatar: "https://i.pravatar.cc/100",
          },
          {
            id: 2,
            name: "Tasia Jedraszczyk",
            email: "tjedraszczyk1@soundcloud.com",
            gender: "Male",
            status: "Active",
            role: "User",
            account: "ezofis",
            avatar: "https://i.pravatar.cc/100",
          },
          {
            id: 3,
            name: "Fransisco Theobold",
            email: "ftheobold2@thetimes.co.uk",
            gender: "Male",
            status: "Inactive",
            role: "Administrator",
            account: "Google",
            avatar: "https://i.pravatar.cc/100",
          },
          ...
        ],`,
        `statusIndicatorColors: { Active: "green", Inactive: "red" }`,
      ],
    };
  },

  methods: {
    handleReload1() {
      const rows = this.rows1;
      this.fetchingData1 = true;
      this.rows1 = [];

      setTimeout(() => {
        this.rows1 = rows;
        this.fetchingData1 = false;
      }, 2000);
    },

    handleReload2() {
      const rows = this.rows2;
      this.fetchingData2 = true;
      this.rows2 = [];

      setTimeout(() => {
        this.rows2 = rows;
        this.fetchingData2 = false;
      }, 2000);
    },

    loadMore() {
      this.fetchingData2 = true;
      setTimeout(() => {
        this.rows2.push(
          ...[
            {
              id: 11,
              name: "Cosette Hostan",
              email: "chostana@1688.com",
              gender: "Male",
              status: "Inactive",
              role: "User",
              account: "Microsoft",
            },
            {
              id: 12,
              name: "Gilbertine Gowland",
              email: "ggowlandb@histats.com",
              gender: "Female",
              status: "Active",
              role: "User",
              account: "ezofis",
            },
            {
              id: 13,
              name: "Grange Butrimovich",
              email: "gbutrimovichc@360.cn",
              gender: "Male",
              status: "Inactive",
              role: "Administrator",
              account: "ezofis",
            },
            {
              id: 14,
              name: "Gabriella Degg",
              email: "gdeggd@edublogs.org",
              gender: "Male",
              status: "Inactive",
              role: "Administrator",
              account: "ezofis",
            },
            {
              id: 15,
              name: "Lexie Etter",
              email: "lettere@hc360.com",
              gender: "Male",
              status: "Inactive",
              role: "User",
              account: "Google",
            },
            {
              id: 16,
              name: "Connor Phonix",
              email: "cphonixf@barnesandnoble.com",
              gender: "Male",
              status: "Inactive",
              role: "Administrator",
              account: "Microsoft",
            },
            {
              id: 17,
              name: "Jannel O'Hannigan",
              email: "johannigang@infoseek.co.jp",
              gender: "Female",
              status: "Inactive",
              role: "Administrator",
              account: "ezofis",
            },
            {
              id: 18,
              name: "Morgen Sexon",
              email: "msexonh@i2i.jp",
              gender: "Male",
              status: "Active",
              role: "Administrator",
              account: "Microsoft",
            },
            {
              id: 19,
              name: "Abbe Riggey",
              email: "ariggeyi@upenn.edu",
              gender: "Male",
              status: "Inactive",
              role: "Administrator",
              account: "Google",
            },
            {
              id: 20,
              name: "Zed Girk",
              email: "zgirkj@nps.gov",
              gender: "Male",
              status: "Inactive",
              role: "User",
              account: "ezofis",
            },
            {
              id: 21,
              name: "Rachel Shillaker",
              email: "rshillakerk@xing.com",
              gender: "Male",
              status: "Active",
              role: "User",
              account: "Google",
            },
            {
              id: 22,
              name: "Merilyn Matusovsky",
              email: "mmatusovskyl@nasa.gov",
              gender: "Male",
              status: "Active",
              role: "Administrator",
              account: "Google",
            },
            {
              id: 23,
              name: "Cam Dufton",
              email: "cduftonm@discuz.net",
              gender: "Male",
              status: "Active",
              role: "Administrator",
              account: "Google",
            },
            {
              id: 24,
              name: "Harriett Lynam",
              email: "hlynamn@theguardian.com",
              gender: "Male",
              status: "Active",
              role: "Administrator",
              account: "Microsoft",
            },
            {
              id: 25,
              name: "Ritchie Camsey",
              email: "rcamseyo@fotki.com",
              gender: "Female",
              status: "Inactive",
              role: "Administrator",
              account: "ezofis",
            },
          ]
        );
        this.fetchingData2 = false;
      }, 2000);
    },
  },
};
</script>

<style lang="scss" scoped></style>
