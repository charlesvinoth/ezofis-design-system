<template>
  <div class="relative-position">
    <!-- cropper -->

    <div
      class="col-auto overflow-hidden bg-white"
      :class="{ 'border border-gray-3 rounded-borders': !hideBorder }"
      :style="{ width: width, height: height }"
    >
      <vue-cropper
        v-show="originalImage"
        ref="cropper"
        drag-mode="move"
        preview=".preview"
        :src="originalImage"
        :aspect-ratio="aspectRatio"
      ></vue-cropper>
    </div>

    <!-- ... -->

    <!-- preview -->

    <div
      v-if="!hidePreview"
      class="absolute q-ml-sm column"
      style="width: 128px; top: 0px"
      :style="{ left: width, height: height }"
    >
      <!-- preview -->

      <div
        class="preview border border-gray-3 overflow-hidden bg-white"
        :class="[
          isRounded ? 'rounded' : 'rounded-borders',
          { 'border border-gray-3': !hideBorder },
        ]"
        style="height: 128px"
      ></div>

      <div class="label-1 text-uppercase text-center text-gray-5 q-mt-sm">
        preview
      </div>

      <!-- ... -->
    </div>

    <!-- ... -->

    <!-- action -->

    <div
      class="row items-center justify-between q-mt-sm"
      :style="{ width: width }"
    >
      <!-- zoom out -->

      <EzFab
        v-tooltip="'zoom out'"
        is-flat
        icon="eva-minimize-outline"
        color="gray-7"
        class="border bg-gray-1 border-gray-2"
        @click="zoomOut"
      ></EzFab>

      <!-- ... -->

      <!-- zoom in -->

      <EzFab
        v-tooltip="'zoom in'"
        is-flat
        icon="eva-maximize-outline"
        color="gray-7"
        class="border bg-gray-1 border-gray-2"
        @click="zoomIn"
      ></EzFab>

      <!-- ... -->

      <!-- rotate left -->

      <EzFab
        v-tooltip="'rotate left'"
        is-flat
        icon="mdi-rotate-left"
        color="gray-7"
        class="border bg-gray-1 border-gray-2"
        @click="rotateLeft"
      ></EzFab>

      <!-- ... -->

      <!-- rotate right -->

      <EzFab
        v-tooltip="'rotate right'"
        is-flat
        icon="mdi-rotate-right"
        color="gray-7"
        class="border bg-gray-1 border-gray-2"
        @click="rotateRight"
      ></EzFab>

      <!-- ... -->

      <!-- reset -->

      <EzFab
        v-tooltip="'reset'"
        is-flat
        icon="eva-flip-2-outline"
        color="gray-7"
        class="border bg-gray-1 border-gray-2"
        @click="resetCropper"
      ></EzFab>

      <!-- ... -->
    </div>

    <div class="row items-center q-mt-sm" :style="{ width: width }">
      <EzButton
        is-flat
        label="cancel"
        color="gray-7"
        class="col q-mr-sm bg-gray-1 border border-gray-2"
        @click="cancel"
      ></EzButton>

      <!-- crop -->

      <EzButton label="crop" class="col" @click="cropImage"></EzButton>

      <!-- ... -->
    </div>

    <!-- ... -->
  </div>
</template>

<script>
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";

const EzButton = () => import("@/library/components/ez-button/index.vue");
const EzFab = () => import("@/library/components/ez-fab/index");

export default {
  name: "Cropper",

  components: { VueCropper, EzButton, EzFab },

  props: {
    originalImage: {
      type: String,
      required: true,
    },

    aspectRatio: {
      type: Number,
      required: true,
    },

    isRounded: {
      type: Boolean,
      required: true,
    },

    width: {
      type: String,
      required: true,
    },

    height: {
      type: String,
      required: true,
    },

    hidePreview: {
      type: Boolean,
      required: true,
    },

    hideBorder: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      cropedImage: "",
    };
  },

  watch: {
    originalImage() {
      this.$refs.cropper.replace(this.originalImage);
    },
  },

  methods: {
    zoomIn() {
      this.$refs.cropper.relativeZoom(0.1);
    },

    zoomOut() {
      this.$refs.cropper.relativeZoom(-0.1);
    },

    rotateLeft() {
      this.$refs.cropper.rotate(-90);
    },

    rotateRight() {
      this.$refs.cropper.rotate(90);
    },

    resetCropper() {
      this.$refs.cropper.reset();
      this.$refs.cropper.replace(this.originalImage);
    },

    cancel() {
      this.$emit("crop", "");
    },

    cropImage() {
      this.cropedImage = this.$refs.cropper
        .getCroppedCanvas({ width: this.width })
        .toDataURL();
      this.$emit("crop", this.cropedImage);
    },
  },
};
</script>

<style lang="scss" scoped>
.rounded {
  border-radius: 50%;
}
</style>
