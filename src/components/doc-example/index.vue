<template>
  <div>
    <!-- title -->

    <div class="label-1 q-mb-sm text-uppercase text-gray-5">
      {{ title }}
    </div>

    <!-- ... -->

    <div class="q-mb-lg card">
      <!-- example -->

      <div class="q-pa-lg">
        <slot name="example"></slot>
      </div>

      <!-- ... -->

      <!-- code -->

      <div v-if="showCode" class="border-top bg-gray-1">
        <pre v-if="code" class="language-html"><code>{{ code }}</code></pre>
        <slot name="options"></slot>
      </div>

      <!-- ... -->

      <div class="row items-center justify-around border-top">
        <!-- toggle code -->

        <div
          class="col row items-center justify-center q-pa-sm hover text-gray-5"
          @click="toggleCode"
        >
          <q-icon :name="showCode ? 'code_off' : 'code'" size="20px"></q-icon>
          <div class="text-2 text-capitalize q-ml-sm">
            {{ showCode ? "hide code" : "show code" }}
          </div>
        </div>

        <!-- ... -->

        <!-- copy code -->

        <div
          v-if="showCode"
          class="col row items-center justify-center q-pa-sm hover"
          :class="isCodeCopied ? 'text-green' : 'text-gray-5'"
          @click="copyCode"
        >
          <q-icon name="eva-copy" size="20px"></q-icon>
          <div class="text-2 text-capitalize q-ml-sm">
            {{ isCodeCopied ? "code copied to clipboard" : "copy code" }}
          </div>
        </div>

        <!-- ... -->
      </div>
    </div>
  </div>
</template>

<script>
import { copyToClipboard } from "quasar";

export default {
  name: "DocExample",

  props: {
    title: {
      type: String,
      required: true,
    },

    code: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      showCode: false,
      isCodeCopied: false,
    };
  },
  methods: {
    toggleCode() {
      this.showCode = !this.showCode;
      this.isCodeCopied = false;
    },

    async copyCode() {
      try {
        await copyToClipboard(this.code);
        this.isCodeCopied = true;
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
