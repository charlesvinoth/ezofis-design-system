<template>
  <q-tree
    :nodes="nodes"
    default-expand-all
    node-key="id"
    color="gray-4"
    :selected.sync="selectedNode"
    @lazy-load="handleLazyLoad"
  >
    <template v-slot:default-header="prop">
      <div class="row items-center">
        <q-icon
          v-if="prop.node.icon"
          :name="prop.node.icon"
          :color="prop.node.iconColor"
          size="20px"
          class="q-mr-sm"
        />

        <div
          class="text-3 text-gray-10"
          :class="{
            'text-weight-bold': selectedNode === prop.node.id,
          }"
        >
          {{ prop.node.label }}
        </div>
      </div>
    </template>
  </q-tree>
</template>

<script>
export default {
  name: "EzTree",

  props: {
    nodes: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      selectedNode: "",
    };
  },

  watch: {
    selectedNode() {
      this.$emit("select", this.selectedNode);
    },
  },

  methods: {
    handleLazyLoad({ node, key, done, fail }) {
      this.$emit("lazyLoad", { node, key, done, fail });
    },
  },
};
</script>

<style lang="scss" scoped></style>
