import Vue from "vue";
import VueRouter from "vue-router";

import MiscRoutes from "@/pages/misc-page/routes/index.js";
import ComponentRoutes from "@/pages/components-page/routes/index.js";
import PluginRoutes from "@/pages/plugins-page/routes/index.js";
import DirectiveRoutes from "@/pages/directives-page/routes/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Components",
    meta: { menu: "Components" },
    component: () =>
      import(
        /* webpackChunkName: "Components" */ "@/pages/components-page/index"
      ),
    children: ComponentRoutes,
  },
  {
    path: "/Plugins",
    name: "Plugins",
    meta: { menu: "Plugins" },
    component: () =>
      import(/* webpackChunkName: "Plugins" */ "@/pages/plugins-page/index"),
    children: PluginRoutes,
  },
  {
    path: "/Directives",
    name: "Directives",
    meta: { menu: "Directives" },
    component: () =>
      import(
        /* webpackChunkName: "Directives" */ "@/pages/directives-page/index"
      ),
    children: DirectiveRoutes,
  },
  {
    path: "/Misc",
    name: "Misc",
    meta: { menu: "Misc" },
    component: () =>
      import(/* webpackChunkName: "Misc" */ "@/pages/misc-page/index.vue"),
    children: MiscRoutes,
  },
  {
    path: "/Changelog",
    name: "Changelog",
    meta: { menu: "Changelog" },
    component: () =>
      import(
        /* webpackChunkName: "Changelog" */ "@/pages/changelog-page/index.vue"
      ),
  },
  {
    path: "/Print",
    name: "Print",
    component: () =>
      import(
        /* webpackChunkName: "Components" */ "@/library/components/ez-print/index"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
