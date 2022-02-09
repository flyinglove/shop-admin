import { RouteRecordRaw, RouterView } from 'vue-router'

const routes:RouteRecordRaw = {
  path: 'permission',
  name: 'permission',
  component: RouterView,
  children: [
    {
      path: 'role',
      name: 'role',
      component: () => import('@/views/permission/role/index.vue')
    },
    {
      path: 'admin',
      name: 'admin',
      component: () => import('@/views/permission/admin/index.vue')
    },
    {
      path: 'rule',
      name: 'rule',
      component: () => import('@/views/permission/rule/index.vue')
    }
  ]
}
export default routes
