<template>
  <DocApi author="Charles Vinoth" version="1.0">
    <template #title>Day</template>

    <template #description>
      ezofis has a plugin called <b>$day</b>, which can be used to parse,
      validate and manipulate date. Visit (
      <a href="https://day.js.org/" target="_blank">https://day.js.org/</a> )
      for more info.
    </template>

    <template #usage>
      <!-- now -->

      <DocExample title="now">
        <template #example>
          <div class="text-2 text-gray-6 q-mb-lg">
            Used to get current date time.
          </div>

          <EzButton label="now" @click="now"></EzButton>

          <div class="text-gray-10 text-weight-medium q-mt-lg">
            {{ dateTime1 }}
          </div>
        </template>

        <template #options>
          <pre class="language-javascript"><code>{{example[0]}}</code></pre>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- iso -->

      <DocExample title="iso">
        <template #example>
          <div class="text-2 text-gray-6 q-mb-lg">
            Used to get current date time in ISO format.
          </div>

          <EzButton label="iso" @click="iso"></EzButton>

          <div class="text-gray-10 text-weight-medium q-mt-lg">
            {{ dateTime2 }}
          </div>
        </template>

        <template #options>
          <pre class="language-javascript"><code>{{example[1]}}</code></pre>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- is valid date -->

      <DocExample title="is valid date">
        <template #example>
          <div class="text-2 text-gray-6 q-mb-lg">
            Used to validate that a given string is a valid date.
          </div>

          <EzButton label="is valid date" @click="isValidDate"></EzButton>

          <div class="text-gray-10 text-weight-medium q-mt-lg">
            {{ dateTime3 }}
          </div>
        </template>

        <template #options>
          <pre class="language-javascript"><code>{{example[2]}}</code></pre>
        </template>
      </DocExample>

      <!-- ... -->
    </template>
  </DocApi>
</template>

<script>
const DocApi = () => import("@/components/doc-api/index");
const DocExample = () => import("@/components/doc-example/index");

const EzButton = () => import("@/library/components/ez-button/index");

export default {
  name: "Day",

  components: { DocApi, DocExample, EzButton },

  data() {
    return {
      dateTime1: "",
      dateTime2: "",
      dateTime3: "",
      example: [
        "this.$day.now();",
        "this.$day.iso();",
        'this.$day.isValidDate("27 May");',
      ],
    };
  },

  methods: {
    now() {
      this.dateTime1 = this.$day.now();
    },

    iso() {
      this.dateTime2 = this.$day.iso();
    },

    isValidDate() {
      this.dateTime3 = this.$day.isValidDate("27 May");
    },
  },
};
</script>

<style lang="scss" scoped></style>
