<template>
  <Layout hide-drawer>
    <div class="q-pa-lg">
      <div class="text-6 text-weight-bold q-mb-sm text-capitalize">
        Changelog
      </div>

      <div class="q-mb-xl text-3 text-gray-8">
        Please briefly describe the specific changes you have made in each
        version.
      </div>

      <div class="card q-pa-lg">
        <div class="text-4 text-weight-medium q-mb-lg">v1.0.0</div>

        <ul>
          <li class="text-2 text-gray-8">Initial release</li>
        </ul>
      </div>
    </div>
  </Layout>
</template>

<script>
const Layout = () => import("@/layouts/main/index");

export default {
  name: "ChangelogPage",

  components: {
    Layout,
  },
};
</script>

<style lang="scss" scoped></style>
