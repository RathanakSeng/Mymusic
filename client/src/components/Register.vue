<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" v-model="email" placeHolder="email">
    <br>
    <input type="password" name="password" v-model="password" placeHolder="password">
    <br>
    <button @click="register">Register</button>
  </div>
</template>
<script>
/**
 * Use to bind the html to the controller
 * Everything insid the script tag is the controller
 */
import authenticationServices from '@/services/authenticationServices'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await authenticationServices.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>
