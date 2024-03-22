import { defineCollection, get, getAll, insert, remove } from 'aeria'

export const appointment = defineCollection({
  description: {
    $id: 'appointment',
    icon: 'clock-countdown',
    required: [
      'client',
      'date',
      'reason',
    ],
    properties: {
      client: {
        $ref: 'person',
        inline: true,
        description: 'Cliente',
      },
      date: {
        type: 'string',
        format: 'date-time',
        description: 'Horário',
      },
      reason: {
        type: 'string',
        description: 'Motivo',
      },
      complement: {
        type: 'string',
        element: 'textarea',
        description: 'Descrição',
      },
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
