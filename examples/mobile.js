/* eslint-disable no-trailing-spaces,comma-spacing */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './WapApp'
import VueRouter from 'vue-router'
import routers from './router'
import RLEM from '../packages'
import axios from 'axios'
// import VueLazyload from 'vue-lazyload'
import '../packages/theme-default/src/scss/index.scss'
import '../packages/utils/touch-simulator'
// import '../theme/index.css'

// import RLEM from 'recharger'
// const base=
Vue.prototype.$axios = axios
require('./mock')
Vue.use(RLEM)

const router = new VueRouter({
  mode: 'hash',
  base: (process.env.BUILD_ENV === 'prod' ? '/RUI/dist' : '') + '/examples.html',
  // base: '/examples.html',
  routes: routers(true)
})

window.vueRouter = router
router.beforeEach((to, from, next) => {
  // console.log(to.name , from.name,'/examples.html#' + to.fullPath)
  // to.name !== from.name && from.name !== null ? document.location = '/examples.html#' + to.fullPath : next()
  next()
})
router.afterEach((to, from, next) => {
  // window.top.vueRouter.replace({ path: to.path })
})
Vue.config.productionTip = false
// router.afterEach((to, from) => {

// })
// console.log(routers(true))
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
