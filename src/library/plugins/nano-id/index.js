import { nanoid } from "nanoid";

export default {
  install(Vue) {
    Vue.prototype.$nano = {
      id() {
        return nanoid();
      },
    };
  },
};
