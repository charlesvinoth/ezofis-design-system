<template>
  <div>
    <div class="row items-center label-3">
      <div class="col-auto text-weight-medium" :class="_color">
        <span class="text-capitalize">{{ label }}</span>
        <span v-if="hint" class="text-1 text-gray-6 q-ml-xs">{{ hint }}</span>
      </div>

      <div v-if="isMandatory" class="col-auto q-ml-sm text-red">*</div>

      <q-btn
        v-if="showInfoBtn"
        flat
        round
        dense
        size="sm"
        icon="mdi-information"
        color="secondary"
        class="q-ml-sm"
        @click="(e) => $emit('hint', e)"
      ></q-btn>
    </div>

    <div v-if="description" class="text-1 text-gray-5" style="margin-top: 2px">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  name: "EzLabel",

  props: {
    label: {
      type: String,
      default: "",
    },

    hint: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },

    color: {
      type: String,
      default: "gray-7",
    },

    isMandatory: {
      type: Boolean,
      default: false,
    },

    showInfoBtn: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    _color() {
      return `text-${this.color}`;
    },
  },
};
</script>

<style lang="scss" scoped></style>
