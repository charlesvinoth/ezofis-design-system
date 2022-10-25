const MiscRoutes = [
  {
    path: "/Typography",
    name: "Typography",
    meta: { menu: "Misc" },
    component: () => import("@/pages/misc-page/routes/Typography"),
  },
  {
    path: "/Colors",
    name: "Colors",
    meta: { menu: "Misc" },
    component: () => import("@/pages/misc-page/routes/Colors"),
  },
];

export default MiscRoutes;
