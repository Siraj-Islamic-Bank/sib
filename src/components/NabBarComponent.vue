<template>
  <div class="w-full relative overflow-x-hidden">
    <!-- Background Image -->
    <img
      src="../../public/icons/top.svg"
      alt="Background"
      class="absolute md:-top-8 top-6 left-0 w-full h-auto -z-10 scale-200 md:scale-100"
    />

    <nav class="top-0 w-full z-10 bg-transparent px-8 md:px-[120px] py-12">
      <div class="border-b-2 border-greenColor pb-3 grid grid-cols-12">
        <!-- Logo -->
        <div class="col-start-1 col-span-4 md:col-span-2">
          <img
            :src="themeStore.isDark ? '/public/logos/logoDark.svg' : '/public/logos/logo.svg'"
            alt="Logo"
            class="w-auto h-18 transition-all duration-300"
          />
        </div>

        <!-- Desktop Menu -->
        <div
          class="col-start-4 col-span-full justify-between items-center text-3xl hidden md:flex cursor-pointer"
          :class="themeStore.isDark ? 'text-white' : 'text-darkBlue'"
        >
          <h1>{{ state.t('about_us') }}</h1>
          <h1>{{ state.t('islamic_finance') }}</h1>
          <h1>{{ state.t('e_services') }}</h1>
          <h1>{{ state.t('individuals') }}</h1>
          <h1>{{ state.t('companies') }}</h1>
          <h1>{{ state.t('contact_us') }}</h1>
          <button @click="toggleLanguage" class="font-bold hover:cursor-pointer">
            {{ state.t('english') }}
          </button>
        </div>

        <button @click="toggleMenu" class="md:hidden col-start-12 text-3xl text-darkBlue">
          ☰
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div
      v-if="menuOpen"
      class="fixed top-0 left-0 w-full h-full bg-darkBlue text-white flex flex-col items-center justify-center z-50"
    >
      <button @click="toggleMenu" class="absolute top-6 right-8 text-3xl">✖</button>
      <div class="flex flex-col items-center gap-y-8 text-2xl cursor-pointer">
        <h1>{{ state.t('about_us') }}</h1>
        <h1>{{ state.t('islamic_finance') }}</h1>
        <h1>{{ state.t('e_services') }}</h1>
        <h1>{{ state.t('individuals') }}</h1>
        <h1>{{ state.t('companies') }}</h1>
        <h1>{{ state.t('contact_us') }}</h1>
        <button @click="toggleLanguage" class="font-bold hover:cursor-pointer">
          {{ state.t('english') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { state } from '@/stores/store'
import { useThemeStore } from '@/stores/themeStore'

const menuOpen = ref(false)
const themeStore = useThemeStore()

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const toggleLanguage = () => {
  state.setLocale(state.locale === 'ar' ? 'en' : 'ar')
}

onMounted(() => {
  themeStore.isDark = localStorage.getItem('darkMode') === 'true'
  document.documentElement.classList.toggle('dark', themeStore.isDark)
})
</script>
