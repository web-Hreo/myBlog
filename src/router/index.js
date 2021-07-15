import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect:'/index', meta: { title: "何华前端博客_首页" }, },
  { path: '/index', component: () => import('@/views/index/index'), meta: { title: "何华前端博客_首页" }, },
  { path: '/style', component: () => import('@/views/style/style'), meta: { title: "何华前端博客_学无止境" }, },
  { path: '/article', component: () => import('@/views/file/article'), meta: { title: "何华前端博客_文章归档" }, },
  { path: '/tags', component: () => import('@/views/file/tags'), meta: { title: "何华前端博客_文章标签" }, },
  { path: '/hot', component: () => import('@/views/hot/index'), meta: { title: "何华前端博客_热度榜" }, },
  { path: '/mood', component: () => import('@/views/mood/index'), meta: { title: "何华前端博客_每日心情" }, },
  { path: '/links', component: () => import('@/views/links/index'), meta: { title: "何华前端博客_友情链接" }, },
  { path: '/message', component: () => import('@/views/message/index'), meta: { title: "何华前端博客_友情链接" }, },

  { path: '/aboutMe', component: () => import('../views/about/about_me'), meta: { title: "何华前端博客_关于我" }, },
  { path: '/project', component: () => import('../views/about/project'), meta: { title: "何华前端博客_项目分享" }, },
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