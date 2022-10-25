<template>
  <div>
    <div class="row items-center">
      <div
        v-for="step in steps"
        :key="step.id"
        class="col row items-center justify-center"
      >
        <div class="label-1 text-uppercase text-weight-bold text-gray-5">
          Step {{ step.value }}
        </div>
      </div>
    </div>

    <div class="relative-position q-mt-md">
      <q-linear-progress
        size="xs"
        :value="progress"
        color="green"
        track-color="gray-3"
        class="rounded-borders"
      />

      <div class="row items-center absolute-center full-width">
        <div
          v-for="step in steps"
          :key="step.id"
          class="col row items-center justify-center"
        >
          <div
            class="row items-center justify-center round-borders"
            :class="progressColor(step)"
            :style="{
              height: activeStep > step.value ? '20px' : '16px',
              width: activeStep > step.value ? '20px' : '16px',
            }"
          >
            <q-icon
              v-if="activeStep > step.value"
              :name="step.hasError ? 'mdi-exclamation' : 'mdi-check'"
              color="white"
              size="18px"
            ></q-icon>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div
        v-for="step in steps"
        :key="step.id"
        class="col row items-center justify-center q-pt-sm"
        @click="handleClick(step.value)"
      >
        <div
          class="text-3 q-pa-sm rounded-borders"
          :class="[
            { hover: isClickable },
            activeStep === step.value
              ? 'text-weight-bold text-gray-10'
              : 'text-gray-5',
          ]"
        >
          {{ step.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EzStepper",

  props: {
    value: {
      type: Number,
      default: 1,
    },

    steps: {
      type: Array,
      required: true,
    },

    isClickable: {
      type: Boolean,
      default: false,
    },

    isCompleted: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    progress() {
      return this.isCompleted
        ? 10
        : (this.value + this.value - 1) / (this.steps.length * 2);
    },

    activeStep() {
      return this.isCompleted ? this.steps.length + 1 : this.value;
    },
  },

  methods: {
    progressColor(step) {
      if (step.hasError && this.activeStep > step.value) return "bg-red";
      else if (this.activeStep < step.value) return "bg-gray-3";
      else return "bg-green";
    },

    handleClick(value) {
      this.isClickable && this.$emit("input", value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
