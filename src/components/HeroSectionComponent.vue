<template>
  <div class="flex flex-col items-center justify-center text-center md:gap-y-8 gap-y-2">
    <img
      class="h-full md:h-96"
      :src="
        themeStore.isDark
          ? '../../public/illustrations/IllustrationDark.svg'
          : '../../public/illustrations/Illustration.svg'
      "
      alt=""
    />
    <h1
      class="text-darkBlue font-bold text-4xl md:text-6xl"
      :class="themeStore.isDark ? 'text-white' : 'text-darkBlue'"
    >
      {{ state.t('coming_soon_message') }}
    </h1>
  </div>
</template>

<script setup>
import { state } from '@/stores/store'
import { useThemeStore } from '@/stores/themeStore'
const themeStore = useThemeStore()
</script>
