<template>
  <div class="visual-timer">
    <VisualTimerChart 
      class="chart"
      :time="correctTime"
      :setStart="setStart"
      :decreaseTime="decreaseTime"
    />
    <h3 class="time">{{ displayTime() }}</h3>
    <svg class="chart-cover" width="250" height="250">
      <circle cx="125" cy="125" r="125" />
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
  data() {
    return {
      remainingTime: 0,
    }
  },
  mounted() {
    this.remainingTime = this.correctTime()
  },
  methods: {
    correctTime() {
      return this.recentWorkTimer
        ? this.timerValue.workTime * 60
        : this.timerValue.breakTime * 60
    },
    decreaseTime() {
      this.remainingTime -= 1
    },
    displayTime() {
      const minutes = Math.floor(this.remainingTime/60)
      const seconds = this.remainingTime%60
      const minutesString = minutes >= 10 ? `${minutes}` : `0${minutes}`
      const secondsString = seconds >= 10 ? `:${seconds}` : `:0${seconds}`
      return minutesString + secondsString
    }
  }
}
</script>