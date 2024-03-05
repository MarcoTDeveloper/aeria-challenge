import { userRoutes, dashboardRoutes } from 'waltz-ui'
import DashboardLayout from './pages/_dashboard.vue'
import { AuthWall } from 'aeria-app-layout'

export const routes = [
  userRoutes(AuthWall),
  dashboardRoutes(DashboardLayout, [
    {
      path: '',
      component: () => import('./pages/dashboard/index.vue'),
      meta: {
        title: 'Dashboard',
        icon: 'gauge',
      },
    },
  ]),
  {
    path: '/',
    component: () => import('./pages/index.vue'),
  },
]

