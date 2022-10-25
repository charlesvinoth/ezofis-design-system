<template>
  <SimpleBar data-simplebar-auto-hide="false" :style="{ height, width }">
    <slot />
  </SimpleBar>
</template>

<script>
import SimpleBar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";

export default {
  name: "EzScrollbar",

  components: { SimpleBar },

  props: {
    height: {
      type: String,
      default: "100%",
    },

    width: {
      type: String,
      default: "100%",
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/quasar.variables.scss";

.simplebar-scrollbar:before {
  left: 0 !important;
  right: 0 !important;
  top: 0 !important;
  bottom: 0 !important;
  border-radius: 0 !important;
}

.simplebar-track.simplebar-vertical {
  width: 8px !important;
}

.simplebar-track.simplebar-horizontal,
.simplebar-track.simplebar-horizontal .simplebar-scrollbar {
  height: 8px !important;
}

.simplebar-track.simplebar-horizontal .simplebar-scrollbar {
  top: 0px;
}

.simplebar-scrollbar.simplebar-visible:before {
  opacity: 0.4;
}
</style>
