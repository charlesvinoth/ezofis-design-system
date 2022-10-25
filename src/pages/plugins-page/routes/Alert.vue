<template>
  <DocApi author="Charles Vinoth" version="1.0">
    <template #title>Alert</template>

    <template #description>
      ezofis has a plugin called <b>$alert</b>, which can be used to show
      contextual feedback messages for typical user actions.
    </template>

    <template #usage>
      <!-- default -->

      <DocExample title="default">
        <template #example>
          <EzButton label="default" @click="defaultFn"></EzButton>
        </template>

        <template #options>
          <pre class="language-javascript"><code>{{example[0]}}</code></pre>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- positive -->
      <DocExample title="positive">
        <template #example>
          <EzButton label="positive" color="green" @click="positive"></EzButton>
        </template>

        <template #options>
          <pre class="language-javascript"><code>{{example[1]}}</code></pre>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- negative -->
      <DocExample title="negative">
        <template #example>
          <EzButton label="negative" color="red" @click="negative"></EzButton>
        </template>

        <template #options>
          <pre class="language-javascript"><code>{{example[2]}}</code></pre>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- warning -->
      <DocExample title="warning">
        <template #example>
          <EzButton
            label="warning"
            color="amber-10"
            @click="warning"
          ></EzButton>
        </template>

        <template #options>
          <pre class="language-javascript"><code>{{example[3]}}</code></pre>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- info -->
      <DocExample title="info">
        <template #example>
          <EzButton label="info" color="light-blue" @click="info"></EzButton>
        </template>

        <template #options>
          <pre class="language-javascript"><code>{{example[4]}}</code></pre>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- custom -->
      <DocExample title="custom">
        <template #example>
          <EzButton label="custom" color="secondary" @click="custom"></EzButton>
        </template>

        <template #options>
          <pre class="language-javascript"><code>{{example[5]}}</code></pre>
        </template>
      </DocExample>
      <!-- ... -->
    </template>
  </DocApi>
</template>

<script>
const EzButton = () => import("@/library/components/ez-button/index");

const DocApi = () => import("@/components/doc-api/index");
const DocExample = () => import("@/components/doc-example/index");

export default {
  name: "Alert",

  components: { EzButton, DocApi, DocExample },

  data() {
    return {
      example: [
        'this.$alert.default("Default message")',
        'this.$alert.positive("Positive message")',
        'this.$alert.negative("Negative message")',
        'this.$alert.warning("warning message")',
        'this.$alert.info("Info message")',
        'this.$alert.custom({ message: "Custom message", color: "secondary", textColor: "white" })',
      ],
    };
  },

  methods: {
    defaultFn() {
      this.$alert.default("Default message");
    },

    positive() {
      this.$alert.positive("Positive message");
    },

    negative() {
      this.$alert.negative("Negative message");
    },

    warning() {
      this.$alert.warning("Warning message");
    },

    info() {
      this.$alert.info("Info message");
    },

    custom() {
      this.$alert.custom({
        message: "Custom message",
        color: "secondary",
        textColor: "white",
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
