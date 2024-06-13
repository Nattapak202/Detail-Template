<template>
    <q-page class="flex flex-center">
        InstructionPage
        <IntroductionService title="Header"  />
    </q-page>
  </template>
  
  <script setup>
  import IntroductionService from '../../components/IntroductionService.vue'

  defineOptions({
    name: 'InstructionPage'
  });
  </script>
  