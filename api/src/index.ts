import { init, createRouter } from 'aeria'
export * as collections from './collections'

export const router = createRouter()
router.GET('/transactionsBalance', async (context) => {
  const pending = await context.collections.transaction.model.aggregate([
    {
      $match: {
        paid: false,
      },
    },
    {
      $group: {
        _id: {
          $cond: [
            {
              $eq: [
                '$type',
                'Credito',
              ],
            },
            'CreditoNp',
            'DebitoNp',
          ],
        },
        value: {
          $sum: '$value',
        },
      },
    },
  ]).toArray()

  const balance = await context.collections.transaction.model.aggregate([
    {
      $match: {
        paid: true,
      },
    },
    {
      $group: {
        _id: {
          $cond: [
            {
              $eq: [
                '$type',
                'Credito',
              ],
            },
            'CreditoP',
            'DebitoP',
          ],
        },
        value: {
          $sum: '$value',
        },
      },
    },
  ]).toArray()

  const result = {
    balance: (balance?.find((item: any) => item._id === 'CreditoP')?.value ?? 0) -
    (balance?.find((item: any) => item._id === 'DebitoP')?.value ?? 0),
    payTransactions: pending?.find((item: any) => item._id === 'DebitoNp')?.value ?? 0,
    receiveTransaction: pending?.find((item: any) => item._id === 'CreditoNp')?.value ?? 0,
  }
  return result
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
