import { defineCollection, get, getAll, insert, remove } from 'aeria'

export const transaction = defineCollection({
  description: {
    $id: 'transaction',
    icon: 'money',
    required: [
      'type',
      'value',
    ],
    properties: {
      type: {
        enum: [
          'Credito',
          'Debito',
        ],
        description: 'Tipo',
      },
      value: {
        type: 'number',
        description: 'Valor (R$)',
      },
      invoice: {
        type: 'string',
        description: 'Fatura',
      },
      description: {
        type: 'string',
        description: 'Descrição',
        element: 'textarea',
      },
      paid: {
        type: 'boolean',
        description: 'Pago',
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
