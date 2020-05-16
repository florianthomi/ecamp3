import Vue from 'vue'
import VueI18n from 'vue-i18n'
import deepmerge from 'deepmerge'

import en from '@/locales/en.json'
import de from '@/locales/de.json'

import validationEn from 'vee-validate/dist/locale/en.json'
import validationDe from 'vee-validate/dist/locale/de.json'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'de',
  fallbackLocale: 'en',
  messages: deepmerge({ en, de }, {
    de: {
      validation: validationDe.messages
    },
    en: {
      validation: validationEn.messages
    }
  }),
  silentTranslationWarn: true,
  availableLocales: ['de', 'en', 'fr', 'it']
})
