// stores/theme.js
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDark: localStorage.getItem('darkMode') === 'true',
    isLight: localStorage.getItem('darkMode') === 'false',
  }),

  actions: {
    toggleDarkMode() {
      this.isDark = !this.isDark
      localStorage.setItem('darkMode', this.isDark)
      document.documentElement.classList.toggle('dark', this.isDark)
    },
    toggleLightMode() {
      this.isLight = !this.isLight
      localStorage.setItem('darkMode', this.isLight)
      document.documentElement.classList.toggle('dark', this.isLight)
    },
  },
})
