import { defineCollection, get, getAll, insert, remove } from 'aeria'

export const person = defineCollection({
  description: {
    $id: 'person',
    icon: 'person',
    required: [
      'name',
      'email',
      'phone',
      'type',
    ],
    properties: {
      name: {
        type: 'string',
        description: 'Nome',
      },
      document: {
        type: 'string',
        description: 'CPF / CNPJ',
      },
      email: {
        type: 'string',
        description: 'Email',
      },
      phone: {
        type: 'string',
        description: 'Telefone',
      },
      type: {
        enum: ['Cliente'],
        description: 'Tipo',
      },
      ie: {
        type: 'string',
        description: 'Inscrição estadual',
      },
      animal: {
        type: 'array',
        items: {
          $ref: 'animal',
          indexes: ['name'],
        },
        description: 'Animal',
      },
      address: {
        $ref: 'geolocation',
        inline: true,
        description: 'Endereço',
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
