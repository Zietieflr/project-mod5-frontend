<template>
  <div id="app">
    <Title message="O'Tock" />
    <TimerContainer /> 
    <button type="button" @click="fart">Show notification</button>
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
  },
  methods: {
    fart () {
      // https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification#Parameters
      this.$notification.show('Hello World', {
        body: 'This is an example!'
      }, {})
    }
  }
}
</script>

<style>

</style>
