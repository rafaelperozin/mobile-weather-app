import 'intl-pluralrules'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as Localization from 'expo-localization'
import en from '../../assets/locales/en.json'

const normalizeLng = Localization.getLocales()[0]?.languageTag?.startsWith('en')
  ? 'en'
  : Localization.getLocales()[0]?.languageTag || 'en'

i18n.use(initReactI18next).init({
  fallbackLng: {
    'en-*': ['en'],
    default: ['en'],
  },
  lng: normalizeLng,
  debug: true,
  resources: {
    en: {
      translation: en,
    },
  },
  load: 'languageOnly',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
