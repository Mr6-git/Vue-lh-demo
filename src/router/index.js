import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import layout from '@/components/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'testview',
      component: layout,
      meta: {
        nema: '首屏页'
      },
      redirect: '/testview',
      children: [
        {
          path: '/testview',
          name: 'testview',
          component: () => import('@/view/testview/index'),
          meta: {
            name: '首屏页'
          }
        }
      ]
    },
    {
      path: '/console',
      name: 'console',
      component: layout,
      meta: {
        name: '控制台'
      },
      children: [
        {
          path: '/console/view',
          name: 'console_view',
          component: () => import('@/view/console/view/index'),
          meta: {
            name: '控制台看板',
            role: ['A','B']
          }
        },
        {
          path: '/console/setting',
          name: 'console_setting',
          component: () => import('@/view/console/setting/index'),
          meta: {
            name: '控制台设置',
            role: ['A','B']
          }
        }
      ]
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/view/error_page/page_404')
    },
    { path: '*', redirect: '/404', hidden: true }
  ]
})

