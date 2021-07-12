import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect:'/index', meta: { title: "何华前端博客_首页" }, },
  { path: '/index', component: () => import('../views/index/index'), meta: { title: "何华前端博客_首页" }, },
  { path: '/style', component: () => import('../views/style/style'), meta: { title: "何华前端博客_学无止境" }, }
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