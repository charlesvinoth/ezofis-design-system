export default {
  install(Vue) {
    Vue.prototype.$alert = {
      default(message) {
        return Vue.prototype.$q.notify(message);
      },

      positive(message) {
        return Vue.prototype.$q.notify({ message, color: "green" });
      },

      negative(message) {
        return Vue.prototype.$q.notify({ message, color: "red" });
      },

      warning(message) {
        return Vue.prototype.$q.notify({ message, color: "amber-10" });
      },

      info(message) {
        return Vue.prototype.$q.notify({ message, color: "light-blue" });
      },

      custom({ message, color, textColor }) {
        return Vue.prototype.$q.notify({ message, color, textColor });
      },
    };
  },
};
