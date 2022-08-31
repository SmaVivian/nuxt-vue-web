export const state = () => ({
  locales: ['zh', 'en', 'zy'],
  locale: 'zy'
})

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}
