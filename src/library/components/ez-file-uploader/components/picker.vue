<template>
  <div
    class="relative-position rounded-borders"
    :class="dragOver ? 'border-dashed border-secondary' : ''"
    @dragover="dragOver = true"
    @dragleave="dragOver = false"
  >
    <!-- hint -->

    <div class="q-pa-lg text-center">
      <q-icon
        name="eva-cloud-upload-outline"
        :color="dragOver ? 'secondary' : 'gray-4'"
        size="100px"
      ></q-icon>

      <div class="text-3 text-weight-bold q-mt-sm q-mb-xs">
        <span>Drag & Drop your file{{ isMultiple ? "s" : "" }} here or</span>
        <span class="text-secondary"> Browse </span>
      </div>

      <div class="text-2 text-gray-5">
        <slot name="hint"></slot>
      </div>
    </div>

    <!-- ... -->

    <!-- dropzone -->

    <div class="absolute-center full-height full-width dropzone">
      <input
        ref="dropzone"
        type="file"
        :accept="acceptableFileTypes"
        class="full-height full-width cursor-pointer"
        :multiple="isMultiple"
        @input="handleInput"
      />
    </div>

    <!-- ... -->
  </div>
</template>

<script>
export default {
  name: "Picker",

  props: {
    isMultiple: {
      type: Boolean,
      default: false,
    },

    acceptableFileTypes: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      dragOver: false,
    };
  },

  methods: {
    handleInput(e) {
      this.$emit("input", Array.from(e.target.files));
      this.dragOver = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.dropzone {
  opacity: 0;
  overflow: hidden;
}
</style>
