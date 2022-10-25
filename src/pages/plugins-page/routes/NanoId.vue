<template>
  <DocApi author="Charles Vinoth" version="1.0">
    <template #title>Nano Id</template>

    <template #description>
      ezofis has a plugin called <b>$nano</b>, which can be used to generate a
      tiny, secure, URL-friendly, unique string ID. Nano Id is mainly used for
      the key property of <b>v-for</b> loops. Visit (
      <a href="https://github.com/ai/nanoid" target="_blank">
        https://github.com/ai/nanoid
      </a>
      ) for more info.
    </template>

    <template #usage>
      <!-- primary -->

      <DocExample title="primary">
        <template #example>
          <EzButton label="generate" @click="generate"></EzButton>
          <div v-if="nanoId" class="text-gray-10 text-weight-medium q-mt-lg">
            {{ nanoId }}
          </div>
        </template>

        <template #options>
          <pre class="language-javascript"><code>{{example[0]}}</code></pre>
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
  name: "NanoId",

  components: { DocApi, DocExample, EzButton },

  data() {
    return {
      nanoId: "",
      example: ["this.$nano.id()"],
    };
  },

  methods: {
    generate() {
      this.nanoId = this.$nano.id();
    },
  },
};
</script>

<style lang="scss" scoped></style>
