import VueRouter from 'vue-router'
import Layout from '@/layout/layout.vue'

// 无需权限页面
export const NoAuthRouter = [
  {
    path: '/',
    component: Layout,
    redirect: '/overview',
    children: [
      {
        path: '/overview',
        name: 'overview',
        component: () => import('@/page/overview'),
        hidden: true, // 需要在路由中展示hiddele设置为true
        meta: {
          title: '使用总览',
          icon: 'el-icon-s-grid',
          oprId: 100000
        },
        children: [
          // 所有children已做修改 仅展示menu prefix需添加该路由得path得父级路由路径, 真实组件匹配写在与父级同层次代码。
          {
            path: '/consumption',
            prefix: '/overview',
            redirect: '/overview', // 由于只做展示作用 避免path匹配到不存在页面 需重定向其及页面path
            hidden: true,
            meta: {
              title: '消费明细',
              icon: '',
              oprId: 100100
            }
          },
          {
            path: '/user',
            prefix: '/overview',
            redirect: '/overview', // 由于只做展示作用 避免path匹配到不存在页面 需重定向其及页面path
            hidden: true,
            meta: {
              title: '用户明细',
              icon: '',
              oprId: 100200
            }
          }
        ]
      },
      {
        path: '/projectBill',
        name: 'projectBill',
        component: () => import('@/page/projectBill'),
        hidden: true,
        meta: {
          title: '子项目账单',
          icon: 'el-icon-s-order',
          oprId: 200000
        }
      },
      {
        path: '/overview/consumption',
        name: 'overview_consumption',
        component: () => import('@/page/overview/consumption'),
        meta: {
          title: '消费明细',
          icon: '',
          oprId: 100100
        }
      },
      {
        path: '/overview/user',
        name: 'overview_user',
        component: () => import('@/page/overview/user'),
        meta: {
          title: '用户明细',
          icon: '',
          oprId: 100200
        }
      }
    ]
  },
  { path: '/login', name: 'login', component: () => import('@/page/login1'), hidden: true },
  { path: '/404', name: '404', component: () => import('@/page/login1'), hidden: true },
  { path: '/401', name: '401', component: () => import('@/page/login1'), hidden: true }
]

const router = new VueRouter({
  mode: 'hash',
  routes: NoAuthRouter
})

export default router
