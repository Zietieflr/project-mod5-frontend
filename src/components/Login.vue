<template>
  <form @submit.prevent >
    <fieldset v-if="showSignIn" >
      <legend>{{ submitToLabel }}</legend>
      <label for="username" class="hidden">Username:</label>
        <input name="username" id="username" placeholder="Username" />
      <label for="password" class="hidden">Password:</label>
        <input name="password" id="password" type="password" placeholder="Password" />
      <label for="login" class="hidden">Submit</label>
        <button name="login" id="login" ><font-awesome-icon icon="sign-in-alt" /></button>
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
  </form>
</template>

<script>
// import { login } from "./utilityFunctions/helpers"
// import url from "./utilityFunctions/urls"

export default {
  name: "Login",
  props: [ "toggleValidToken", "validToken" ],
  data() {
    return {
      showSignIn: false,
      isLogin: true,
      username: "",
      password: ""
    }
  },
  computed: {
    submitToLabel: function() {
      return this.isLogin ? "Login Here" : "Sign Up Here"
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
    },
    login() {
      // fetch
      // addToken
      // toggleValidToken()
      // error handling
    },
  }
}
</script>