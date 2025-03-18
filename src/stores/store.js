import { reactive } from 'vue'
import { messages } from '@/locales'

export const state = reactive({
  locale: 'ar', // Default language
  isDark: localStorage.getItem('darkMode') === 'true', // Load dark mode state

  t(key) {
    return messages[state.locale][key] || key
  },

  setLocale(lang) {
    state.locale = lang
    localStorage.setItem('lang', lang) // Save user preference
  },

  toggleDarkMode() {
    state.isDark = !state.isDark
    localStorage.setItem('darkMode', state.isDark) // Save dark mode preference
    document.documentElement.classList.toggle('dark', state.isDark)
  },

  loadLocale() {
    const savedLang = localStorage.getItem('lang')
    if (savedLang) state.locale = savedLang
  },
})
