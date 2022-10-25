<template>
  <div class="card">
    <!-- picker -->

    <Picker
      @input="handleInput"
      :is-multiple="isMultiple"
      :acceptable-file-types="acceptableFileTypes"
    >
      <template #hint>
        <slot name="hint"> Each file should be less than or equals 1 mb </slot>
      </template>
    </Picker>

    <!-- ... -->

    <!-- uploader -->

    <Uploader
      v-if="files.length"
      :files="files"
      :validate-file-size="validateFileSize"
    ></Uploader>

    <!-- ... -->
  </div>
</template>

<script>
const Picker = () => import("./components/picker");
const Uploader = () => import("./components/uploader");

export default {
  name: "EzFileUploader",

  components: { Picker, Uploader },

  props: {
    isMultiple: {
      type: Boolean,
      default: false,
    },

    acceptableFileTypes: {
      type: String,
      default: "",
    },

    totalFileSize: {
      type: Number,
      default: 10,
    },

    singleFileSize: {
      type: Number,
      default: 1,
    },

    validateFileSize: {
      type: String,
      default: "", // single | total | both
    },
  },

  data() {
    return {
      files: [],
    };
  },

  methods: {
    handleInput(files) {
      this.files = files;
    },
  },
};
</script>

<style lang="scss" scoped></style>
