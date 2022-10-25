<template>
  <DocApi
    author="Charles Vinoth"
    version="1.0"
    :prop-list="propList"
    :event-list="eventList"
  >
    <template #title>Image Uploader</template>

    <template #description>
      ezofis has a component called <b>EzImageUploader</b>, which allows users
      to crop and upload images.
    </template>

    <template #usage>
      <!-- default -->

      <DocExample title="Default" :code="example[0]">
        <template #example>
          <EzImageUploader></EzImageUploader>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- rounded -->

      <DocExample title="rounded" :code="example[1]">
        <template #example>
          <EzImageUploader is-rounded></EzImageUploader>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- aspect ratio -->

      <DocExample title="aspect ratio" :code="example[2]">
        <template #example>
          <EzImageUploader aspect-ratio="3:2"></EzImageUploader>
        </template>
      </DocExample>

      <!-- ... -->

      <!-- no preview -->

      <DocExample title="no preview" :code="example[3]">
        <template #example>
          <EzImageUploader hide-preview></EzImageUploader>
        </template>
      </DocExample>

      <!-- ... -->
    </template>
  </DocApi>
</template>

<script>
const EzImageUploader = () =>
  import("@/library/components/ez-image-uploader/index");
const DocApi = () => import("@/components/doc-api/index");
const DocExample = () => import("@/components/doc-example/index");

export default {
  name: "ImageUploader",

  components: { EzImageUploader, DocApi, DocExample },

  data() {
    return {
      imageUploader1: false,
      imageUploader2: false,
      propList: [
        {
          id: this.$nano.id(),
          name: "value",
          type: "String",
          description:
            "Model of the component; Either use this property (along with a listener for 'input' event) OR use v-model directive",
          acceptedValues: "true | false",
          defaultValue: "false",
        },
        {
          id: this.$nano.id(),
          name: "aspectRatio",
          type: "Number",
          description: "Sets the aspect ratio of the cropper",
          acceptedValues: "1:1 | 3:2 | 4:3 | 5:4 | 16:9",
          defaultValue: "1:1",
        },
        {
          id: this.$nano.id(),
          name: "hidePreview",
          type: "Boolean",
          description: "Hides the floating preview in the cropper",
          acceptedValues: "true | false",
          defaultValue: "false",
        },
      ],
      eventList: [
        {
          id: this.$nano.id(),
          name: "input",
          description:
            "Emitted when the component needs to change the model; Is also used by v-model",
          parameters: "New model value",
        },
      ],
      example: [
        " <EzImageUploader></EzImageUploader>",
        "<EzImageUploader is-rounded></EzImageUploader>",
        '<EzImageUploader aspect-ratio="3:2"></EzImageUploader>',
        "<EzImageUploader hide-preview></EzImageUploader>",
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
