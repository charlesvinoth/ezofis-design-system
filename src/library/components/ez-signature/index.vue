<template>
  <div class="inline-block card overflow-hidden">
    <template v-if="editMode">
      <!-- mode -->

      <div class="row border-bottom" style="height: 36px">
        <div
          v-for="_mode in modes"
          :key="_mode.id"
          class="col label-2 text-uppercase row items-center justify-center hover"
          :class="
            mode === _mode.value
              ? 'bg-gray-3 text-gray-10 text-weight-medium'
              : 'bg-gray-1 text-gray-5'
          "
          @click="mode = _mode.value"
        >
          {{ _mode.label }}
        </div>
      </div>

      <!-- ... -->

      <SignaturePad
        v-if="mode === 'Draw'"
        :width="width"
        :height="height"
        class="q-pa-xs"
        @save="saveSignature"
      ></SignaturePad>

      <EzImageUploader
        v-if="mode === 'Upload'"
        hide-border
        hide-preview
        :aspect-ratio="aspectRatio"
        class="q-pa-xs"
        @input="saveSignature"
      ></EzImageUploader>
    </template>

    <!-- signature -->

    <div
      v-else
      class="relative-position"
      :style="{ width: width, height: height }"
      @mouseenter="showEditHint = true"
      @mouseleave="showEditHint = false"
    >
      <img v-if="signature" :src="signature" :height="height" />

      <div
        v-if="signature && showEditHint"
        class="q-pa-sm text-white text-center text-uppercase bg-black label-1 absolute-bottom cursor-pointer"
        style="opacity: 0.75"
        @click="editMode = true"
      >
        Edit
      </div>

      <div
        v-if="!signature"
        class="row items-center justify-center cursor-pointer text-2 full-height"
        @click="editMode = true"
      >
        Click here to sign
      </div>
    </div>

    <!-- ... -->
  </div>
</template>

<script>
const EzImageUploader = () =>
  import("@/library/components/ez-image-uploader/index");
const SignaturePad = () => import("./components/signature-pad");

export default {
  name: "EzSignature",

  components: { EzImageUploader, SignaturePad },

  data() {
    return {
      mode: "Draw",
      modes: [
        {
          id: this.$nano.id(),
          label: "Draw",
          value: "Draw",
        },
        {
          id: this.$nano.id(),
          label: "Upload",
          value: "Upload",
        },
      ],
      aspectRatio: "16:9",
      width: "256px",
      height: "144px",
      showEditHint: false,
      signature: "",
      editMode: false,
    };
  },

  methods: {
    saveSignature(signature) {
      this.signature = signature;
      this.editMode = false;
      this.mode = "Draw";
    },
  },
};
</script>

<style lang="scss" scoped></style>
