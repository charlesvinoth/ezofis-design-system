<template>
  <div
    class="row items-center justify-center relative-position overflow-hidden bg-white"
    :class="[
      {
        [dragOver
          ? 'border-dashed border-secondary'
          : 'border border-gray-3']: !hideBorder,
      },
      isRounded ? 'rounded' : 'rounded-borders',
    ]"
    :style="{ width: width, height: height }"
    @dragover="dragOver = true"
    @dragleave="dragOver = false"
  >
    <!-- cropped image -->

    <img v-if="croppedImage" :src="croppedImage" :height="height" />

    <div
      v-if="showChangeHint"
      class="q-pa-sm text-white text-center text-uppercase bg-black label-1 absolute-bottom"
      style="opacity: 0.75"
    >
      Change
    </div>

    <!-- ... -->

    <!-- hint -->

    <div v-else class="text-center">
      <q-icon
        name="eva-image-outline"
        :color="dragOver ? 'secondary' : 'gray-3'"
        size="80px"
      ></q-icon>

      <div class="text-3 text-weight-bold q-mb-xs">
        <span>Drop your image here or</span>
        <span class="text-secondary"> Browse </span>
      </div>

      <div class="text-1 text-gray-5">We accept JPG and PNG (max 1 mb)</div>
    </div>

    <!-- ... -->

    <!-- dropzone -->

    <div class="absolute-center full-height full-width dropzone">
      <input
        ref="dropzone"
        type="file"
        accept=".jpg, .png"
        class="full-height full-width cursor-pointer"
        @input="handleInput"
        @mouseenter="showChangeHint = Boolean(croppedImage)"
        @mouseleave="showChangeHint = false"
      />
    </div>

    <!-- ... -->
  </div>
</template>

<script>
export default {
  name: "Picker",

  props: {
    isRounded: {
      type: Boolean,
      default: false,
    },

    width: {
      type: String,
      required: true,
    },

    height: {
      type: String,
      required: true,
    },

    croppedImage: {
      type: String,
      required: true,
    },

    hideBorder: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      dragOver: false,
      showChangeHint: false,
    };
  },

  methods: {
    handleInput(e) {
      this.$emit("input", e.target.files[0]);
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

.rounded {
  border-radius: 50%;
}
</style>
