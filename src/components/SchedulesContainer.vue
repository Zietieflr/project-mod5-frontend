<template>
  <section class="schedules-container" >
    <h3>Schedules</h3>
    <ul v-if="(schedules.length > 0)">
      <Schedule 
        v-for="schedule in schedules" 
        :key="schedule.id" 
        :schedule="schedule" 
        :deleteSchedule="deleteSchedule" 
        :addFromSchedule="addFromSchedule"
      />
    </ul>
  </section>
</template>

<script>
  import Schedule from "./Schedule"
  import { fetchDELETE } from "../utilityFunctions/helpers"
  import url from "../utilityFunctions/urls"

  export default {
    name: "SchedulesContainer",
    props: [ "validToken", "schedules", "setSchedules", "getSchedules", "addFromSchedule" ],
    components: {
      Schedule,
    },
    mounted: function() {
      if(this.validToken) { this.getSchedules }
    },
    methods: {
      deleteSchedule(id) {
        fetchDELETE(url("schedules"), id)
        this.setSchedules(this.schedules.filter( schedule => schedule.id !== id ))
      },
    },
    watch: {
      validToken: function() {
        this.validToken ? this.getSchedules() : this.setSchedules([])
      }
    }
  }
</script>