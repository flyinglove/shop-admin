import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import productRoutes from './modules/product'
import orderRoutes from './modules/order'
import permissionRoutes from './modules/permission'
import mediaRoutes from './modules/media'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'

const routes:RouteRecordRaw[] = [{
  path: '/',
  component: AppLayout,
  meta: {
    rquiresAuth: true
  },
  children: [
    {
      path: '',
      name: 'home',
      component: () => import('../views/home/index.vue')
    }, productRoutes, orderRoutes, permissionRoutes, mediaRoutes]
},
{
  path: '/login',
  name: 'login',
  component: () => import('../views/login/index.vue')
}]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from) => {
  console.log(to.meta, store.state)
  if (to.meta.rquiresAuth && !store.state.user) {
    return {
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    }
  }
  nprogress.start()
})
router.afterEach(() => {
  nprogress.done()
})
export default router
