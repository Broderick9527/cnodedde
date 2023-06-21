import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.use(VueRouter)
NProgress.configure({
  showSpinner: false
})
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('@/views/Home/Home.vue')
  },
  {
    name: 'detail',
    path: '/detail/:id',
    component: () => import('@/views/Detail/Detail.vue')
  },
  {
    name: 'novice',
    path: '/novice',
    component: () => import('@/views/Novice/Novice.vue')
  }
]

const router = new VueRouter({
  routes,
  // 切换路由页面时，页面会滚动到最顶部
  scrollBehavior (to, from, savedPosition) {
    return { y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  NProgress.start()
})

router.afterEach((to) => {
  // document.title = to.meta.title !== undefined ? '优医问诊--' + to.meta.title : ''
  NProgress.done()
})

export default router
