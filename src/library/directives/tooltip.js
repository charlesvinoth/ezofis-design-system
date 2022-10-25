import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

export default {
  bind: (el, binding) => {
    if (!binding.value) return;

    tippy(el, {
      content: binding.value,
      theme: "dark",
      placement: binding.arg || "auto",
    });
  },
};
