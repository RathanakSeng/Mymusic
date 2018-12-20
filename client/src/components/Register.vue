<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-3">
        <v-toolbar flat dense class="amber darken-2" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb2">
          <v-form>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              label="Password"
              required
            ></v-text-field>
            <v-btn @click="register" class="amber darken-2" dark>Register</v-btn>
          </v-form>
          <!-- <div class="error" v-html="error" /> -->
        </div>
      </div>
    </v-flex>
  </v-layout>
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
      emailRules: [
        v => !!v || 'Email is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Email must be valid'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required'
      ],
      error: null
    }
  },
  methods: {
    // @click="register"
    async register () {
      try {
        await authenticationServices.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.message
      }
    }
  }
}
</script>
<style>
  .error {
    color: red
  }
</style>
