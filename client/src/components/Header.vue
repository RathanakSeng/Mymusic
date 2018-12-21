<template>
  <v-toolbar fixed class="amber darken-2" dark>
    <v-toolbar-title class="mr-4">
      <span id="home" @click="navigateTo({name: 'home'})">
        Rmusic
      </span>
    </v-toolbar-title>
    <!-- TODO: Implement me -->
    <!-- <v-toolbar-items>
        <v-btn flat dark>
            Browse
        </v-btn>
    </v-toolbar-items> -->
    <v-spacer/>
    <v-toolbar-items>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark
        @click="navigateTo({name: 'login'})">
        Login
      </v-btn>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark
        @click="navigateTo({name: 'register'})">
        Sign up
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #home {
    cursor: pointer;
  }
</style>
