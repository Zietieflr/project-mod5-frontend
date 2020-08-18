<template>
  <div id="app">
    <Title message="O'Tock" />
    <TimerContainer /> 
    <Login :toggleValidToken="toggleValidToken" :validToken="validToken" />
  </div>
</template>

<script>
import Title from "./components/Title"
import TimerContainer from "./components/TimerContainer"
import Login from "./components/Login"

export default {
  name: 'App',
  components: {
    Title,
    TimerContainer,
    Login
  },
  data() {
    return {
      validToken: false,
    }
  },
  methods: {
    tokenTrue() {
      return localStorage.getItem("token") ? true : false
    },
    toggleValidToken() {
      this.validToken = !this.validToken
    }
  }
}
</script>

<style>

</style>
