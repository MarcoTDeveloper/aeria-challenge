import { defineCollection, get, getAll, insert, remove } from 'sonata-api'

export const geolocation = defineCollection({
  description: {
    $id: 'geolocation',
    icon: 'address-book',
    required: ['country', 'zip_code', 'country', 'state', 'district', 'number'],
    properties: {
      zip_code: {
        type: 'string',
        description: 'CEP',
      },
      country: {
        type: 'string',
        description: 'País',
      },
      state: {
        type: 'string',
        description: 'Estado',
      },
      district: {
        type: 'string',
        description: 'Distrito',
      },
      number: {
        type: 'string',
        description: 'Número',
      },
      complement: {
        type: 'string',
        description: 'Complemento'
      }
    },
    presets: ['crud'],
  },
  functions: {
    get,
    getAll,
    insert,
    remove,
  },
})