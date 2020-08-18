<template>
  <section class="schedules-container" >
    <h3>Schedules</h3>
    <ul v-if="(schedules.length > 0)">
      <Schedule 
        v-for="schedule in schedules" 
        :key="schedule.id" 
        :schedule="schedule" 
        :deleteSchedule="deleteSchedule" 
      />
    </ul>
  </section>
</template>

<script>
  import Schedule from "./Schedule"
  import { fetchGET, fetchDELETE } from "../utilityFunctions/helpers"
  import url from "../utilityFunctions/urls"

  export default {
    name: "SchedulesContainer",
    props: [ "validToken" ],
    components: {
      Schedule,
    },
    data() {
      return {
        schedules: [],
      }
    },
    mounted: function() {
      if(this.validToken) { this.getSchedules }
    },
    methods: {
      setSchedules(schedules) {
        this.schedules = schedules
      },
      renameAttributes(schedules) {
        return schedules.map(schedule => {
          schedule.time_values_attributes = schedule.time_values
          delete schedule.time_values
          return schedule
        })
      },
      getSchedules() {
        fetchGET(url("schedules"))
          .then(result => this.setSchedules(this.renameAttributes(result)))
      },
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