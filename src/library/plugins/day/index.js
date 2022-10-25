import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export default {
  install(Vue) {
    Vue.prototype.$day = {
      now() {
        return dayjs().format("DD MMM YYYY hh:mm A");
      },

      iso() {
        return dayjs().format();
      },

      isValidDate(date) {
        return dayjs(date, "DD/MM/YYYY", true).isValid();
      },
    };
  },
};
