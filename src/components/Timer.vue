<template>
  <li class="timer-value">
    <p>
      Work time: {{ timerValue.workTime }}
    </p>
    <p>
      Break time: {{ timerValue.breakTime }}
    </p>
  </li>
</template>

<script>
export default {
  name: 'Timer',
  props: [ 'timerValue' ],  
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
