<script setup>
import { ref, onMounted } from 'vue'
import HeroSectionComponent from '/src/components/HeroSectionComponent.vue'
import IllustrationComponent from '../components/IllustartionComponent.vue'
import NavBarComponent from '/src/components/NabBarComponent.vue'

const isDark = ref(false)

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')
})
</script>

<template>
  <div class="w-full h-screen flex flex-col overflow-hidden transition-colors duration-300">
    <button
      @click="toggleDarkMode"
      class="fixed left-6 top-1/2 -translate-y-1/2 p-4 rounded-full shadow-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white transition-all hover:scale-110 hover:bg-gray-300 dark:hover:bg-gray-700 flex items-center justify-center"
    >
      <span class="material-icons text-2xl">
        {{ isDark ? 'dark_mode' : 'light_mode' }}
      </span>
    </button>

    <header class="w-full">
      <NavBarComponent />
    </header>

    <main class="w-full md:px-[120px] px-8 flex-grow flex justify-center items-center">
      <HeroSectionComponent />
    </main>

    <section class="w-full">
      <IllustrationComponent />
    </section>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
</style>
