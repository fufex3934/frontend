import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import omTranslation from './locales/om.json';
import amTranslation from './locales/am.json';
import adTranslation from './locales/ad.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    om: {
      translation: omTranslation,
    },
    am: {
      translation: amTranslation,
    },
    ad: {
      translation: adTranslation,
    },
  },
  fallbackLng: 'en', // Set the fallback language
  interpolation: {
    escapeValue: false, // React handles the escaping
  },
});

export default i18n;
