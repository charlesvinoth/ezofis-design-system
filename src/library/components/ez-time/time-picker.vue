<template>
  <div class="row bg-white" style="min-width: 200px">
    <!-- hours -->

    <div class="col text-center">
      <div class="text-2 text-capitalize bg-primary text-white q-pa-sm q-mb-sm">
        hours
      </div>

      <EzScrollbar height="240px">
        <div
          v-for="hour in hours"
          :key="hour.id"
          class="q-mx-sm q-py-xs rounded-borders hover"
          :class="[
            hourColor(hour.label),
            { 'no-pointer-events disabled': !isValidHour(hour.value) },
          ]"
          @click="setHour(hour.label)"
        >
          {{ hour.label }}
        </div>
      </EzScrollbar>
    </div>

    <!-- ... -->

    <!-- minutes -->

    <div class="col text-center">
      <div class="text-2 text-capitalize bg-primary text-white q-pa-sm q-mb-sm">
        minutes
      </div>

      <EzScrollbar height="240px">
        <div
          v-for="minute in minutes"
          :key="minute.id"
          class="q-mx-sm q-py-xs rounded-borders hover"
          :class="[
            minuteColor(minute.label),
            { 'no-pointer-events disabled': !isValidMinute(minute.value) },
          ]"
          @click="setMinute(minute.label)"
        >
          {{ minute.label }}
        </div>
      </EzScrollbar>
    </div>

    <!-- ... -->

    <!-- meridian -->

    <div class="col text-center">
      <div class="text-2 text-capitalize bg-primary text-white q-pa-sm q-mb-sm">
        meridian
      </div>

      <div
        v-for="meridian in meridians"
        :key="meridian"
        class="q-mx-sm q-py-xs rounded-borders hover"
        :class="meridianColor(meridian)"
        @click="setMeridian(meridian)"
      >
        {{ meridian }}
      </div>

      <!-- ... -->
    </div>
  </div>
</template>

<script>
const EzScrollbar = () => import("@/library/components/ez-scrollbar/index");

