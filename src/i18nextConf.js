import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
// import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const fallbackLng = 'en';
const availableLanguages = ['en', 'ar', 'fr'];



i18n
  .use(LanguageDetector) // detect user language
  .use(initReactI18next)
  .use(HttpApi)
  .init({

    supportedLngs: ['en', 'ar', 'fr'],
    fallbackLng: "en",

    detection: {
        checkWhitelist: true, // options for language detection
        order: ['subdomain', 'path','cookie','htmlTage','querystring', 'navigator', 'localStorage'],
        lookupQuerystring: 'lng',
        caches: ['cookie'],
    },

    debug: false,


    interpolation: {
      escapeValue: false, // no need for react. it escapes by default
     
    },

    backend:{
        loadPath: '/locales/{{lng}}/translation.json',
    },
  });

export default i18n;