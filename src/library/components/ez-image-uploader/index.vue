<template>
  <div class="inline-block">
    <Cropper
      v-if="showCropper"
      :width="width"
      :height="height"
      :is-rounded="isRounded"
      :hide-preview="hidePreview"
      :hide-border="hideBorder"
      :aspect-ratio="_aspectRatio"
      :original-image="originalImage"
      @cancel="resetImage"
      @crop="cropImage"
    ></Cropper>

    <Picker
      v-else
      :width="width"
      :height="height"
      :is-rounded="isRounded"
      :hide-border="hideBorder"
      :cropped-image="croppedImage"
      @input="handleImage"
    ></Picker>
  </div>
</template>

<script>
const Picker = () => import("./components/picker");
const Cropper = () => import("./components/cropper");

export default {
  name: "EzImageUploader",

  components: {
    Picker,
    Cropper,
  },

  props: {
    isRounded: {
      type: Boolean,
      default: false,
    },

    aspectRatio: {
      type: String,
      default: "1:1",
    },

    hidePreview: {
      type: Boolean,
      default: false,
    },

    hideBorder: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      showCropper: false,
      imageFile: "",
      originalImage: "",
      croppedImage: "",
    };
  },

  computed: {
    validAspectRatio() {
      const validAspectRatios = {
        "1:1": {
          width: "256px",
          height: "256px",
          ratio: 1 / 1,
        },
        "16:9": {
          width: "256px",
          height: "144px",
          ratio: 16 / 9,
        },
        "4:3": {
          width: "256px",
          height: "192px",
          ratio: 4 / 3,
        },
        "5:4": {
          width: "256px",
          height: "205px",
          ratio: 5 / 4,
        },
        "3:2": {
          width: "256px",
          height: "171px",
          ratio: 3 / 2,
        },
      };

      if (Object.keys(validAspectRatios).includes(this.aspectRatio))
        return validAspectRatios[this.aspectRatio];
      else return validAspectRatios["1:1"];
    },

    _aspectRatio() {
      return this.validAspectRatio.ratio;
    },

    width() {
      return this.validAspectRatio.width;
    },

    height() {
      return this.validAspectRatio.height;
    },
  },

  methods: {
    handleImage(file) {
      this.imageFile = file;

      const fileType = file.name.split(".").reverse()[0].toLowerCase();
      const isSupportedFileType = ["png", "jpg"].includes(fileType);

      if (typeof FileReader !== "function") {
        // this.$alert.negative(
        //   "This feature is not supported by your browser. ezofis recommends latest version of Google Chrome or Mozilla Firefox browser"
        // );
        return;
      }

      if (!isSupportedFileType) {
        // this.$alert.negative("Unsupported file type");
        return;
      }

      const fileSize = file.size;
      if (fileSize > 1000000) {
        // this.$alert.negative("File size should be less than 1 mb");
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        this.originalImage = event.target.result;
        this.step = 2;
      };
      reader.readAsDataURL(file);

      this.showCropper = true;
    },

    emitValue() {
      this.$emit("input", this.croppedImage);
      this.showCropper = false;
    },

    cropImage(image) {
      this.croppedImage = image;
      this.emitValue();
    },

    resetImage() {
      this.croppedImage = "";
      this.emitValue();
    },
  },
};
</script>

<style lang="scss" scoped></style>
