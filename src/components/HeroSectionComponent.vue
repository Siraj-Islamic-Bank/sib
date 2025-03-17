<template>
  <div class="flex flex-col items-center justify-center text-center md:gap-y-8 gap-y-2">
    <img class="h-full md:h-96" src="../../public/illustrations/Illustration.svg" alt="" />
    <h1 class="text-darkBlue font-bold text-4xl md:text-6xl">
      {{ state.t('maintenance_message') }}
    </h1>
  </div>
</template>

<script setup>
import { state } from '@/stores/store'
</script>
