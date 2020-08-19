<template>
  <form @submit.prevent class="sign-in-form" >
    <fieldset v-if="showSignIn && !validToken" >
      <legend>{{ submitToLabel }}</legend>
      <label for="username" class="hidden">Username:</label>
        <input v-model="username" name="username" id="username" placeholder="Username" />
      <label for="password" class="hidden">Password:</label>
        <input v-model="password" name="password" id="password" type="password" placeholder="Password" />
      <label for="sign-in" class="hidden" >Submit</label>
        <button name="sign-in" id="sign-in" @click="signIn" ><font-awesome-icon icon="sign-in-alt" /></button>
      <label for="toggleSignUp" class="hidden">Switch to {{ switchToLabel }}</label>
        <button name="toggleSignUp" id="toggleSignup" @click="toggleSignIn" ><font-awesome-icon icon="sync-alt" /></button>
    </fieldset>
    <fieldset>
      <label v-if="!validToken" for="show-login" class="hidden">Show Login</label>
        <button v-if="!validToken" name="show-login" id="show-login" @click="toggleShowSignIn" >
          <font-awesome-icon v-if="!showSignIn" icon="sign-in-alt" />
          <font-awesome-icon v-if="showSignIn" icon="eye" />
        </button>
      <label v-if="validToken" for="sign-out" class="hidden">Log Out</label>
        <button v-if="validToken" name="sign-out" id="sign-out" @click="logout">
          <font-awesome-icon icon="sign-out-alt" />
        </button>
    </fieldset>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <p v-if="validToken && username" class="welcome">Welcome, {{ username }}!</p>
  </form>
</template>

<script>
import { login } from "../utilityFunctions/helpers"
import url from "../utilityFunctions/urls"

export default {
  name: "Login",
  props: [ "toggleValidToken", "validToken" ],
  data() {
    return {
      showSignIn: false,
      isLogin: true,
      username: "",
      password: "",
      errorMessage: "",
    }
  },
  mounted: function() {
    if(localStorage.getItem("token")) {
      this.setError("")
      this.toggleValidToken()
    }
  },
  computed: {
    submitToLabel: function() {
      return this.isLogin ? "Login Here:" : "Sign Up Here:"
    },
    switchToLabel: function() {
      return this.isLogin ? "Sign Up" : "Login"
    }
  },
  methods: {
    toggleShowSignIn() {
      this.showSignIn = !this.showSignIn
    },
    toggleSignIn() {
      this.isLogin = !this.isLogin
    },
    logout() {
      localStorage.removeItem("token")
      this.toggleValidToken()
      this.username = ""
      this.password = ""
    },
    signIn() {
      const urlKey = this.isLogin ? "login" : "users"
      login(url(urlKey), {user: {username: this.username, password: this.password}})
        .then(result => {
          if(result.error) {
            this.setError(result.error)
          } else {
            localStorage.setItem("token", result.token)
            this.setError("")
            this.toggleValidToken()
            this.toggleShowSignIn()
            !this.isLogin ? this.toggleSignIn() : null
          }
        })
    },
    setError(error) {
      this.errorMessage = error
    }
  }
}
</script>