<template>
  <q-dialog
    :value="value"
    :persistent="isPersistent"
    @input="handleInput"
    transition-show="scale"
    transition-hide="scale"
  >
    <div class="q-pa-lg bg-white" :style="{ width: width }">
      <div class="row items-center">
        <div v-if="icon" class="col-auto q-mr-md">
          <q-avatar size="42px" :color="color" class="shadow-1">
            <q-icon :name="icon" size="20px" color="white"></q-icon>
          </q-avatar>
        </div>

        <div class="col text-6 text-weight-bold">
          <slot name="title"></slot>
        </div>
      </div>

      <div class="text-3 q-mt-lg text-gray-7" :class="{ 'q-pl-sm': icon }">
        <slot name="description"></slot>
      </div>

      <!-- action -->

      <div class="row items-center justify-end q-mt-lg">
        <EzButton
          :label="noBtnLabel"
          :color="color"
          is-flat
          class="q-mr-sm"
          @click="$emit('no')"
        ></EzButton>

        <EzButton
          :label="yesBtnLabel"
          :color="color"
          @click="$emit('yes')"
        ></EzButton>
      </div>

      <!-- ... -->
    </div>
  </q-dialog>
</template>

<script>
const EzButton = () => import("@/library/components/ez-button/index.vue");

export default {
  name: "EzPrompt",

  components: { EzButton },

  props: {
    value: {
      type: Boolean,
      default: false,
    },

    width: {
      type: String,
      default: "480px",
    },

    color: {
      type: String,
      default: "primary",
    },

    icon: {
      type: String,
      default: "",
    },

    yesBtnLabel: {
      type: String,
      default: "yes",
    },

    noBtnLabel: {
      type: String,
      default: "no",
    },

    isPersistent: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    _color() {
      return `bg-${this.color}`;
    },

    _textColor() {
      return `text-${this.textColor}`;
    },
  },

  methods: {
    handleInput(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
