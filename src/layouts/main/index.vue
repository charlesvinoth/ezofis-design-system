<template>
  <q-layout view="hHh lpR fff">
    <!-- toolbar -->

    <Toolbar @toggle="toggleDrawer"></Toolbar>

    <!-- ... -->

    <!-- drawer -->

    <Drawer v-if="!hideDrawer" v-model="drawer">
      <slot name="drawer"></slot>
    </Drawer>

    <!-- ... -->

    <!-- page -->

    <q-page-container>
      <EzScrollbar height="calc(100vh - 61px)">
        <slot></slot>
      </EzScrollbar>
    </q-page-container>

    <!-- ... -->
  </q-layout>
</template>

<script>
const EzScrollbar = () => import("@/library/components/ez-scrollbar/index");

const Toolbar = () => import("./toolbar/index");
const Drawer = () => import("./drawer/index");

export default {
  name: "Layout",

  components: { EzScrollbar, Toolbar, Drawer },

  props: {
    hideDrawer: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      drawer: true,
    };
  },

  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style lang="scss" scoped></style>
