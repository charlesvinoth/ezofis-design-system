const PluginRoutes = [
  {
    path: "/NanoId",
    name: "NanoId",
    meta: { menu: "Plugins" },
    component: () => import("@/pages/plugins-page/routes/NanoId"),
  },
  {
    path: "/Day",
    name: "Day",
    meta: { menu: "Plugins" },
    component: () => import("@/pages/plugins-page/routes/Day"),
  },
  {
    path: "/Alert",
    name: "Alert",
    meta: { menu: "Plugins" },
    component: () => import("@/pages/plugins-page/routes/Alert"),
  },
];

export default PluginRoutes;