export default {
  name: "TimePicker",

  components: { EzScrollbar },

  props: {
    value: {
      type: String,
      default: "",
    },

    minTime: {
      type: String,
      default: "00:00",
    },

    maxTime: {
      type: String,
      default: "23:59",
    },
  },

  data() {
    return {
      hours: [
        {
          id: this.$nano.id(),
          label: "12",
          value: 0,
        },
        {
          id: this.$nano.id(),
          label: "01",
          value: 1,
        },
        {
          id: this.$nano.id(),
          label: "02",
          value: 2,
        },
        {
          id: this.$nano.id(),
          label: "03",
          value: 3,
        },
        {
          id: this.$nano.id(),
          label: "04",
          value: 4,
        },
        {
          id: this.$nano.id(),
          label: "05",
          value: 5,
        },
        {
          id: this.$nano.id(),
          label: "06",
          value: 6,
        },
        {
          id: this.$nano.id(),
          label: "07",
          value: 7,
        },
        {
          id: this.$nano.id(),
          label: "08",
          value: 8,
        },
        {
          id: this.$nano.id(),
          label: "09",
          value: 9,
        },
        {
          id: this.$nano.id(),
          label: "10",
          value: 10,
        },
        {
          id: this.$nano.id(),
          label: "11",
          value: 11,
        },
      ],
      minutes: [
        {
          id: this.$nano.id(),
          label: "00",
          value: 0,
        },
        {
          id: this.$nano.id(),
          label: "01",
          value: 1,
        },
        {
          id: this.$nano.id(),
          label: "02",
          value: 2,
        },
        {
          id: this.$nano.id(),
          label: "03",
          value: 3,
        },
        {
          id: this.$nano.id(),
          label: "04",
          value: 4,
        },
        {
          id: this.$nano.id(),
          label: "05",
          value: 5,
        },
        {
          id: this.$nano.id(),
          label: "06",
          value: 6,
        },
        {
          id: this.$nano.id(),
          label: "07",
          value: 7,
        },
        {
          id: this.$nano.id(),
          label: "08",
          value: 8,
        },
        {
          id: this.$nano.id(),
          label: "09",
          value: 9,
        },
        {
          id: this.$nano.id(),
          label: "10",
          value: 10,
        },
        {
          id: this.$nano.id(),
          label: "11",
          value: 11,
        },
        {
          id: this.$nano.id(),
          label: "12",
          value: 12,
        },
        {
          id: this.$nano.id(),
          label: "13",
          value: 13,
        },
        {
          id: this.$nano.id(),
          label: "14",
          value: 14,
        },
        {
          id: this.$nano.id(),
          label: "15",
          value: 15,
        },
        {
          id: this.$nano.id(),
          label: "16",
          value: 16,
        },
        {
          id: this.$nano.id(),
          label: "17",
          value: 17,
        },
        {
          id: this.$nano.id(),
          label: "18",
          value: 18,
        },
        {
          id: this.$nano.id(),
          label: "19",
          value: 19,
        },
        {
          id: this.$nano.id(),
          label: "20",
          value: 20,
        },
        {
          id: this.$nano.id(),
          label: "21",
          value: 21,
        },
        {
          id: this.$nano.id(),
          label: "22",
          value: 22,
        },
        {
          id: this.$nano.id(),
          label: "23",
          value: 23,
        },
        {
          id: this.$nano.id(),
          label: "24",
          value: 24,
        },
        {
          id: this.$nano.id(),
          label: "25",
          value: 25,
        },
        {
          id: this.$nano.id(),
          label: "26",
          value: 26,
        },
        {
          id: this.$nano.id(),
          label: "27",
          value: 27,
        },
        {
          id: this.$nano.id(),
          label: "28",
          value: 28,
        },
        {
          id: this.$nano.id(),
          label: "29",
          value: 29,
        },
        {
          id: this.$nano.id(),
          label: "30",
          value: 30,
        },
        {
          id: this.$nano.id(),
          label: "31",
          value: 31,
        },
        {
          id: this.$nano.id(),
          label: "32",
          value: 32,
        },
        {
          id: this.$nano.id(),
          label: "33",
          value: 33,
        },
        {
          id: this.$nano.id(),
          label: "34",
          value: 34,
        },
        {
          id: this.$nano.id(),
          label: "35",
          value: 35,
        },
        {
          id: this.$nano.id(),
          label: "36",
          value: 36,
        },
        {
          id: this.$nano.id(),
          label: "37",
          value: 37,
        },
        {
          id: this.$nano.id(),
          label: "38",
          value: 38,
        },
        {
          id: this.$nano.id(),
          label: "39",
          value: 39,
        },
        {
          id: this.$nano.id(),
          label: "40",
          value: 40,
        },
        {
          id: this.$nano.id(),
          label: "41",
          value: 41,
        },
        {
          id: this.$nano.id(),
          label: "42",
          value: 42,
        },
        {
          id: this.$nano.id(),
          label: "43",
          value: 43,
        },
        {
          id: this.$nano.id(),
          label: "44",
          value: 44,
        },
        {
          id: this.$nano.id(),
          label: "45",
          value: 45,
        },
        {
          id: this.$nano.id(),
          label: "46",
          value: 46,
        },
        {
          id: this.$nano.id(),
          label: "47",
          value: 47,
        },
        {
          id: this.$nano.id(),
          label: "48",
          value: 48,
        },
        {
          id: this.$nano.id(),
          label: "49",
          value: 49,
        },
        {
          id: this.$nano.id(),
          label: "50",
          value: 50,
        },
        {
          id: this.$nano.id(),
          label: "51",
          value: 51,
        },
        {
          id: this.$nano.id(),
          label: "52",
          value: 52,
        },
        {
          id: this.$nano.id(),
          label: "53",
          value: 53,
        },
        {
          id: this.$nano.id(),
          label: "54",
          value: 54,
        },
        {
          id: this.$nano.id(),
          label: "55",
          value: 56,
        },
        {
          id: this.$nano.id(),
          label: "57",
          value: 57,
        },
        {
          id: this.$nano.id(),
          label: "58",
          value: 58,
        },
        {
          id: this.$nano.id(),
          label: "59",
          value: 59,
        },
      ],
      meridians: ["AM", "PM"],
      hour: "12",
      minute: "00",
      meridian: "AM",
    };
  },

  computed: {
    minHour() {
      return Number(this.minTime.split(":")[0]) || 0;
    },

    maxHour() {
      return Number(this.maxTime.split(":")[0]) || 23;
    },

    minMinute() {
      return Number(this.minTime.split(":")[1]) || 0;
    },

    maxMinute() {
      return Number(this.maxTime.split(":")[1]) || 59;
    },
  },

  watch: {
    value: {
      immediate: true,
      handler: function () {
        if (!this.value) return;

        const [time, meridian] = this.value.split(" ");
        const [hour, minute] = time.split(":");

        this.hour = hour;
        this.minute = minute;
        this.meridian = meridian;
      },
    },

    meridian() {
      if (!this.isValidHour(this.hour)) {
        this.setHour("12");
        this.setMinute("00");
        this.setMeridian("AM");
      }
    },
  },

  methods: {
    hourColor(hour) {
      if (this.hour === hour) return "bg-secondary text-white";
      else return "text-gray-10";
    },

    minuteColor(minute) {
      if (this.minute === minute) return "bg-secondary text-white";
      else return "text-gray-10";
    },

    meridianColor(meridian) {
      if (this.meridian === meridian) return "bg-secondary text-white";
      else return "text-gray-10";
    },

    setHour(hour) {
      this.hour = hour;
      this.emit();
    },

    setMinute(minute) {
      this.minute = minute;
      this.emit();
    },

    setMeridian(meridian) {
      this.meridian = meridian;
      this.emit();
    },

    emit() {
      this.$emit("input", `${this.hour}:${this.minute} ${this.meridian}`);
    },

    isValidHour(hour) {
      if (this.minHour > 12) {
        if (this.meridian === "AM") return true;
        if (this.meridian === "PM")
          return hour >= this.minHour - 12 && hour <= this.maxHour - 12;
      }

      if (this.maxHour > 12) {
        if (this.meridian === "AM") return hour >= this.minHour;
        if (this.meridian === "PM") return hour <= this.maxHour - 12;
      }

      return hour >= this.minHour && hour <= this.maxHour;
    },

    isValidMinute(minute) {
      const _minHour = this.minHour > 12 ? this.minHour - 12 : this.minHour;
      const _maxHour = this.maxHour > 12 ? this.maxHour - 12 : this.maxHour;

      if (Number(this.hour) === _minHour) return minute >= this.minMinute;
      else if (Number(this.hour) === _maxHour) return minute <= this.maxMinute;
      else return true;
    },
  },
};
</script>

<style lang="scss" scoped></style>
