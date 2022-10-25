<template>
  <q-header class="border-bottom border-gray-2 bg-white">
    <q-toolbar style="height: 60px" class="no-padding">
      <Mark class="q-mr-md"></Mark>

      <!-- logo -->

      <img src="@/assets/logo/logo-6.png" height="26" />

      <!-- ... -->

      <!-- drawer toggle -->

      <q-btn
        dense
        flat
        round
        color="gray-5"
        class="q-mx-lg gt-sm"
        @click="toggleDrawer"
      >
        <q-icon name="eva-bar-chart" size="20px" class="rotate-90"></q-icon>
      </q-btn>

      <!-- ... -->

      <q-space></q-space>

      <!-- links -->

      <div
        v-for="link in links"
        :key="link.id"
        class="gt-sm link label-3"
        @click="goTo(link.route)"
      >
        <div class="muted">
          {{ link.label }}
        </div>
        <div :class="activeRoute === link.route ? 'active' : 'filled'">
          {{ link.label }}
        </div>
      </div>

      <!-- ... -->

      <EzFab is-flat icon="apps" color="gray-5" class="q-mx-md lt-md">
        <template #menu>
          <q-menu>
            <div
              v-for="link in links"
              :key="link.id"
              class="q-px-lg q-py-sm text-capitalize hover"
              @click="goTo(link.route)"
            >
              {{ link.label }}
            </div>
          </q-menu>
        </template>
      </EzFab>
    </q-toolbar>
  </q-header>
</template>

<script>
const EzFab = () => import("@/library/components/ez-fab/index");
const Mark = () => import("./mark");

export default {
  name: "Toolbar",

  components: { EzFab, Mark },

  data() {
    return {
      activeRoute: "Components",
      links: [
        {
          id: this.$nano.id(),
          label: "Components",
          route: "Components",
        },
        {
          id: this.$nano.id(),
          label: "Directives",
          route: "Directives",
        },
        {
          id: this.$nano.id(),
          label: "Plugins",
          route: "Plugins",
        },
        {
          id: this.$nano.id(),
          label: "misc",
          route: "Misc",
        },
        {
          id: this.$nano.id(),
          label: "Changelog",
          route: "Changelog",
        },
      ],
    };
  },

  watch: {
    $route: {
      immediate: true,
      handler: function () {
        this.activeRoute = this.$router.currentRoute.meta.menu;
      },
    },
  },

  methods: {
    toggleDrawer() {
      this.$emit("toggle");
    },

    goTo(route) {
      this.$router.push({ name: route });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/quasar.variables";

.link {
  position: relative;
  padding: 16px 16px;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.muted {
  color: $gray-5;
}

.active,
.filled {
  position: absolute;
  top: 16px;
  left: 16px;
  color: $secondary;
}

.active {
  color: $secondary;
}

.filled {
  width: 0%;
  overflow: hidden;
  color: $gray-6;
  transition: all 0.5s;
}

.link:hover .filled {
  width: 100%;
}
</style>
