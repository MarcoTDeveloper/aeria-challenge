import { useApp, defineOptions, AeriaMain } from 'aeria-ui'
import waltzPtbr from '@aeria-ui/i18n-ptbr'
import { ptbr } from './i18n'
import { routes } from './routes'

import '@aeria-ui/ui/style.css'
import 'aeria-app-layout/style.css'
import './style/main.css'
import './style/main.less'

const options = defineOptions({
  component: AeriaMain,
  routes,
  i18n: {
    current: 'pt_BR',
    locales: {
      pt_BR: [
        waltzPtbr,
        ptbr,
      ],
    },
  },
  menuSchema: [
    '/dashboard/animal',
    '/dashboard/person',
    '/dashboard/checkin',
    '/dashboard/geolocation',
    '/dashboard/transaction',
    '/dashboard/appointment',
    '/dashboard/user',
    '/dashboard/financial',
  ],
})

useApp(options).then((app) => {
  app.mount()
})

