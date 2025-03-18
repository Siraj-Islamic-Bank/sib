<script setup>
import { onMounted } from 'vue'
import { useThemeStore } from '@/stores/themeStore'
import HeroSectionComponent from '/src/components/HeroSectionComponent.vue'
import IllustrationComponent from '../components/IllustartionComponent.vue'
import NavBarComponent from '/src/components/NabBarComponent.vue'

const themeStore = useThemeStore()

onMounted(() => {
  themeStore.isDark = localStorage.getItem('darkMode') === 'true'
  document.documentElement.classList.toggle('dark', themeStore.isDark)
})
</script>

<template>
  <div
    class="w-full h-screen flex flex-col overflow-hidden transition-colors duration-500 ease-in-out"
  >
    <button
      @click="themeStore.toggleDarkMode"
      class="fixed left-6 cursor-pointer top-1/2 -translate-y-1/2 p-3 rounded-full shadow-md transition-all hover:scale-110 flex items-center justify-center"
      :class="themeStore.isDark ? ' text-yellow-200' : ' text-darkBlue'"
    >
      <transition name="fade">
        <span v-if="themeStore.isDark" class="material-icons text-2xl"> light_mode </span>
        <span v-else class="material-icons text-2xl"> dark_mode </span>
      </transition>
    </button>

    <!-- Header -->
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

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.1s ease-in-out,
    transform 0.1s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.3s);
}
</style>
