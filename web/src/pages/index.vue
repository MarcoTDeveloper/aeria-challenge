<script setup lang="ts">
type Checkins = {
  _id: string;
  animal: {
    name: string;
  };
  weight: number;
  temperature: number;
  reason: string;
  created_at: Date;
};

const document = ref('');
const result = ref<Checkins[]>([]);

const searchCheckins = async () => {
  const response = await fetch(`http://localhost:3000/api/searchCheckins?document=${document.value}`)
  result.value = await response.json()
  return result.value
}
</script>

<template>
<div
  class="
    tw-flex
    tw-flex-col
    tw-min-h-screen
  "
>
  <head class="
    tw-bg-indigo-500
    tw-flex
    tw-flex-col
    tw-items-center
    tw-justify-center
    tw-px-20
    tw-pb-10
  "
  >
    <div class="tw-flex tw-items-center tw-justify-between tw-w-full">
      <h1 class="tw-font-bold tw-text-white">CONSULTE O HISTÓRICO DO SEU PET!</h1>
      <a class="tw-font-bold tw-px-4 tw-py-2 tw-border-2 tw-rounded-md tw-border-indigo-700" href="/user/signin">Fazer login</a>
    </div>

    <div class="tw-flex tw-items-end tw-gap-2 tw-w-full">
      <aeria-input v-model="document" required class="tw-text-white tw-font-bold tw-w-full">Buscar pelo CPF</aeria-input>
      <aeria-button @click="searchCheckins" icon="magnifying-glass">Buscar</aeria-button>
    </div>
  </head>

  <main
    class="
      tw-flex
      tw-flex-col
      tw-gap-8
      tw-mx-20
      tw-mb-20
      tw-border-x-2
      tw-border-b-2
      tw-border-indigo-700
      tw-p-12
      tw-rounded-b-lg
    "
  >
    <template v-if="!result.length">
      <div class="tw-text-center tw-text-gray-500 tw-font-bold">
        Nada por aqui...
      </div>
    </template>
    <template v-else>
      <div v-for="checkin in result" :key="checkin._id">
        <span class="tw-font-bold tw-text-lg">
          Checkin feito em: {{ new Date(checkin.created_at).toLocaleDateString("pt-br") }}
        </span>
        <div
          class="
            tw-border-2
            tw-border-indigo-600
            tw-rounded-lg
            tw-shadow-lg
            tw-p-4
          "
        >
          <p class="tw-font-bold">Nome:</p>
          <p class="tw-ml-2">{{ checkin.animal.name }}</p>
          <p class="tw-font-bold">Peso (Kg):</p>
          <p class="tw-ml-2">{{ checkin.weight }}</p>
          <p class="tw-font-bold">Temperatura (C):</p>
          <p class="tw-ml-2">{{ checkin.temperature }}</p>
          <p class="tw-font-bold">Motivo:</p>
          <p class="tw-ml-2">{{ checkin.reason }}</p>
        </div>
      </div>
    </template>
  </main>
</div>
</template>
