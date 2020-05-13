import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/index', component: () => import('../views/index.vue'), meta: { title: "花未央首页" }, },
  { path: '/style', component: () => import('../views/Style.vue'), meta: { title: "花未央-学无止境" }, }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    else return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) { document.title = to.meta.title }
  next();
})


export default router