<template>
  <main class="timer-container">
    <ul>
      <form v-on:submit.prevent class="add-timers">
        <label for="work-timer-Input" class="hidden">Work Time (minutes):</label>
        <input v-model="workTimeInput" name="work-timer-Input" type="number" placeholder="Work Time (minutes)" />
        <label for="break-timer-Input" class="hidden">Break Time (minutes):</label>
        <input v-model="breakTimeInput" name="break-timer-Input" type="number" placeholder="Break Time (minutes)" />
        <label for="add-timer" class="hidden">Add timer</label>
        <button name="add-timer" @click="addTimerValue"><font-awesome-icon icon="plus" /></button>
        <label for="start-timers" class="hidden">Start Timers</label>
        <button name="start-timers" @click="startOnClick" v-if="canStart"><font-awesome-icon icon="play" /></button>
        <label for="reset-complete" class="hidden">Reset Completed Timers</label>
        <button name="reset-complete" @click="recycleTimers" v-if="renderRecycleButton()"><font-awesome-icon icon="history" /></button>
        <label for="clear-all" class="hidden">Clear All</label>
        <button name="clear-all" @click="clearTimerValues" v-if="renderTrashButton()"><font-awesome-icon icon="trash-alt" /></button>
      </form>
      <CompletedTimer v-for="(completedTimerValue, index) in completedTimerValues" :key="index + 'ctv'" :completedTimerValue="completedTimerValue" />
      <Timer v-for="(timerValue, index) in timerValues" :key="index + 'itv'" :timerValue="timerValue" />
    </ul>
    <VisualTimer v-if="start" :timerValue="timerValues[0]" :recentWorkTimer="recentWorkTimer" :setStart="setStart" />
    <SchedulesContainer v-if="validToken" /> 
  </main>
</template>

<script>
import Timer from "./Timer"
import CompletedTimer from "./CompletedTimer"
import VisualTimer from "./VisualTimer"
import { startTimer } from "../utilityFunctions/timer"
import SchedulesContainer from "./SchedulesContainer"

export default {
  name: "TimerContainer",
  components: {
    Timer,
    CompletedTimer,
    VisualTimer,
    SchedulesContainer
  },
  props: [ "validToken" ],
  data() {
    return {
      workTimeInput: "",
      breakTimeInput: "",
      timerValues: [],
      completedTimerValues: [],
      canStart: false,
      start: false,
      recentWorkTimer: false,
    }
  },
  methods: {
    addTimerValue: function() {
      const newTimerValue = { 
        workTime: this.workTimeInput, 
        breakTime: this.breakTimeInput
      }
      this.timerValues.push(newTimerValue)
      this.canStart = true
    },
    completedTimer: function() {
      const completedTimerValue = this.timerValues.shift()
      this.completedTimerValues.push(completedTimerValue)
      this.timerValues.length ? this.canStart = true : this.canStart = false 
    },
    startOnClick: function() {
      startTimer(
        this.timerValues[0],
        this.setRecentWorkTimer, 
        this.completedTimer,
        this.workTimerSystemNotification,
        this.breakTimerSystemNotification,
      )
      this.start = true
    },
    setStart(boolean) {
      this.start = boolean
    },
    setRecentWorkTimer(setTo = "skip") {
      setTo === "skip" 
        ? this.recentWorkTimer
        : this.recentWorkTimer = setTo
      return this.recentWorkTimer
    },
    clearTimerValues: function() {
      this.timerValues = []
      this.completedTimerValues = []
      this.canStart = false
    },
    workTimerSystemNotification() {
      this.$notification.show("Stop working!", {
        body: "Your break is just a click away!"
      }, {})
      this.workTimerPageNotification()
    },
    workTimerPageNotification() {
      this.$swal({
        title: "One down!",
        text: `Take a break, it'll still be there in ${this.timerValues[0].breakTime} minutes!`,
        icon: "success",
        buttons: {
          break: {
            text: "Break!",
            value: true
          },
          cancel: false,
        }
      })
        .then( value => value ? this.startOnClick() : null )
    },
    breakTimerSystemNotification() {
      this.$notification.show("Let's get back to it!", {
        body: "Your focus window is just a click away!"
      }, {})
      this.breakTimerPageNotification()
    },
    breakTimerPageNotification() {
      this.timerValues.length 
        ? this.$swal({
          title: "Invigorating!",
          text: "Let's get back to it!",
          buttons: {
            break: {
              text: "Focus!",
              value: true
            },
            cancel: false,
          }
        }).then( value => value ? this.startOnClick() : null )
        : this.$swal(
          "Set complete!",
          "Look at all the hard work you did! See you next time!"
        ) && (this.canStart = false)
    },
    renderTrashButton() {
      return (this.timerValues.length > 0 || this.completedTimerValues.length > 0)
        ? true
        : false
    },
    renderRecycleButton() {
      return this.completedTimerValues.length
        ? true
        : false
    },
    recycleTimers() {
      this.completedTimerValues.reverse().forEach(value => {this.timerValues.unshift(value)})
      this.completedTimerValues = []
      this.setRecentWorkTimer(false)
      this.canStart = true
    },
  }
}

</script>
