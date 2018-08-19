import Vue from 'vue'
import Router, { Route } from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
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
var a: string | null = window.localStorage.getItem('login')
router.beforeEach((from: Route, to: Route, next: Function) => {
  console.log(a)
  if (!a) {
    // history.pushState({}, 'account', '/account/')
    window.location.href = '/account/'
    // next()
  } else {
    next()
  }
})

export default router
