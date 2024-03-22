<script setup lang="ts">
import { ref } from "vue";

type Transactions = {
  balance: number;
  payTransactions: number;
  receiveTransaction: number;
};

const result = ref<Transactions>();

const transactionsData = async () => {
  const response = await fetch("http://localhost:3000/api/transactionsBalance");
  result.value = await response.json()
  return result.value
}
transactionsData();

const formatMoney = (value: number | undefined) => {
  if (value === undefined) {
    return "R$ ---"
  }
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return formatter.format(value);
}

</script>

<template>
  <div class="tw-justify-center tw-items-center tw-flex tw-flex-col md:tw-flex-row tw-gap-4">

    <div class="tw-bg-indigo-400 tw-text-white tw-rounded-lg tw-p-6 tw-w-full tw-mx-auto md:tw-m-0 md:tw-w-80">
      <div class="tw-flex tw-items-center tw-justify-between tw-mb-3">
        <span>Saldo atual</span>
        <img class="tw-w-6 tw-h-6" src="../../../static/dollar.svg">
      </div>

      <span class="tw-font-bold tw-text-2xl">{{ formatMoney(result?.balance) }}</span>
    </div>
  
    <div class="tw-border-2 tw-border-indigo-400 tw-text-indigo-400 tw-rounded-lg tw-p-6 tw-w-full tw-mx-auto md:tw-m-0 md:tw-w-80">
      <div class="tw-flex tw-items-center tw-justify-between tw-mb-3">
        <span>A receber</span>
        <img class="tw-w-6 tw-h-6" src="../../../static/circle-arrow-up.svg">
      </div>

      <span class="tw-font-bold tw-text-2xl">{{ formatMoney(result?.receiveTransaction) }}</span>
    </div>

    <div class="tw-border-2 tw-border-indigo-400 tw-text-indigo-400 tw-rounded-lg tw-p-6 tw-w-full tw-mx-auto md:tw-m-0 md:tw-w-80">
      <div class="tw-flex tw-items-center tw-justify-between tw-mb-3">
        <span>A pagar</span>
        <img class="tw-w-6 tw-h-6" src="../../../static/circle-arrow-down.svg">
      </div>

      <span class="tw-font-bold tw-text-2xl">{{ formatMoney(result?.payTransactions) }}</span>
    </div>
  
  </div>

  <aeria-crud collection="transaction">
    <template #row-value="{ row, column }">
      valor: {{ row[column] }}
    </template>
  </aeria-crud>
</template>