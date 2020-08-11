<template>
  <li class="timer">
    <label for="work-time">Work Time:</label>
    <input v-model="workTime" />
    <label for="break-time">Break Time:</label>
    <input v-model="breakTime" />
  </li>
</template>

<script>
export default {
  name: 'Timer',
  props: {
    
      },
  methods: {
    setTimer: {
      function() {

      },
    },
  },
  data() {
    return {
      workTime: '',
      breakTime: ''
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