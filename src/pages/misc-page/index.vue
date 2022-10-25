<template>
  <Layout>
    <template #drawer>
      <DocNavigation
        title="miscellaneous"
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
  name: "MiscPage",

  components: {
    Layout,
    DocNavigation,
  },

  data() {
    return {
      childRoutes: [
        {
          id: this.$nano.id(),
          label: "Typography",
          route: "Typography",
        },
        {
          id: this.$nano.id(),
          label: "Colors",
          route: "Colors",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
