import { defineCollection, get, getAll, insert, remove } from 'sonata-api'

export const animal = defineCollection({
  description: {
    $id: 'animal',
    icon: 'dog',
    required: ['name', 'owner', 'age'],
    properties: {
      name: {
        type: 'string',
        description: 'Nome'
      },
      owner: {
        type: 'string',
        description: 'Dono'
      },
      age: {
        type: 'number',
        description: 'Idade'
      },
      // pictures: {
        //perguntar sobre - pictures -> file[]
      // }
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
