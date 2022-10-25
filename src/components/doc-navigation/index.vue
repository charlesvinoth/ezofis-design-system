<template>
  <EzScrollbar height="calc(100vh - 61px)">
    <!-- title -->

    <div
      v-if="title"
      class="label-1 text-uppercase q-px-md q-py-lg text-gray-5"
    >
      {{ title }}
    </div>

    <!-- ... -->

    <!-- route list -->

    <div
      v-for="_route in _routes"
      :key="_route.id"
      class="q-px-md q-py-sm text-3 hover"
      :class="{ active: activeRoute === _route.route }"
      @click="goTo(_route.route)"
    >
      {{ _route.label }}
    </div>

    <!-- ... -->
  </EzScrollbar>
</template>

<script>
import { sortBy } from "lodash";

const EzScrollbar = () => import("@/library/components/ez-scrollbar/index");

export default {
  name: "DocNavigation",

  components: { EzScrollbar },

  props: {
    title: {
      type: String,
      default: "",
    },

    titleIcon: {
      type: String,
      default: "",
    },

    routes: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      activeRoute: "",
    };
  },

  computed: {
    _routes() {
      return sortBy(this.routes, "label");
    },
  },

  watch: {
    $route: {
      immediate: true,
      handler: function () {
        this.activeRoute = this.$route.currentRoute.name;
      },
    },
  },

  created() {
    if (this.$route.name === this.$route.meta.menu) {
      this.goTo(this._routes[0].route);
    }
  },

  methods: {
    goTo(route) {
      this.$router.push({ name: route });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/quasar.variables.scss";

.active {
  color: $secondary;
  font-weight: 500;
  background: rgb(224, 247, 250);
  background: linear-gradient(
    90deg,
    rgba(224, 247, 250, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
}
</style>
