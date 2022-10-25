<template>
  <Layout>
    <template #drawer>
      <DocNavigation
        title="components"
        titleIcon="eva-cube-outline"
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
  name: "ComponentsPage",

  components: { Layout, DocNavigation },

  data() {
    return {
      childRoutes: [
        {
          id: this.$nano.id(),
          label: "Button",
          route: "Button",
        },
        {
          id: this.$nano.id(),
          label: "Scrollbar",
          route: "Scrollbar",
        },
        {
          id: this.$nano.id(),
          label: "Breadcrumbs",
          route: "Breadcrumbs",
        },
        {
          id: this.$nano.id(),
          label: "Empty State",
          route: "EmptyState",
        },
        {
          id: this.$nano.id(),
          label: "Fab",
          route: "Fab",
        },
        {
          id: this.$nano.id(),
          label: "Modal",
          route: "Modal",
        },
        {
          id: this.$nano.id(),
          label: "Prompt",
          route: "Prompt",
        },
        {
          id: this.$nano.id(),
          label: "Pagination",
          route: "Pagination",
        },
        {
          id: this.$nano.id(),
          label: "Pulse",
          route: "Pulse",
        },
        {
          id: this.$nano.id(),
          label: "Tabs",
          route: "Tabs",
        },
        {
          id: this.$nano.id(),
          label: "Stepper",
          route: "Stepper",
        },
        {
          id: this.$nano.id(),
          label: "Sheet",
          route: "Sheet",
        },
        {
          id: this.$nano.id(),
          label: "Signature",
          route: "Signature",
        },
        {
          id: this.$nano.id(),
          label: "Choose",
          route: "Choose",
        },
        {
          id: this.$nano.id(),
          label: "Label",
          route: "Label",
        },
        {
          id: this.$nano.id(),
          label: "Error",
          route: "Error",
        },
        {
          id: this.$nano.id(),
          label: "Field",
          route: "Field",
        },
        {
          id: this.$nano.id(),
          label: "Input",
          route: "Input",
        },
        {
          id: this.$nano.id(),
          label: "Date",
          route: "Date",
        },
        {
          id: this.$nano.id(),
          label: "Time",
          route: "Time",
        },
        {
          id: this.$nano.id(),
          label: "Color",
          route: "Color",
        },
        {
          id: this.$nano.id(),
          label: "Spinner",
          route: "Spinner",
        },
        {
          id: this.$nano.id(),
          label: "Select",
          route: "Select",
        },
        {
          id: this.$nano.id(),
          label: "Textarea",
          route: "Textarea",
        },
        {
          id: this.$nano.id(),
          label: "File Uploader",
          route: "FileUploader",
        },
        {
          id: this.$nano.id(),
          label: "Image Uploader",
          route: "ImageUploader",
        },
        {
          id: this.$nano.id(),
          label: "Accordion",
          route: "Accordion",
        },
        {
          id: this.$nano.id(),
          label: "Chip",
          route: "Chip",
        },
        {
          id: this.$nano.id(),
          label: "Tree",
          route: "Tree",
        },
        {
          id: this.$nano.id(),
          label: "Data View",
          route: "DataView",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
