const DirectiveRoutes = [
  {
    path: "/Tooltip",
    name: "Tooltip",
    meta: { menu: "Directives" },
    component: () => import("@/pages/directives-page/routes/Tooltip"),
  },
];

export default DirectiveRoutes;
