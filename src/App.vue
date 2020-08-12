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

</style>
