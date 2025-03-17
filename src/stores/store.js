import { reactive } from 'vue'
import { messages } from '@/locales'

export const state = reactive({
  locale: 'ar', // Default language

  t(key) {
    return messages[state.locale][key] || key
  },

  setLocale(lang) {
    state.locale = lang
    localStorage.setItem('lang', lang) // Save user preference
  },

  loadLocale() {
    const savedLang = localStorage.getItem('lang')
    if (savedLang) state.locale = savedLang
  },
})

export const setLanguage = (lang) => {
  state.language = lang
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr')
  document.documentElement.setAttribute('lang', lang)
}
