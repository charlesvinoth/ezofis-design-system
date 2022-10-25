<template>
  <DocApi
    author="Charles Vinoth"
    version="1.0"
    :prop-list="propList"
    :event-list="eventList"
    :slot-list="slotList"
  >
    <template #title>Prompt</template>

    <template #description>
      ezofis has a component called <b>EzPrompt</b>, which can be used to show a
      prompt to the user to verify or accept something.
    </template>

    <template #usage>
      <!-- default -->
      <DocExample title="Default" :code="example[0]">
        <template #example>
          <EzButton label="prompt" @click="prompt1 = !prompt1"></EzButton>
          <EzPrompt
            v-model="prompt1"
            @no="prompt1 = !prompt1"
            @yes="prompt1 = !prompt1"
          >
            <template #title>Delete the Cabinet?</template>
            <template #description>
              If you delete the Cabinet, all the files and folders inside the
              cabinet will also be deleted. Are you sure you want to proceed?
            </template>
          </EzPrompt>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- color -->
      <DocExample title="Color" :code="example[1]">
        <template #example>
          <EzButton
            label="prompt"
            color="secondary"
            @click="prompt2 = !prompt2"
          ></EzButton>
          <EzPrompt
            v-model="prompt2"
            color="secondary"
            @no="prompt2 = !prompt2"
            @yes="prompt2 = !prompt2"
          >
            <template #title>Delete the Cabinet?</template>
            <template #description>
              If you delete the Cabinet, all the files and folders inside the
              cabinet will also be deleted. Are you sure you want to proceed?
            </template>
          </EzPrompt>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- persistent -->
      <DocExample title="persistent" :code="example[2]">
        <template #example>
          <EzButton label="prompt" @click="prompt3 = !prompt3"></EzButton>
          <EzPrompt
            v-model="prompt3"
            is-persistent
            @no="prompt3 = !prompt3"
            @yes="prompt3 = !prompt3"
          >
            <template #title>Delete the Cabinet?</template>
            <template #description>
              If you delete the Cabinet, all the files and folders inside the
              cabinet will also be deleted. Are you sure you want to proceed?
            </template>
          </EzPrompt>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- with icon -->
      <DocExample title="with icon" :code="example[3]">
        <template #example>
          <EzButton label="prompt" @click="prompt4 = !prompt4"></EzButton>
          <EzPrompt
            v-model="prompt4"
            icon="eva-trash-2-outline"
            @no="prompt4 = !prompt4"
            @yes="prompt4 = !prompt4"
          >
            <template #title>Delete the Cabinet?</template>
            <template #description>
              If you delete the Cabinet, all the files and folders inside the
              cabinet will also be deleted. Are you sure you want to proceed?
            </template>
          </EzPrompt>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- custom -->
      <DocExample title="custom" :code="example[4]">
        <template #example>
          <EzButton
            label="prompt"
            color="red"
            @click="prompt5 = !prompt5"
          ></EzButton>
          <EzPrompt
            v-model="prompt5"
            icon="eva-trash-2-outline"
            no-btn-label="cancel"
            yes-btn-label="delete"
            width="420px"
            color="red"
            @no="prompt5 = !prompt5"
            @yes="prompt5 = !prompt5"
          >
            <template #title>Delete the Cabinet?</template>
            <template #description>
              If you delete the Cabinet, all the files and folders inside the
              cabinet will also be deleted. Are you sure you want to proceed?
            </template>
          </EzPrompt>
        </template>
      </DocExample>
      <!-- ... -->
    </template>
  </DocApi>
</template>

<script>
const EzPrompt = () => import("@/library/components/ez-prompt/index");
const EzButton = () => import("@/library/components/ez-button/index");
const DocApi = () => import("@/components/doc-api/index");
const DocExample = () => import("@/components/doc-example/index");

