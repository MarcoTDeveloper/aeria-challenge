import { useApp, defineOptions, AeriaMain } from 'waltz-ui'
import waltzPtbr from '@waltz-ui/i18n-ptbr'
import { ptbr } from './i18n'
import { routes } from './routes'

import '@waltz-ui/ui/style.css'
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
    '/dashboard/person',
    '/dashboard/animal',
    '/dashboard/checkin',
    '/dashboard/geolocation',
    '/dashboard/user',
    // '/dashboard/pizza',
  ],
})

useApp(options).then((app) => {
  app.mount()
})

