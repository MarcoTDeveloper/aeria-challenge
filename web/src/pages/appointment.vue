<script type="module" lang="ts">
import { ref } from "vue";

// const animals = await aeria.animal.insert.POST();


// FOCO DE AMANHA, MAIS A PANGINA EM NEXT


export default {
    data() {
      return {
        selectedImage: ref(),
      };
    },
    methods: {  
      onFileChange(event: Event) {
        const fileInput = event.target as HTMLInputElement;
          if (fileInput.files) {
            this.selectedImage = fileInput.files[0];

          if (this.selectedImage.type.match('imagem/')) {
            return alert('Selecione um arquivo de imagem válido.');
          }
        }

        const reader = new FileReader();
        reader.onload = (e) => {
          this.selectedImage = e.target?.result;
        };
        reader.readAsDataURL(this.selectedImage);
      },
    },
};

</script>

<template>
  <div class="tw-bg-indigo-500 tw-px-10 tw-py-2 md:tw-px-20 tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-between tw-w-full tw-text-white">
    <div class="tw-flex tw-gap-4 tw-items-center">
      <img class="tw-w-14 tw-h-14" src="../../static/logo.png" alt="logo da clina">
      <h1 class="tw-font-bold tw-text-white tw-m-0 md:tw-min-w-full">Clinica veterinária</h1>
    </div>

    <div class="tw-flex tw-gap-4 tw-items-center">
      <h1 class="tw-font-bold tw-text-white tw-m-0 md:tw-min-w-full tw-text-center tw-text-indigo-100 md:tw-no-underline">
        Agendamento de consulta
      </h1>
    </div>

    <div class="tw-flex tw-w-full tw-justify-end tw-flex-col md:tw-w-64 md:tw-flex-row tw-gap-4">
      <a
        href="/user/signin"
        class="tw-transition-all tw-border-2 tw-border-indigo-200 hover:tw-border-indigo-400 focus:tw-outline-indigo-500 tw-flex tw-items-center tw-justify-center tw-gap-2 tw-font-bold tw-px-4 tw-py-2 tw-bg-indigo-700 tw-rounded-lg"
      >
        <img src="../../static/user-icon.png" alt="user icon">
        Login
      </a>

      <a
        href="/"
        class="tw-transition-all tw-border-2 tw-border-indigo-200 hover:tw-border-indigo-400 focus:tw-outline-indigo-500 tw-flex tw-items-center tw-justify-center tw-gap-2 tw-font-bold tw-px-4 tw-py-2 tw-bg-indigo-700 tw-rounded-lg"
      >
        <img src="../../static/arrow-left.svg" alt="clock icon">
        Voltar
      </a>
    </div>
  </div>

  <div class="tw-mx-10 md:tw-mx-20">
    
    <div class="tw-flex tw-items-center tw-justify-start tw-gap-4 tw-rounded-lg tw-bg-indigo-200 tw-p-8 tw-mt-4">
      <img src="../../static/lightbulb-filament.svg">
      <p class="tw-m-0 tw-text-indigo-400 tw-font-bold tw-text-xl">Para fazer uma consulta é importante primeiramente termos seu animal cadastrado em nosso sistema!</p>
    </div>

    <div class="tw-flex tw-flex-col md:tw-grid md:tw-grid-cols-2 tw-gap-4">
      
      <div>
        <h2 class="tw-text-indigo-400 tw-mb-1">Cadastrar animal:</h2>
        <form class="tw-p-4 tw-border-2 tw-border-indigo-500 tw-rounded-lg tw-bg-indigo-400 tw-flex tw-flex-col tw-gap-4 tw-w-full">
          <div class="tw-flex tw-flex-col">
            <label class="tw-font-bold tw-text-white" for="name">Nome<span class="tw-text-red-500"> *</span></label>
            <input required placeholder="Nome do animal" class="placeholder:tw-text-indigo-300 tw-px-2 tw-h-9 tw-rounded-lg tw-border-2 focus:tw-outline-indigo-500 tw-border-indigo-300" id="name" type="text">
          </div>

          <div class="tw-flex tw-flex-col">
            <label class="tw-font-bold tw-text-white" for="age">Idade</label>
            <input placeholder="Idade do animal" class="placeholder:tw-text-indigo-300 tw-px-2 tw-h-9 tw-rounded-lg tw-border-2 focus:tw-outline-indigo-500 tw-border-indigo-300" id="age" type="tel">
          </div>

          <div class="tw-flex tw-flex-col">
            <label class="tw-font-bold tw-text-white" for="breed">Raça</label>
            <input placeholder="Raça do animal" class="placeholder:tw-text-indigo-300 tw-px-2 tw-h-9 tw-rounded-lg tw-border-2 focus:tw-outline-indigo-500 tw-border-indigo-300" id="breed" type="text">
          </div>

          <div class="tw-flex tw-flex-col">
            <label class="tw-font-bold tw-text-white" for="species">Especie</label>
            <input placeholder="Especie do animal" class="placeholder:tw-text-indigo-300 tw-px-2 tw-h-9 tw-rounded-lg tw-border-2 focus:tw-outline-indigo-500 tw-border-indigo-300" id="species" type="text">
          </div>

          <div class="tw-flex tw-flex-col md:tw-flex-row tw-gap-4 md:tw-items-end">
            <div class="tw-flex tw-flex-col tw-w-full">
              <span class="tw-font-bold tw-text-white">Foto</span>
              <label
                class="tw-transition-colors tw-flex-1 tw-cursor-pointer tw-flex tw-flex-col tw-items-center tw-gap-3 tw-rounded-lg tw-border-2 tw-border-indigo-200 tw-px-6 tw-py-4 tw-text-center tw-text-indigo-200 hover:tw-border-indigo-500 hover:tw-text-indigo-500" htmlFor="picture"
                >
                <div class="tw-leading-none tw-rounded-full tw-border-6 tw-border-indigo-500 tw-bg-zinc-100 tw-p-2 group-hover:tw-border-violet-50 group-hover:tw-bg-violet-100">
                  <img src="../../static/cloud-up.svg">
                </div>    
  
                <span class="tw-flex tw-flex-col tw-items-center tw-gap-1 tw-font-bold">
                  <span class="tw-font-bold tw-text-indigo-500">Clique para adicionar</span>
                  ou arraste um arquivo aqui
                </span>
                
              </label>
            </div>
            <input id="picture" class="tw-sr-only" type="file" @change="onFileChange">

            <div class="tw-max-h-40 tw-rounded-lg tw-border-2 tw-border-indigo-200 tw-w-full md:tw-w-36 tw-flex tw-items-center tw-justify-center tw-p-4" v-if="selectedImage">
              <img v-bind:src="selectedImage" class="tw-max-h-40 tw-max-w-28">
            </div>
            <div class="md:tw-min-h-36 tw-rounded-lg tw-border-2 tw-border-indigo-200 tw-w-full md:tw-w-36 tw-flex tw-items-center tw-justify-center tw-p-4" v-else>
              <div class="tw-bg-indigo-200 tw-p-2 tw-rounded-full tw-border-2 tw-border-indigo-300">
                <img src="../../static/dog.svg">
              </div>
            </div>

          </div>

          <button class="tw-transition-all tw-h-11 tw-rounded-lg tw-bg-indigo-600 tw-font-bold tw-text-white tw-cursor-pointer tw-flex tw-items-center tw-justify-center tw-border-2 tw-border-indigo-200 tw-gap-2 hover:tw-border-indigo-500 focus:tw-outline-indigo-500">
            <img src="../../static/check-circle.svg">
            <span class="tw-text-lg">Cadastrar animal</span>
          </button>
        </form>
      </div>

      <div class="tw-mb-8">
        <h2 class="tw-text-indigo-400 tw-mb-1 ">Agendar consulta:</h2>
        <form class="tw-p-4 tw-border-2 tw-border-indigo-500 tw-rounded-lg tw-bg-indigo-400 tw-flex tw-flex-col tw-gap-4 tw-w-full">
          <h2 class="tw-m-0 tw-text-white">Dono do animal:</h2>
          <div class="tw-flex tw-flex-col">
            <label class="tw-font-bold tw-text-white" for="name">Nome<span class="tw-text-red-500"> *</span></label>
            <input required placeholder="Nome do dono" class="placeholder:tw-text-indigo-300 tw-px-2 tw-h-9 tw-rounded-lg tw-border-2 focus:tw-outline-indigo-500 tw-border-indigo-300" id="name" type="text">
          </div>

          <div class="tw-flex tw-flex-col">
            <label class="tw-font-bold tw-text-white" for="cpf">CPF / CNPJ</label>
            <input placeholder="Seu CPF" class="placeholder:tw-text-indigo-300 tw-px-2 tw-h-9 tw-rounded-lg tw-border-2 focus:tw-outline-indigo-500 tw-border-indigo-300" id="cpf" type="tel">
          </div>

          <div class="tw-flex tw-flex-col">
            <label class="tw-font-bold tw-text-white" for="email">Email<span class="tw-text-red-500"> *</span></label>
            <input required placeholder="Seu email" class="placeholder:tw-text-indigo-300 tw-px-2 tw-h-9 tw-rounded-lg tw-border-2 focus:tw-outline-indigo-500 tw-border-indigo-300" id="email" type="email">
          </div>

          <div class="tw-flex tw-flex-col">
            <label class="tw-font-bold tw-text-white" for="phone">Telefone<span class="tw-text-red-500"> *</span></label>
            <input required placeholder="Seu número de telefone" class="placeholder:tw-text-indigo-300 tw-px-2 tw-h-9 tw-rounded-lg tw-border-2 focus:tw-outline-indigo-500 tw-border-indigo-300" id="phone" type="tel">
          </div>

          <div class="tw-flex tw-flex-col">
            <label class="tw-font-bold tw-text-white" for="type">Tipo de atendimento<span class="tw-text-red-500"> *</span></label>
            <select class="tw-px-2 tw-h-9 tw-rounded-lg tw-border-2 focus:tw-outline-indigo-500 tw-border-indigo-300" id="type">
              <option value="">Selecione</option>
              <option value="Cliente">Cliente</option>
            </select>
          </div>

          <div class="tw-flex tw-flex-col">
            <label class="tw-font-bold tw-text-white" for="insc">Inscrição estadual</label>
            <input placeholder="Sua Inscrição estadual" class="placeholder:tw-text-indigo-300 tw-px-2 tw-h-9 tw-rounded-lg tw-border-2 focus:tw-outline-indigo-500 tw-border-indigo-300" id="insc" type="text">
          </div>

          <h2 class="tw-m-0 tw-text-white">Endereço do dono:</h2>

          <div class="tw-flex tw-flex-col">
            <label class="tw-font-bold tw-text-white" for="zipCode">CEP<span class="tw-text-red-500"> *</span></label>
            <input required placeholder="Nome do dono" class="placeholder:tw-text-indigo-300 tw-px-2 tw-h-9 tw-rounded-lg tw-border-2 focus:tw-outline-indigo-500 tw-border-indigo-300" id="zipCode" type="tel">
          </div>

          <div class="tw-flex tw-flex-col">
            <label class="tw-font-bold tw-text-white" for="country">País<span class="tw-text-red-500"> *</span></label>
            <input required placeholder="Seu CPF" class="placeholder:tw-text-indigo-300 tw-px-2 tw-h-9 tw-rounded-lg tw-border-2 focus:tw-outline-indigo-500 tw-border-indigo-300" id="country" type="text">
          </div>

          <div class="tw-flex tw-flex-col">
            <label class="tw-font-bold tw-text-white" for="state">Estado<span class="tw-text-red-500"> *</span></label>
            <input required placeholder="Seu email" class="placeholder:tw-text-indigo-300 tw-px-2 tw-h-9 tw-rounded-lg tw-border-2 focus:tw-outline-indigo-500 tw-border-indigo-300" id="state" type="text">
          </div>

          <div class="tw-flex tw-flex-col">
            <label class="tw-font-bold tw-text-white" for="district">Distrito<span class="tw-text-red-500"> *</span></label>
            <input required placeholder="Seu número de telefone" class="placeholder:tw-text-indigo-300 tw-px-2 tw-h-9 tw-rounded-lg tw-border-2 focus:tw-outline-indigo-500 tw-border-indigo-300" id="district" type="text">
          </div>

          <div class="tw-flex tw-flex-col">
            <label class="tw-font-bold tw-text-white" for="number">Número<span class="tw-text-red-500"> *</span></label>
            <input required placeholder="Seu número de residencia" class="placeholder:tw-text-indigo-300 tw-px-2 tw-h-9 tw-rounded-lg tw-border-2 focus:tw-outline-indigo-500 tw-border-indigo-300" id="number" type="number">
          </div>

          <div class="tw-flex tw-flex-col">
            <label class="tw-font-bold tw-text-white" for="complement">Complemento</label>
            <textarea placeholder="Caso nesscesario coloque um ponto de referencia" id="complement" class="placeholder:tw-text-indigo-300 tw-px-2 tw-rounded-lg tw-border-2 focus:tw-outline-indigo-500 tw-border-indigo-300" cols="30" rows="5"></textarea>
          </div>

          <h2 class="tw-m-0 tw-text-white">Consulta:</h2>

          <div class="tw-flex tw-flex-col">
            <label class="tw-font-bold tw-text-white" for="date">Horário<span class="tw-text-red-500"> *</span></label>
            <input required class="placeholder:tw-text-indigo-300 tw-px-2 tw-h-9 tw-rounded-lg tw-border-2 focus:tw-outline-indigo-500 tw-border-indigo-300" id="date" type="datetime-local">
          </div>

          <div class="tw-flex tw-flex-col">
            <label class="tw-font-bold tw-text-white" for="reason">Motivo<span class="tw-text-red-500"> *</span></label>
            <input required placeholder="Motivo da consulta" class="placeholder:tw-text-indigo-300 tw-px-2 tw-h-9 tw-rounded-lg tw-border-2 focus:tw-outline-indigo-500 tw-border-indigo-300" id="reason" type="number">
          </div>

          <div class="tw-flex tw-flex-col">
            <label class="tw-font-bold tw-text-white" for="complement">Complemento</label>
            <textarea placeholder="Caso seja nesscesario dar mais informações sobre a vinda do animal" id="complement" class="placeholder:tw-text-indigo-300 tw-px-2 tw-rounded-lg tw-border-2 focus:tw-outline-indigo-500 tw-border-indigo-300" cols="30" rows="5"></textarea>
          </div>

          <button class="tw-transition-all tw-h-11 tw-rounded-lg tw-bg-indigo-600 tw-font-bold tw-text-white tw-cursor-pointer tw-flex tw-items-center tw-justify-center tw-border-2 tw-border-indigo-200 tw-gap-2 hover:tw-border-indigo-500 focus:tw-outline-indigo-500" type="submit">
            <img src="../../static/check-circle.svg">
            <span class="tw-text-lg">Cadastrar consulta</span>
          </button>
        </form>
      </div>

    </div>

  </div>
</template>