export default {
  name: "Prompt",

  components: { EzPrompt, EzButton, DocApi, DocExample },

  data() {
    return {
      prompt1: false,
      prompt2: false,
      prompt3: false,
      prompt4: false,
      prompt5: false,
      propList: [
        {
          id: this.$nano.id(),
          name: "value",
          type: "Boolean",
          description:
            "Model of the component; Either use this property (along with a listener for 'input' event) OR use v-model directive",
          acceptedValues: "true | false",
          defaultValue: "false",
        },
        {
          id: this.$nano.id(),
          name: "width",
          type: "String",
          description: "Sets the width",
          acceptedValues: "CSS width",
          defaultValue: "480px",
        },
        {
          id: this.$nano.id(),
          name: "color",
          type: "String",
          description: "Sets the color of the header",
          acceptedValues: "Quasar colors",
          defaultValue: "Primary",
        },
        {
          id: this.$nano.id(),
          name: "icon",
          type: "String",
          description: "Display an icon on the left side of the title",
          acceptedValues: "Quasar icons",
          defaultValue: "",
        },
        {
          id: this.$nano.id(),
          name: "isPersistent",
          type: "Boolean",
          description:
            "Can't dismiss the popup if clicking outside of it or hitting ESC key",
          acceptedValues: "true | false",
          defaultValue: "false",
        },
        {
          id: this.$nano.id(),
          name: "yesBtnLabel",
          type: "String",
          description: "Sets the label of the Yes button",
          acceptedValues: "",
          defaultValue: "Yes",
        },
        {
          id: this.$nano.id(),
          name: "noBtnLabel",
          type: "String",
          description: "Sets the label of the No button",
          acceptedValues: "",
          defaultValue: "No",
        },
      ],
      eventList: [
        {
          id: this.$nano.id(),
          name: "no",
          description: "Triggers when the no button is clicked",
          parameters: "Native event",
        },
        {
          id: this.$nano.id(),
          name: "yes",
          description: "Triggers when the yes button is clicked",
          parameters: "Native event",
        },
      ],
      slotList: [
        {
          id: this.$nano.id(),
          name: "title",
          description: "title of the prompt",
        },
        {
          id: this.$nano.id(),
          name: "description",
          description: "content of the prompt",
        },
      ],
      example: [
        `<EzPrompt v-model="prompt1" @no="prompt1 = !prompt1" @yes="prompt1 = !prompt1">\n\t<template #title>Delete the Cabinet?</template>\n\t<template #description>If you delete the Cabinet, all the files and folders inside the cabinet will also be deleted. Are you sure you want to proceed?</template>\n</EzPrompt>`,
        `<EzPrompt v-model="prompt1" color="secondary" @no="prompt1 = !prompt1" @yes="prompt1 = !prompt1">\n\t<template #title>Delete the Cabinet?</template>\n\t<template #description>If you delete the Cabinet, all the files and folders inside the cabinet will also be deleted. Are you sure you want to proceed?</template>\n</EzPrompt>`,
        `<EzPrompt v-model="prompt1" is-persistent @no="prompt1 = !prompt1" @yes="prompt1 = !prompt1">\n\t<template #title>Delete the Cabinet?</template>\n\t<template #description>If you delete the Cabinet, all the files and folders inside the cabinet will also be deleted. Are you sure you want to proceed?</template>\n</EzPrompt>`,
        `<EzPrompt v-model="prompt1" icon="eva-trash-2-outline" @no="prompt1 = !prompt1" @yes="prompt1 = !prompt1">\n\t<template #title>Delete the Cabinet?</template>\n\t<template #description>If you delete the Cabinet, all the files and folders inside the cabinet will also be deleted. Are you sure you want to proceed?</template>\n</EzPrompt>`,
        `<EzPrompt v-model="prompt1" icon="eva-trash-2-outline" no-btn-label="cancel" yes-btn-label="delete" width="420px" color="red" @no="prompt1 = !prompt1" @yes="prompt1 = !prompt1">\n\t<template #title>Delete the Cabinet?</template>\n\t<template #description>If you delete the Cabinet, all the files and folders inside the cabinet will also be deleted. Are you sure you want to proceed?</template>\n</EzPrompt>`,
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
