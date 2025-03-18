// stores/theme.js
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDark: localStorage.getItem('darkMode') === 'true',
  }),

  actions: {
    toggleDarkMode() {
      this.isDark = !this.isDark
      localStorage.setItem('darkMode', this.isDark)
      document.documentElement.classList.toggle('dark', this.isDark)
    },
  },
})
