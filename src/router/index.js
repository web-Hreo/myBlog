import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect:'/index', meta: { title: "何华前端博客_首页" }, },
  { path: '/index', component: () => import('@/views/index/index'), meta: { title: "何华前端博客_首页" }, },
  { path: '/style', component: () => import('@/views/style/style'), meta: { title: "何华前端博客_学无止境" }, },
  { path: '/article', component: () => import('@/views/article/article'), meta: { title: "何华前端博客_学无止境" }, },
  { path: '/hot', component: () => import('@/views/hot/index'), meta: { title: "何华前端博客_热度榜" }, },
  { path: '/mood', component: () => import('@/views/mood/index'), meta: { title: "何华前端博客_每日心情" }, },
  { path: '/navigation', component: () => import('@/views/navigation/index'), meta: { title: "何华前端博客_学习导航" }, },
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