import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./quasar";

/* ezofis design system */

import "./library/index";

/* ... */

/* code highlighter */

import "prismjs/themes/prism.css";
import VuePrism from "vue-prism";
Vue.use(VuePrism);

/* ... */

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
