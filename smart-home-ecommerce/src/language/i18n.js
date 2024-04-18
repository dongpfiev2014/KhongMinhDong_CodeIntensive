import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  lng: "vn",
  fallbackLng: "vn",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        welcome: "Welcome",
      },
    },
    de: {
      translation: {
        welcome: "Willkomen",
      },
    },
    vn: {
      translation: {
        welcome: "Xin chào",
      },
    },
  },
});

export default i18n;
