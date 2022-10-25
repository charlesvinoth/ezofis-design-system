<template>
  <Layout>
    <template #drawer>
      <DocNavigation
        title="get started"
        titleIcon="eva-pantone-outline"
        :routes="childRoutes"
      ></DocNavigation>
    </template>

    <template #default>
      <router-view />
    </template>
  </Layout>
</template>

<script>
const Layout = () => import("@/layouts/main/index");

const DocNavigation = () => import("@/components/doc-navigation/index");

export default {
  name: "DirectivesPage",

  components: {
    Layout,
    DocNavigation,
  },

  data() {
    return {
      childRoutes: [
        {
          id: this.$nano.id(),
          label: "Tooltip",
          route: "Tooltip",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
