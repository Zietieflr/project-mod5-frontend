<template>
  <div id="visual-timer">
    <VisualTimerChart :time="correctTimeValue" />
  </div>
</template>

<script>
import VisualTimerChart from "./VisualTimerChart"

export default {
  name: "VisualTimer",
  props: [ "timerValue", "recentWorkTimer" ],
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