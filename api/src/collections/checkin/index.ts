import { defineCollection, get, getAll, insert, remove } from 'sonata-api'

export const checkin = defineCollection({
  description: {
    $id: 'checkin',
    icon: 'check-circle',
    required: ['animal', 'weight', 'type', 'reason'],
    properties: {
      animal: {
        type: 'string',
        description: 'Nome'
      },
      weight: {
        type: 'number',
        description: 'Peso (Kg)'
      },
      temperature: {
        type: 'number',
        description: 'Temperatura (Cº)'
      },
      type: {
        type: 'object',
        description: 'Tipo',
        properties: {
          routine: {
            type:'boolean',
            description: 'Rotina'
          },
          emergency: {
            type: 'boolean',
            description: 'Emergência'
          },
        },
      },
      reason: {
        type: 'string',
        description: 'Razão'
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