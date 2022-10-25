import Vue from "vue";

import "./styles/quasar.scss";
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/material-icons-outlined/material-icons-outlined.css";
import "@quasar/extras/mdi-v4/mdi-v4.css";
import "@quasar/extras/eva-icons/eva-icons.css";
import { Quasar, SessionStorage, Notify } from "quasar";

Vue.use(Quasar, {
  config: {
    notify: {
      position: "bottom-right",
      timeout: 2000,
      color: "primary",
      textColor: "white",
      progress: true,
      actions: [{ icon: "close", color: "white" }],
      classes: "text-weight-medium",
    },
  },
  plugins: {
    SessionStorage,
    Notify,
  },
});
