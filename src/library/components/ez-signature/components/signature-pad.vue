<template>
  <div :style="{ width: width, height: '188px' }">
    <!-- signature pad -->

    <VueSignaturePad
      ref="signaturePad"
      height="144px"
      :options="options"
    ></VueSignaturePad>

    <!-- ... -->

    <!-- action -->

    <div class="row items-center">
      <EzButton
        is-flat
        :label="hasSignature ? 'clear' : 'cancel'"
        color="gray-7"
        class="col q-mr-xs bg-gray-1 border border-gray-2"
        @click="clearSignature"
      ></EzButton>

      <EzButton
        label="done"
        class="col"
        :is-disabled="!hasSignature"
        @click="saveSignature"
      ></EzButton>
    </div>

    <!-- ... -->
  </div>
</template>

<script>
const EzButton = () => import("@/library/components/ez-button/index.vue");

export default {
  name: "SignaturePad",

  components: { EzButton },

  props: {
    width: {
      type: String,
      required: true,
    },

    height: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      hasSignature: false,
      options: {
        onBegin: this.checkSignature,
      },
    };
  },

  methods: {
    checkSignature() {
      this.hasSignature = true;
    },

    clearSignature() {
      this.$refs.signaturePad.clearSignature();
      this.hasSignature = false;
      this.$emit("save", "");
    },

    saveSignature() {
      const signature = this.$refs.signaturePad.saveSignature().data;

      this.$emit("save", signature);
    },
  },
};
</script>

<style lang="scss" scoped></style>
