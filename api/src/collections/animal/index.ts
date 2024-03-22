import { defineCollection, get, getAll, insert, remove, upload } from 'aeria'

export const animal = defineCollection({
  description: {
    $id: 'animal',
    icon: 'dog',
    required: ['name'],
    properties: {
      name: {
        type: 'string',
        description: 'Nome',
      },
      age: {
        type: 'number',
        description: 'Idade',
      },
      pictures: {
        $ref: 'file',
        accept: ['image/*'],
        description: 'Foto',
      },
      breed: {
        type: 'string',
        description: 'Raça',
      },
      species: {
        type: 'string',
        description: 'Especie',
      },
    },
    presets: ['crud'],
  },
  functions: {
    get,
    getAll,
    upload,
    insert,
    remove,
  },
})
