<template>
  <div class="timer-container">
    <ul>
      <form v-on:submit.prevent class="add-timers">
        <label for="work-timer-Input" class="hidden">Work Time (minutes):</label>
        <input v-model="workTimeInput" name="work-timer-Input" type="number" placeholder="Work Time (minutes)" />
        <label for="break-timer-Input" class="hidden">Break Time (minutes):</label>
        <input v-model="breakTimeInput" name="break-timer-Input" type="number" placeholder="Break Time (minutes)" />
        <label for="add-timer" class="hidden">Add timer</label>
        <a name="add-timer" @click="addTimerValue"><font-awesome-icon icon="plus" /></a>
        <label for="start-timers" class="hidden">Start Timers</label>
        <a name="start-timers" @click="startOnClick"><font-awesome-icon icon="play" /></a>
        <label for="clear-all" class="hidden">Clear All</label>
        <a name="clear-all" @click="clearTimerValues"><font-awesome-icon icon="trash-alt" /></a>
      </form>
      <CompletedTimer v-for="(completedTimerValue, index) in completedTimerValues" :key="index + 'ctv'" :completedTimerValue="completedTimerValue" />
      <Timer v-for="(timerValue, index) in timerValues" :key="index + 'itv'" :timerValue="timerValue" />
    </ul>
  </div>
</template>

<script>
import Timer from './Timer'
import CompletedTimer from './CompletedTimer'
import { startTimer } from '../utilityFunctions/timer'

export default {
  name: "TimerContainer",
  components: {
    Timer,
    CompletedTimer
  },
  data() {
    return {
      workTimeInput: "",
      breakTimeInput: "",
      timerValues: [],
      completedTimerValues: [],
      canStart: false,
    }
  },
  methods: {
    addTimerValue: function() {
      const newTimerValue = { 
        workTime: this.workTimeInput, 
        breakTime: this.breakTimeInput
      }
      this.timerValues.push(newTimerValue)
    },
    completedTimer: function() {
      const completedTimerValue = this.timerValues.shift()
      this.completedTimerValues.push(completedTimerValue)
    },
    startOnClick: function() {
      startTimer(
        this.timerValues[0], 
        this.completedTimer,
        this.workTimerSystemNotification,
        this.breakTimerSystemNotification,
      )
    },
    clearTimerValues: function() {
      this.timerValues = []
      this.completedTimerValues = []
    },
    workTimerSystemNotification() {
      this.$notification.show("Stop working!", {
        body: "Your break is just a click away!"
      }, {})
      this.workTimerPageNotification()
    },
    workTimerPageNotification() {
      this.$swal("Work over!")
    },
    breakTimerSystemNotification() {
      this.$notification.show("Let's get back to it!", {
        body: "Your focus window is just a click away!"
      }, {})
      this.breakTimerPageNotification()
    },
    breakTimerPageNotification() {
      this.$swal("Break over!")
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
