import Vue from 'vue'
import App from './App.vue'
import { router } from './routes'
import connect from 'socket.io-client'

const socket = connect('http://localhost:3001')

Vue.config.productionTip = false

new Vue({
  socket,
  router,
  render: h => h(App),
}).$mount('#app')
