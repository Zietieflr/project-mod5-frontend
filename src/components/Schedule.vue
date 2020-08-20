<template>
  <li class="schedule">
    <p>{{ schedule.name }}</p>
    <button v-if="showTimeValues" @click="toggleTimeValues" >
      <font-awesome-icon icon="minus" />
    </button>
    <button v-else @click="toggleTimeValues" >
      <font-awesome-icon icon="bars" />
    </button>
    <button @click="handleAddFromSchedule">
      <font-awesome-icon icon="plus" />
    </button>
    <button @click="() => deleteSchedule(schedule.id)">
      <font-awesome-icon icon="trash-alt" />
    </button>
    <ul v-if="showTimeValues">
      <Timer 
        v-for="timeValue in schedule.time_values_attributes" 
        :key="timeValue.id" 
        :timerValue="timeValue" 
      />
    </ul>
  </li>
</template>

<script>
  import Timer from "./Timer"

  export default {
    name: "Schedule",
    props: [ "schedule", "deleteSchedule", "addFromSchedule" ],
    components: {
      Timer,
    },
    data() {
      return {
        showTimeValues: false,
      }
    },
    methods: {
      toggleTimeValues() {
        this.showTimeValues = !this.showTimeValues
      },
      handleAddFromSchedule() {
        this.schedule.time_values_attributes.forEach(value => {
          const toAdd = {workTime: value.work_time, breakTime: value.break_time}
          this.addFromSchedule(toAdd)
        })
      }
    },
  }
</script>