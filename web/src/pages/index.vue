<script setup lang="ts">
import Header from '../components/Header.vue';
import { ref } from "vue";

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
    class="tw-flex tw-flex-col tw-h-screen"
  >
    <Header />
      
    <div class="tw-flex tw-items-end tw-gap-4 tw-flex-col md:tw-flex-row tw-py-4 tw-mx-10 md:tw-mx-20">
      <div class="tw-flex tw-flex-col tw-gap-1 tw-w-full">
        <label for="search_by_document" class="tw-text-indigo-400 tw-font-bold tw-text-xl">Consulte o histórico do seu pet:</label>
        <input
          v-model="document"
          type="search"
          name="search_by_document"
          id="search_by_document"
          placeholder="Buscar pelo CPF"
          class="
          focus:tw-outline-indigo-300
          placeholder:tw-text-indigo-300  placeholder:tw-font-bold
          tw-px-4 tw-bg-indigo-100 tw-border-2 tw-rounded-lg tw-border-indigo-700 tw-h-11"
        >
      </div>
      <button
        @click="searchCheckins"
        class="
        tw-transition-all
        tw-border-2
        tw-border-indigo-300
        hover:tw-border-indigo-600
        focus:tw-outline-indigo-500
        md:tw-max-w-32
        focus:tw-outline-indigo-300
        tw-w-full tw-justify-center tw-flex tw-items-center tw-gap-2 tw-bg-indigo-700 tw-text-white tw-font-bold tw-rounded-lg tw-px-4 hover:tw-cursor-pointer tw-h-11"
      >
        <img src="../../static/mag-glass-icon.png" alt="">
        Buscar
      </button>
    </div>

    <main class="tw-flex tw-flex-col tw-gap-8 tw-mx-10 md:tw-mx-20 tw-border-2 tw-border-indigo-500 tw-p-10 tw-rounded-lg">
      <template v-if="!result.length">
        <div class="tw-text-center tw-text-white tw-text-indigo-500 tw-font-bold">
          Nada por aqui...
        </div>
      </template>
      <template v-else>
        <div v-for="checkin in result" :key="checkin._id">
          <span class="tw-font-bold tw-text-indigo-500 tw-text-lg">
            Check-in feito em: {{ new Date(checkin.created_at).toLocaleDateString("pt-br") }}
          </span>
          <div class="tw-text-indigo-500 tw-border-2 tw-bg-indigo-100 tw-border-indigo-500 tw-rounded-lg tw-shadow-lg tw-p-4">
            <p class="tw-font-bold">Nome:</p>
            <p class="tw-ml-2">{{ checkin.animal.name }}</p>
            <p class="tw-font-bold">Peso (Kg):</p>
            <p class="tw-ml-2">{{ checkin.weight }}</p>
            <p class="tw-font-bold">Temperatura (C°):</p>
            <p class="tw-ml-2">{{ checkin.temperature }}</p>
            <p class="tw-font-bold">Motivo:</p>
            <p class="tw-ml-2">{{ checkin.reason }}</p>
          </div>
        </div>
      </template>
    </main>
  </div>
</template>