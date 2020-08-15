<template>
  <div class="visual-timer">
    <VisualTimerChart class="chart" :time="correctTimeValue" :setStart="setStart" />
    <svg class="chart-cover" width="300" height="300">
      <circle cx="150" cy="150" r="150" />
    </svg>
  </div>
</template>

<script>
import VisualTimerChart from "./VisualTimerChart"

export default {
  name: "VisualTimer",
  props: [ "timerValue", "recentWorkTimer", "setStart" ],
  components: {
    VisualTimerChart,
  },
  methods: {
    correctTimeValue() {
      return this.recentWorkTimer 
        ? this.timerValue.breakTime * 60
        : this.timerValue.workTime * 60
    }
  }
}
</script>