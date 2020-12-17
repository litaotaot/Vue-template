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
          // icon: 'el-icon-s-grid',
          icon: 'overview', // svg 配置文件
          oprId: 100000,
          route: true
        }
        // children: [
        //   // 所有children已做修改 仅展示menu prefix需添加该路由得path得父级路由路径, 真实组件匹配写在与父级同层次代码。
        //   {
        //     path: '/consumption',
        //     prefix: '/overview',
        //     redirect: '/overview', // 由于只做展示作用 避免path匹配到不存在页面 需重定向其及页面path
        //     hidden: true,
        //     meta: {
        //       title: '消费明细',
        //       icon: '',
        //       oprId: 100100
        //     }
        //   },
        //   {
        //     path: '/user',
        //     prefix: '/overview',
        //     redirect: '/overview', // 由于只做展示作用 避免path匹配到不存在页面 需重定向其及页面path
        //     hidden: true,
        //     meta: {
        //       title: '用户明细',
        //       icon: '',
        //       oprId: 100200
        //     }
        //   }
        // ]
      },
      {
        path: '/projectBill',
        name: 'projectBill',
        // component: Layout,
        component: () => import('@/page/projectBill'),
        hidden: true,
        // redirect: '/projectBill/consumption',
        meta: {
          title: '使用明细',
          // icon: 'el-icon-s-order',
          icon: 'bill', // svg 配置文件
          oprId: 200000,
          route: false
        },
        children: [
          {
            path: '/projectBill/consumption',
            name: 'projectBill_consumption',
            component: () => import('@/page/projectBill/consumption'),
            hidden: true,
            meta: {
              title: '消费明细',
              icon: '',
              oprId: 200100
            }
          },
          {
            path: '/projectBill/user',
            name: 'projectBill_user',
            component: () => import('@/page/projectBill/user'),
            hidden: true,
            meta: {
              title: '用户明细',
              icon: '',
              oprId: 200200
            }
          },
          {
            path: '/projectBill/subProject',
            name: 'projectBill_subProject',
            component: () => import('@/page/projectBill/subProject'),
            hidden: true,
            meta: {
              title: '子项目账单',
              icon: '',
              oprId: 200300
            }
          }
        ]
      }
    ]
  },
  { path: '/login', name: 'login', component: () => import('@/page/login'), hidden: true },
  { path: '/404', name: '404', component: () => import('@/page/errorPage/404'), hidden: true },
  { path: '/401', name: '401', component: () => import('@/page/errorPage/401'), hidden: true },
  { path: '*', redirect: '/404', hidden: true }
]

const router = new VueRouter({
  mode: 'hash',
  routes: NoAuthRouter
})

export default router
