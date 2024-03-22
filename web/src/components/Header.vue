<template>
  <div class="tw-bg-indigo-500 tw-px-10 tw-py-2 md:tw-px-20 tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-between tw-w-full tw-text-white">
    <div class="tw-flex tw-gap-4 tw-items-center">
      <img class="tw-w-14 tw-h-14" src="../../static/logo.png" alt="logo da clina">
      <h1 class="tw-font-bold tw-text-white tw-m-0 md:tw-min-w-full">Clinica veterinária</h1>
    </div>

    <div class="tw-flex tw-w-full tw-justify-end tw-flex-col md:tw-flex-row tw-gap-4">
      <a
        href="/user/signin"
        class="tw-transition-all tw-border-2 tw-border-indigo-200 hover:tw-border-indigo-400 focus:tw-outline-indigo-500 tw-flex tw-items-center tw-justify-center tw-gap-2 tw-font-bold tw-px-4 tw-py-2 tw-bg-indigo-700 tw-rounded-lg"
      >
        <img src="../../static/user-icon.png" alt="user icon">
        Login
      </a>

      <a
        href="/appointment"
        class="tw-transition-all tw-border-2 tw-border-indigo-200 hover:tw-border-indigo-400 focus:tw-outline-indigo-500 tw-flex tw-items-center tw-justify-center tw-gap-2 tw-font-bold tw-px-4 tw-py-2 tw-bg-indigo-700 tw-rounded-lg"
      >
        <img src="../../static/clock.svg" alt="clock icon">
        Consultar
      </a>
    </div>
  </div>
</template>