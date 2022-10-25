import Vue from "vue";

/* plugins */

import nanoid from "@/library/plugins/nano-id/index";
Vue.use(nanoid);

import day from "@/library/plugins/day/index";
Vue.use(day);

import alert from "@/library/plugins/alert/index";
Vue.use(alert);

/* ... */

/* directives */

import tooltip from "@/library/directives/tooltip";
Vue.directive("tooltip", tooltip);

/* ... */

/* signature pad */

import VueSignaturePad from "vue-signature-pad";
Vue.use(VueSignaturePad);

/* ... */
