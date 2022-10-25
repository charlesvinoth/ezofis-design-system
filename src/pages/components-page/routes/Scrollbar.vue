<template>
  <DocApi
    author="Charles Vinoth"
    version="1.0"
    :prop-list="propList"
    :slot-list="slotList"
  >
    <template #title>Empty State</template>

    <template #description>
      ezofis has a component called <b>EzScrollbar</b>, which can be used to
      show custom scroll bars instead of browser defaults.
    </template>

    <template #usage>
      <!-- default -->
      <DocExample title="Default" :code="example[0]">
        <template #example>
          <EzScrollbar
            height="100px"
            width="30%"
            :class="darkMode ? 'dark-mode' : 'light-mode'"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, ab
              tempore repellat eveniet itaque dignissimos id saepe. Ipsam,
              explicabo dolorem ducimus praesentium necessitatibus maxime
              repellat, doloremque tempora ab fugiat id.
            </p>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
              natus explicabo necessitatibus eius sed, quod sit ducimus? Ipsa
              quis illo omnis, provident eos blanditiis hic? Nobis sint illum
              doloribus ab? Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </EzScrollbar>
        </template>
      </DocExample>
      <!-- ... -->

      <!-- horizontal -->
      <DocExample title="horizontal" :code="example[1]">
        <template #example>
          <EzScrollbar width="30%">
            <p
              :class="darkMode ? 'text-light' : 'text-dark'"
              style="white-space: nowrap"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, ab
              tempore repellat eveniet itaque dignissimos id saepe. Ipsam,
              explicabo dolorem ducimus praesentium necessitatibus maxime
              repellat, doloremque tempora ab fugiat id.
            </p>
          </EzScrollbar>
        </template>
      </DocExample>
      <!-- ... -->
    </template>
  </DocApi>
</template>

<script>
import { mapState } from "vuex";

const EzScrollbar = () => import("@/library/components/ez-scrollbar/index");
const DocApi = () => import("@/components/doc-api/index");
const DocExample = () => import("@/components/doc-example/index");

export default {
  name: "Scrollbar",

  components: { EzScrollbar, DocApi, DocExample },

  data() {
    return {
      propList: [
        {
          id: this.$nano.id(),
          name: "height",
          type: "String",
          description: "Height of the scroll area",
          acceptedValues: "CSS height",
          defaultValue: "100%",
        },
        {
          id: this.$nano.id(),
          name: "width",
          type: "String",
          description: "Width of the scroll area",
          acceptedValues: "CSS width",
          defaultValue: "100%",
        },
      ],
      slotList: [
        {
          id: this.$nano.id(),
          name: "default",
          description: "Default slot",
        },
      ],
      example: [
        `<EzScrollbar height="100px"></EzScrollbar>`,
        `<EzScrollbar width="30%"></EzScrollbar>`,
      ],
    };
  },

  computed: {
    ...mapState(["darkMode"]),
  },
};
</script>

<style lang="scss" scoped></style>
