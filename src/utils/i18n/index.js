import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LngDetector from 'i18next-browser-languagedetector';
import enLocales from './locales/en/en.json';
import itLocales from './locales/it/it.json';

const resources = {
  en: {
    translation: enLocales,
  },
  it: {
    translation: itLocales,
  },
};

i18n
  .use(LngDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
