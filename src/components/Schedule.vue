<template>
  <li>
    <button v-if="showTimeValues" @click="toggleTimeValues" ><font-awesome-icon icon="minus" /></button>
    <button v-else @click="toggleTimeValues" ><font-awesome-icon icon="bars" /></button>
    {{ schedule.name }}
    <button @click="() => deleteSchedule(schedule.id)"><font-awesome-icon icon="trash-alt" /></button>
    <ul v-if="showTimeValues">
      <Timer v-for="timeValue in schedule.time_values_attributes" :key="timeValue.id" :timerValue="timeValue" />
    </ul>
  </li>
</template>

<script>
  import Timer from "./Timer"
  // import { fetchDELETE } from "../utilityFunctions/helpers"
  // import url from "../utilityFunctions/urls"

  export default {
    name: "Schedule",
    props: [ "schedule", "deleteSchedule" ],
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
    },
  }
</script>