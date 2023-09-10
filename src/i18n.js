import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from './languages/en.json'
import translationFR from './languages/fr.json'
import translationAR from './languages/ar.json'

const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  },
  ar: {
    translation: translationAR
  },
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false 
    },
    react: {
        useSuspense: false
    }
  });

  export default i18n;