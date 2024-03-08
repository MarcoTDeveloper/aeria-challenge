import { defineCollection, get, getAll, insert, remove, upload } from 'sonata-api'

export const animal = defineCollection({
  description: {
    $id: 'animal',
    icon: 'dog',
    required: ['name', 'owner', 'age'],
    properties: {
      name: {
        type: 'string',
        description: 'Nome',
      },
      owner: {
        $ref: 'person',
        indexes: ['person', 'name'],
        description: 'Dono',
      },
      age: {
        type: 'number',
        description: 'Idade',
      },
      pictures: {
        $ref: 'file',
        description: 'Foto',
      }
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
