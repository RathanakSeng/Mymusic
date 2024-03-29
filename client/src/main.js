// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/* include style */
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import {sync} from 'vuex-router-sync'
import store from '@/store/store'

Vue.config.productionTip = false
Vue.use(Vuetify) // enable vuetify

sync(store, router)

// These are the global variable use with $ sign
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
