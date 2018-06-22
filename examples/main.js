/* eslint-disable space-in-parens */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routers from './router'

// import RLEM from 'recharger'
//
// Vue.use(RLEM)

const router = new VueRouter({
  mode: 'hash',
  base: '/',
  routes: routers()
})
Vue.config.productionTip = false
router.beforeEach((to, from,next) => {
  next()
})
router.afterEach((to, from) => {
  Vue.nextTick(() => window.syncPath())
})
window.vueRouter = router
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
