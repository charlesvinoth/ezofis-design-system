<template>
  <div class="border-top border-gray-2">
    <div
      v-for="(file, idx) in fileList"
      :key="file.id"
      class="row items-center q-px-md q-py-sm"
      :class="{ 'border-bottom': idx !== fileList.length - 1 }"
    >
      <!-- icon -->

      <img :src="file.icon" height="32" />

      <!-- ... -->

      <!-- description -->

      <div class="col q-mx-md">
        <div class="text-3 text-weight-bold">{{ file.name }}</div>

        <div class="text-1 text-gray-5">
          <span>{{ file.timestamp }}</span>

          <span class="q-mx-xs">|</span>

          <span :class="{ 'text-red': file.error }">
            <b>{{ file.humanReadableSize }}</b>
          </span>

          <span v-if="file.error" class="text-lowercase text-red q-ml-xs">
            - {{ file.error }}
          </span>
        </div>
      </div>

      <!-- ... -->

      <!-- progress -->

      <q-circular-progress
        :value="file.progress"
        show-value
        size="48px"
        :thickness="0.22"
        color="green-5"
        track-color="gray-2"
      >
        <div class="text-3 text-weight-medium">{{ file.progress }}%</div>
      </q-circular-progress>

      <!-- ... -->
    </div>

    <div v-if="fileSizeError" class="text-red text-1 q-ma-md">
      {{ fileSizeError }}
    </div>
  </div>
</template>

<script>
import { random } from "lodash";

export default {
  name: "Uploader",

  props: {
    files: {
      type: Array,
      default: () => [],
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
      default: "",
    },
  },

  data() {
    return {
      fileList: [],
      fileSizeError: "",
    };
  },

  watch: {
    files: {
      immediate: true,
      handler: "processFiles",
    },
  },

  methods: {
    formatBytes(bytes, decimals = 2) {
      if (bytes === 0) return "0 Bytes";

      const k = 1024;
      const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      const size = Math.floor(Math.log(bytes) / Math.log(k));

      return `${parseFloat((bytes / Math.pow(k, size)).toFixed(decimals))} ${
        sizes[size]
      }`;
    },

    fileIcon(fileName) {
      const fileType = fileName.split(".").reverse()[0];

      const validTypes = [
        "pdf",
        "doc",
        "docx",
        "xls",
        "xlsx",
        "ppt",
        "pptx",
        "jpg",
        "png",
        "tiff",
        "text",
        "zip",
        "7z",
        "rar",
        "csv",
        "txt",
      ];

      const icon = validTypes.includes(fileType) ? fileType : "file";
      return require(`@/assets/files/${icon}.png`);
    },

    validateSingleFileSize() {
      this.fileList.forEach((file) => {
        const maxSize = this.singleFileSize * 1024 * 1024;

        if (file.size > maxSize) {
          file.error = `File size should be less than or equals ${this.formatBytes(
            maxSize
          )}`;
          file.progress = 0;
        } else {
          file.error = "";
        }
      });
    },

    validateTotalFileSize() {
      const maxSize = this.totalFileSize * 1024 * 1024;
      let totalSize = 0;

      this.fileList.forEach((file) => {
        totalSize += file.size;
      });

      if (totalSize > maxSize) {
        this.fileSizeError = `Total file size should be less than or equals ${this.formatBytes(
          maxSize
        )}`;

        this.fileList.forEach((file) => {
          file.progress = 0;
        });
      } else {
        this.fileSizeError = "";
      }
    },

    validateFiles() {
      if (this.validateFileSize === "single") this.validateSingleFileSize();
      if (this.validateFileSize === "total") this.validateTotalFileSize();
      if (this.validateFileSize === "both") {
        this.validateSingleFileSize();
        this.validateTotalFileSize();
      }
    },

    processFiles() {
      this.fileList = this.files.map((file) => {
        return {
          id: this.$nano.id(),
          name: file.name,
          size: file.size,
          humanReadableSize: this.formatBytes(file.size),
          timestamp: this.$day.now(),
          icon: this.fileIcon(file.name),
          progress: random(30, 90),
          error: "",
        };
      });

      this.validateFiles();
    },
  },
};
</script>

<style lang="scss" scoped></style>
