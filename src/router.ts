import Vue from 'vue'
import Router, { Route } from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home'
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
var a: any = null
router.beforeEach((from: Route, to: Route, next: Function) => {
  if (a == null) {
    next({ path: '/account/' })
  } else {
    next()
  }
})

export default router
