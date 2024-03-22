import { userRoutes, dashboardRoutes } from 'aeria-ui'
import { AuthWall } from 'aeria-app-layout'
import { routes as autoRoutes } from 'vue-router/auto-routes'
import DashboardLayout from './pages/dashboard.vue'

export const routes = autoRoutes.concat([
  userRoutes(AuthWall),
  dashboardRoutes(DashboardLayout),
  {
    path: '/',
    component: () => import('./pages/index.vue'),
  },
  {
    path: '/appointment',
    component: () => import('./pages/appointment.vue'),
  },
])
