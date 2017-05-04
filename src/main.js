// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import Home from './components/Home.vue'
import Ghost from './components/Ghost.vue'
import Queens from './components/Queens.vue'
import Sabbath from './components/Sabbath.vue'

//Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/ghost', component: Ghost },
  { path: '/queens', component: Queens },
  { path: '/sabbath', component: Sabbath }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
