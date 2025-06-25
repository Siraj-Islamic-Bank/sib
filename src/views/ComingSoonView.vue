<template>
  <div
    class="coming-soon-bg min-h-screen flex flex-col overflow-x-hidden"
    :class="themeStore.isDark ? 'dark' : 'light'"
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
    <NavBarComponent />
    <div
      class="md:flex gap-10 items-center justify-center px-6 md:px-12"
      :class="language === 'en' ? 'flex-row-reverse' : 'flex-row'"
    >
      <main
        class="scale-125 w-full md:min-h-[calc(100vh-240px)] md:scale-100 flex-1 flex flex-col justify-center p-10 md:pr-28 text-center"
        :class="language === 'ar' ? 'md:text-right' : 'md:text-left'"
      >
        <p
          class="text-2xl md:text-3xl mb-2 opacity-80"
          :class="themeStore.isDark ? 'text-white' : 'text-#201F4F'"
        >
          {{ state.t('coming_soon_message_3') }}
        </p>
        <h1
          class="text-6xl md:text-9xl font-bold mb-4 leading-tight"
          :class="themeStore.isDark ? 'text-white' : 'text-#201F4F'"
        >
          {{ state.t('coming_soon_message') }}
        </h1>
        <p
          class="text-2xl md:text-3xl mb-8 opacity-80"
          :class="themeStore.isDark ? 'text-white' : 'text-#201F4F'"
        >
          {{ state.t('coming_soon_message_2') }}
        </p>
      </main>
      <div class="flex-1 flex items-center justify-center p-12 w-full md:max-w-1/2">
        <img
          src="../../public/illustrations/paper-plane.svg"
          alt="Launching Paper Plane"
          class="md:w-1/2 w-full h-full"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBarComponent from '/src/components/NabBarComponent.vue'
import { useThemeStore } from '@/stores/themeStore'
import { onMounted, computed } from 'vue'
import { state } from '@/stores/store'
import { useI18n } from 'vue-i18n'
const themeStore = useThemeStore()
const { locale } = useI18n()
const language = computed(() => locale.value)
onMounted(() => {
  themeStore.isDark = localStorage.getItem('darkMode') === 'true'
  document.documentElement.classList.toggle('dark', themeStore.isDark)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

.coming-soon-bg {
  min-height: 100vh;
  background: white;
  transition: background 0.3s ease;
}
.coming-soon-bg.dark {
  background: linear-gradient(120deg, #4e489e 0%, #78c2aa 100%);
}
</style>
