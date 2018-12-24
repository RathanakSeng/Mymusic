<template>
  <v-layout row>
    <v-flex xs6 offset-xs3>
      <panel title="Login">
        <div class="pl-4 pr-4 pt-2 pb2" slot="body">
          <v-form>
            <v-text-field
              type="email"
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
            <v-text-field
              type="password"
              v-model="password"
              :rules="passwordRules"
              label="Password"
              required
            ></v-text-field>
            <v-btn @click="login" class="amber darken-2" dark>login</v-btn>
          </v-form>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>
<script>
/**
 * Use to bind the html to the controller
 * Everything insid the script tag is the controller
 */
import authenticationServices from '@/services/authenticationServices'
import Panel from '@/components/Panel'
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
        v => !!v || 'Password is required',
        v => /[a-fA-F0-9]/.test(v) || 'Password cannot contain specail character'
      ]
    }
  },
  methods: {
    // @click="register"
    async login () {
      const response = await authenticationServices.login({
        email: this.email,
        password: this.password
      })
      this.$store.dispatch('setToken', response.data.token)
      this.$store.dispatch('setUser', response.data.user)
    }
  },
  components: {
    Panel
  }
}
</script>
