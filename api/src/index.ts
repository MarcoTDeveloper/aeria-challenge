import { init, createRouter } from 'sonata-api'
// import { pizzaRoutes } from './routes'
export * as collections from './collections'

export const router = createRouter()
// router.group('/pizza', pizzaRoutes)

export default init({
  config: {
    apiUrl: process.env.API_URL,
    secret: process.env.APPLICATION_SECRET,
    database: {
      mongodbUrl: process.env.MONGODB_URL,
    },
    defaultUser: {
      username: process.env.GODMODE_USERNAME,
      password: process.env.GODMODE_PASSWORD,
    },
    storage: {
      fs: process.env.STORAGE_PATH,
      tempFs: process.env.STORAGE_TEMP_PATH,
    },
  },
  callback: async (context) => {
    return router.install(context)
  },
})

