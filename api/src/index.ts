import { init, createRouter, left } from 'sonata-api'
export * as collections from './collections'

export const router = createRouter()
router.GET("/searchCheckins", async (context) => {
  const document:string = context.request.query.document;
  
  const person = await context.collections.person.functions.get({
    filters:{
      document
    }
  }
  )
  if (!person){
    return left("person not found")
  }
  const ownerAnimal = await context.collections.animal.functions.getAll(
    {
      filters: {
        owner:person._id
      }
    });
  const checkinanimal = await context.collections.checkin.functions.getAll(
    {
      filters:{
        animal:{ $in:ownerAnimal.map(e=>e._id)}
      }
    }
  )
    return checkinanimal
  })



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

