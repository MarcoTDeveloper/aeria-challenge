<script setup lang="ts">
import { ref } from 'vue'

type Checkins = {
  _id: string;
  animal: {
    name: string;
  };
  weight: number;
  temperature: number;
  reason: string;
  created_at: Date;
}

const document = ref('')
const result = ref<Checkins[]>([])

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
      tw-h-screen
    "
  >
    <template>
      <div
        class="
          tw-bg-indigo-500
          tw-px-10
          tw-py-2
          tw-flex
          tw-flex-col
          tw-items-center
          tw-justify-between
          tw-w-full
          tw-text-white

          md:tw-px-20
          md:tw-flex-row
        "
      >
        <div
          class="
            tw-flex
            tw-gap-4
            tw-items-center
          "
        >
          <img
            class="
              tw-w-14
              tw-h-14
            "
            src="../../static/logo.png"
            alt="logo da clina"
          >
          <h1
            class="
              tw-font-bold
              tw-text-white
              tw-m-0

              md:tw-min-w-full
            "
          >
            Clinica veterinária
          </h1>
        </div>

        <div
          class="
            tw-flex
            tw-w-full
            tw-justify-end
            tw-flex-col
            tw-gap-4

            md:tw-flex-row
          "
        >
          <a
            href="/user/signin"
            class="
              tw-transition-all
              tw-border-2
              tw-border-indigo-200
              tw-flex
              tw-items-center
              tw-justify-center
              tw-gap-2
              tw-font-bold
              tw-px-4
              tw-py-2
              tw-bg-indigo-700
              tw-rounded-lg

              focus:tw-outline-indigo-500

              hover:tw-border-indigo-400
            "
          >
            <img
              src="../../static/user-icon.png"
              alt="user icon"
            >
            Login
          </a>

          <a
            href="/appointment"
            class="
              tw-transition-all
              tw-border-2
              tw-border-indigo-200
              tw-flex
              tw-items-center
              tw-justify-center
              tw-gap-2
              tw-font-bold
              tw-px-4
              tw-py-2
              tw-bg-indigo-700
              tw-rounded-lg

              focus:tw-outline-indigo-500

              hover:tw-border-indigo-400
            "
          >
            <img
              src="../../static/clock.svg"
              alt="clock icon"
            >
            Consultar
          </a>
        </div>
      </div>
    </template>

    <div
      class="
        tw-flex
        tw-items-end
        tw-gap-4
        tw-flex-col
        tw-py-4
        tw-mx-10

        md:tw-flex-row
        md:tw-mx-20
      "
    >
      <div
        class="
          tw-flex
          tw-flex-col
          tw-gap-1
          tw-w-full
        "
      >
        <label
          for="search_by_document"
          class="
            tw-text-indigo-400
            tw-font-bold
            tw-text-xl
          "
        >Consulte o histórico do seu pet:</label>
        <input
          id="search_by_document"
          v-model="document"
          type="search"
          name="search_by_document"
          placeholder="Buscar pelo CPF"
          class="
            tw-px-4
            tw-bg-indigo-100
            tw-border-2
            tw-rounded-lg
            tw-border-indigo-700
            tw-h-11

            focus:tw-outline-indigo-300

            placeholder:tw-text-indigo-300
            placeholder:tw-font-bold
          "
        >
      </div>
      <button
        class="
          tw-transition-all
          tw-border-2
          tw-border-indigo-300
          tw-w-full
          tw-justify-center
          tw-flex
          tw-items-center
          tw-gap-2
          tw-bg-indigo-700
          tw-text-white
          tw-font-bold
          tw-rounded-lg
          tw-px-4
          tw-h-11

          focus:tw-outline-indigo-500
          focus:tw-outline-indigo-300

          hover:tw-border-indigo-600
          hover:tw-cursor-pointer

          md:tw-max-w-32
        "
        @click="searchCheckins"
      >
        <img
          src="../../static/mag-glass-icon.png"
          alt=""
        >
        Buscar
      </button>
    </div>

    <main
      class="
        tw-flex
        tw-flex-col
        tw-gap-8
        tw-mx-10
        tw-border-2
        tw-border-indigo-500
        tw-p-10
        tw-rounded-lg

        md:tw-mx-20
      "
    >
      <template v-if="!result.length">
        <div
          class="
            tw-text-center
            tw-text-white
            tw-text-indigo-500
            tw-font-bold
          "
        >
          Nada por aqui...
        </div>
      </template>
      <template v-else>
        <div
          v-for="checkin in result"
          :key="checkin._id"
        >
          <span
            class="
              tw-font-bold
              tw-text-indigo-500
              tw-text-lg
            "
          >
            Check-in feito em: {{ new Date(checkin.created_at).toLocaleDateString("pt-br") }}
          </span>
          <div
            class="
              tw-text-indigo-500
              tw-border-2
              tw-bg-indigo-100
              tw-border-indigo-500
              tw-rounded-lg
              tw-shadow-lg
              tw-p-4
            "
          >
            <p class="tw-font-bold">
              Nome:
            </p>
            <p class="tw-ml-2">
              {{ checkin.animal.name }}
            </p>
            <p class="tw-font-bold">
              Peso (Kg):
            </p>
            <p class="tw-ml-2">
              {{ checkin.weight }}
            </p>
            <p class="tw-font-bold">
              Temperatura (C°):
            </p>
            <p class="tw-ml-2">
              {{ checkin.temperature }}
            </p>
            <p class="tw-font-bold">
              Motivo:
            </p>
            <p class="tw-ml-2">
              {{ checkin.reason }}
            </p>
          </div>
        </div>
      </template>
    </main>
  </div>
</template>
