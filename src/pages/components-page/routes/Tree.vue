<template>
  <DocApi
    author="Charles Vinoth"
    version="1.0"
    :prop-list="propList"
    :event-list="eventList"
  >
    <template #title>Tree</template>

    <template #description>
      ezofis has a component called <b>EzTree</b>, which can be used to display
      a set of data with hierarchies.
    </template>

    <template #usage>
      <!-- default -->

      <DocExample title="Default" :code="example[0]">
        <template #example>
          <EzTree :nodes="nodes" @select="handleSelect"></EzTree>
        </template>

        <template #options>
          <pre class="language-javascript"><code>{{options[0]}}</code></pre>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- lazy load -->

      <DocExample title="lazy load" :code="example[1]">
        <template #example>
          <EzTree
            :nodes="lazyNodes"
            @select="handleSelect"
            @lazyLoad="handleLazyLoad"
          ></EzTree>
        </template>
      </DocExample>

      <!-- ... -->
    </template>
  </DocApi>
</template>

<script>
const EzTree = () => import("@/library/components/ez-tree/index");
const DocApi = () => import("@/components/doc-api/index");
const DocExample = () => import("@/components/doc-example/index");

export default {
  name: "tree",

  components: { EzTree, DocApi, DocExample },

  data() {
    return {
      nodes: [
        {
          id: this.$nano.id(),
          label: "Workflows",
          selectable: false,
          children: [
            {
              id: this.$nano.id(),
              label: "Invoice Approval",
              selectable: false,
              children: [
                {
                  id: this.$nano.id(),
                  label: "Inbox",
                  icon: "inbox",
                  iconColor: "blue",
                },
                {
                  id: this.$nano.id(),
                  label: "Processing",
                  icon: "hourglass_bottom",
                  iconColor: "deep-orange",
                },
                {
                  id: this.$nano.id(),
                  label: "Completed",
                  icon: "eva-checkmark-circle",
                  iconColor: "green",
                },
              ],
            },
            {
              id: this.$nano.id(),
              label: "Leave Approval",
              selectable: false,
              children: [
                {
                  id: this.$nano.id(),
                  label: "Inbox",
                  icon: "inbox",
                  iconColor: "blue",
                },
                {
                  id: this.$nano.id(),
                  label: "Processing",
                  icon: "hourglass_bottom",
                  iconColor: "deep-orange",
                },
                {
                  id: this.$nano.id(),
                  label: "Completed",
                  icon: "eva-checkmark-circle",
                  iconColor: "green",
                },
              ],
            },
            {
              id: this.$nano.id(),
              label: "Quotation Approval",
              selectable: false,
              children: [
                {
                  id: this.$nano.id(),
                  label: "Inbox",
                  icon: "inbox",
                  iconColor: "blue",
                },
                {
                  id: this.$nano.id(),
                  label: "Processing",
                  icon: "hourglass_bottom",
                  iconColor: "deep-orange",
                },
                {
                  id: this.$nano.id(),
                  label: "Completed",
                  icon: "eva-checkmark-circle",
                  iconColor: "green",
                },
              ],
            },
          ],
        },
      ],
      lazyNodes: [
        {
          id: this.$nano.id(),
          label: "Workflows",
          selectable: false,
          lazy: true,
          children: [],
        },
      ],
      propList: [
        {
          id: this.$nano.id(),
          name: "nodes",
          type: "Array",
          description: "Tree nodes",
          acceptedValues: "Array of tree node objects",
          defaultValue: "",
        },
      ],
      eventList: [
        {
          id: this.$nano.id(),
          name: "select",
          description: "Emitted when a selectable tree node is selected",
          parameters: "Node id",
        },
      ],
      example: [
        '<EzTree :nodes="nodes" @select="handleSelect"></EzTree>',
        '<EzTree :nodes="nodes" @select="handleSelect" @lazyLoad="handleLazyLoad" ></EzTree>',
      ],
      options: [
        `nodes: [
          {
            id: this.$nano.id(),
            label: "Workflows",
            selectable: false,
            lazy: false,
            children: [
              {
                id: this.$nano.id(),
                label: "Invoice Approval",
                selectable: false,
                lazy: false,
                children: [
                  {
                    id: this.$nano.id(),
                    label: "Inbox",
                    icon: "inbox",
                    iconColor: "blue",
                  },
                  {
                    id: this.$nano.id(),
                    label: "Processing",
                    icon: "hourglass_bottom",
                    iconColor: "deep-orange",
                  },
                  {
                    id: this.$nano.id(),
                    label: "Completed",
                    icon: "eva-checkmark-circle",
                    iconColor: "green",
                  },
                ],
              },
              {
                id: this.$nano.id(),
                label: "Leave Approval",
                selectable: false,
                lazy: false,
                children: [
                  {
                    id: this.$nano.id(),
                    label: "Inbox",
                    icon: "inbox",
                    iconColor: "blue",
                  },
                  {
                    id: this.$nano.id(),
                    label: "Processing",
                    icon: "hourglass_bottom",
                    iconColor: "deep-orange",
                  },
                  {
                    id: this.$nano.id(),
                    label: "Completed",
                    icon: "eva-checkmark-circle",
                    iconColor: "green",
                  },
                ],
              },
              {
                id: this.$nano.id(),
                label: "Quotation Approval",
                selectable: false,
                lazy: false,
                children: [
                  {
                    id: this.$nano.id(),
                    label: "Inbox",
                    icon: "inbox",
                    iconColor: "blue",
                  },
                  {
                    id: this.$nano.id(),
                    label: "Processing",
                    icon: "hourglass_bottom",
                    iconColor: "deep-orange",
                  },
                  {
                    id: this.$nano.id(),
                    label: "Completed",
                    icon: "eva-checkmark-circle",
                    iconColor: "green",
                  },
                ],
              },
            ],
          },
        ]`,
      ],
    };
  },

  methods: {
    handleSelect(nodeId) {
      console.log(nodeId);
    },

    handleLazyLoad({ node, key, done, fail }) {
      console.log({ node, key, done, fail });

      const workflows = [
        {
          id: this.$nano.id(),
          label: "Invoice Approval",
          selectable: false,
          lazy: true,
        },
        {
          id: this.$nano.id(),
          label: "Leave Approval",
          selectable: false,
          lazy: true,
        },
        {
          id: this.$nano.id(),
          label: "Quotation Approval",
          selectable: false,
          lazy: true,
        },
      ];

      const children = [
        {
          id: this.$nano.id(),
          label: "Inbox (0/0)",
          icon: "inbox",
          iconColor: "blue",
        },
        {
          id: this.$nano.id(),
          label: "Processing (0)",
          icon: "hourglass_bottom",
          iconColor: "deep-orange",
        },
        {
          id: this.$nano.id(),
          label: "Completed (0)",
          icon: "eva-checkmark-circle",
          iconColor: "green",
        },
      ];

      setTimeout(() => {
        done(node.label === "Workflows" ? workflows : children);
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped></style>
