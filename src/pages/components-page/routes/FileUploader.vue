<template>
  <DocApi
    author="Charles Vinoth"
    version="1.0"
    :prop-list="propList"
    :event-list="eventList"
    :slot-list="slotList"
  >
    <template #title></template>

    <template #description>
      ezofis has a component called <b>EzFileUploader</b>, which can be used to
      upload single or multiple files.
    </template>

    <template #usage>
      <!-- default -->

      <DocExample title="Default" :code="example[0]">
        <template #example>
          <EzFileUploader></EzFileUploader>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- multiple -->

      <DocExample title="multiple" :code="example[1]">
        <template #example>
          <EzFileUploader is-multiple></EzFileUploader>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- accept only images -->

      <DocExample title="accept only images" :code="example[2]">
        <template #example>
          <EzFileUploader acceptable-file-types=".jpg, .png">
            <template #hint>
              We accept JPG, JPEG and PNG (less than or equals 1 mb)
            </template>
          </EzFileUploader>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- validate individual file size -->

      <DocExample title="validate individual file size" :code="example[3]">
        <template #example>
          <EzFileUploader is-multiple validate-file-size="single">
          </EzFileUploader>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- validate total file size -->

      <DocExample title="validate total file size" :code="example[4]">
        <template #example>
          <EzFileUploader is-multiple validate-file-size="total">
            <template #hint>
              Total file size should be less than or equals 10 mb
            </template>
          </EzFileUploader>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- validate individual & total file size -->

      <DocExample
        title="validate individual & total file size"
        :code="example[5]"
      >
        <template #example>
          <EzFileUploader is-multiple validate-file-size="both">
            <template #hint>
              Total file size should be less than or equals 10 mb and each file
              should be less than or equals 1 mb
            </template>
          </EzFileUploader>
        </template>
      </DocExample>

      <!-- ... -->
    </template>
  </DocApi>
</template>

<script>
const EzFileUploader = () =>
  import("@/library/components/ez-file-uploader/index");
const DocApi = () => import("@/components/doc-api/index");
const DocExample = () => import("@/components/doc-example/index");

export default {
  name: "FileUploader",

  components: { EzFileUploader, DocApi, DocExample },

  data() {
    return {
      propList: [
        {
          id: this.$nano.id(),
          name: "isMultiple",
          type: "Boolean",
          description: "Can select multiple files",
          acceptedValues: "true | false",
          defaultValue: "false",
        },
        {
          id: this.$nano.id(),
          name: "acceptableFileTypes",
          type: "String",
          description: "Filter for what file types the user can pick",
          acceptedValues: "",
          defaultValue: "",
        },
        {
          id: this.$nano.id(),
          name: "validateFileSize",
          type: "String",
          description: "Validate file size",
          acceptedValues: "single | total | both",
          defaultValue: "",
        },
        {
          id: this.$nano.id(),
          name: "singleFileSize",
          type: "Number",
          description: "Individual file size allowed in MB",
          acceptedValues: "",
          defaultValue: "1",
        },
        {
          id: this.$nano.id(),
          name: "totalFileSize",
          type: "Number",
          description: "Total file size allowed in MB",
          acceptedValues: "",
          defaultValue: "10",
        },
      ],
      eventList: [
        {
          id: this.$nano.id(),
          name: "input",
          description: "Triggers when files are added",
          parameters: "Files",
        },
      ],
      slotList: [
        {
          id: this.$nano.id(),
          name: "hint",
          description: "hint of the dropzone",
        },
      ],
      example: [
        "<EzFileUploader></EzFileUploader>",
        "<EzFileUploader is-multiple></EzFileUploader>",
        '<EzFileUploader acceptable-file-types=".jpg, .png">\n\t<template #hint>We accept JPG, JPEG and PNG (less than or equals 1 mb)</template>\n</EzFileUploader>',
        '<EzFileUploader is-multiple validate-file-size="single"></EzFileUploader>',
        '<EzFileUploader is-multiple validate-file-size="total">\n\t<template #hint>Total file size should be less than or equals 10 mb</template>\n</EzFileUploader>',
        '<EzFileUploader is-multiple validate-file-size="both">\n\t<template #hint>Total file size should be less than or equals 10 mb and each file should be less than or equals 1 mb</template>\n</EzFileUploader>',
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
