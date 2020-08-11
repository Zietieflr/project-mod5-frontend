<template>
  <div id="app">
    <Title message="O'Tock" />
    <TimerContainer /> 
  </div>
</template>

<script>
import Title from './components/Title'
import TimerContainer from './components/TimerContainer'

export default {
  name: 'App',
  components: {
    Title,
    TimerContainer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
