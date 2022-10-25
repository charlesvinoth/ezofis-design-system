<template>
  <div class="row items-center border-bottom border-gray-2" :class="_position">
    <div
      v-for="tab in tabs"
      :key="tab.id"
      class="tab cursor-pointer row items-center"
      :class="activeClass(tab.value)"
      @click="handleClick(tab.value)"
    >
      <div v-if="tab.icon" class="col-auto q-mr-sm">
        <q-icon
          :name="tab.icon"
          size="20px"
          :color="value === tab.value ? color : 'gray-6'"
        ></q-icon>
      </div>

      <div
        class="text-3 non-selectable"
        :class="
          value === tab.value ? `text-${color} text-weight-bold` : 'text-gray-6'
        "
      >
        {{ tab.label }}
      </div>

      <div
        class="absolute-bottom rounded-borders tab-line"
        :class="[{ active: value === tab.value }, _color]"
        :style="{
          height: '2px',
          bottom: '-1.5px',
        }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EzTabs",

  props: {
    value: {
      type: String,
      default: "",
    },

    tabs: {
      type: Array,
      required: true,
    },

    color: {
      type: String,
      default: "secondary",
    },

    position: {
      type: String,
      default: "center",
      validator: function (value) {
        return ["left", "center", "right"].includes(value);
      },
    },
  },

  computed: {
    _color() {
      return `bg-${this.color}`;
    },

    _position() {
      if (this.position === "left") return "justify-start";
      else if (this.position === "right") return "justify-end";
      else return "justify-center";
    },
  },

  methods: {
    handleClick(value) {
      this.$emit("input", value);
    },

    activeClass(tab) {
      return this.value === tab ? `text-${this.color}` : "text-gray-8";
    },
  },
};
</script>

<style lang="scss" scoped>
.tab {
  height: 36px;
  text-transform: capitalize;
  padding: 0px 24px;
  position: relative;
  border-radius: 4px 4px 0px 0px;
}

.tab-line {
  width: 100%;
  transition: all 0.2s linear;
  transform: scaleX(0);
}

.tab-line.active {
  transform: scale(1);
}
</style>
