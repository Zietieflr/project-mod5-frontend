<template>
  <div class="timer-container">
    <ul>
      <form v-on:submit.prevent class="add-timers">
        <label for="work-timer-Input" class="hidden">Work Time (minutes):</label>
        <input v-model="workTimeInput" name="work-timer-Input" type="number" placeholder="Work Time (minutes)" />
        <label for="break-timer-Input" class="hidden">Break Time (minutes):</label>
        <input v-model="breakTimeInput" name="break-timer-Input" type="number" placeholder="Break Time (minutes)" />
        <label for="add-timer" class="hidden">Add timer</label>
        <input type="submit" name="add-timer" value="✚" @click="addTimerValue">
      </form>
      <CompletedTimer v-for="(completedTimerValue, index) in completedTimerValues" :key="index" :completedTimerValue="completedTimerValue" />
      <Timer v-for="(timerValue, index) in timerValues" :key="index" :timerValue="timerValue" />
      <button @click="completedTimer" >Completed Timer</button>
    </ul>
  </div>
</template>

<script>
import Timer from './Timer'
import CompletedTimer from './CompletedTimer'

export default {
  name: 'TimerContainer',
  components: {
    Timer,
    CompletedTimer
  },
  data() {
    return {
      workTimeInput: '',
      breakTimeInput: '',
      timerValues: [],
      completedTimerValues: [],
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
