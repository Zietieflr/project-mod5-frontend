<template>
  <div class="timer-container">
    <ul>
      <Timer />
    </ul>
  </div>
</template>

<script>
import Timer from './Timer'

export default {
  name: 'TimerContainer',
  components: {
    Timer
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
