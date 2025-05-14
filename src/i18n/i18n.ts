import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector) // Otkriva koji jezik koristi browser
  .use(initReactI18next) // Omogućava React podršku
  .init({
    fallbackLng: 'en', // Ako ne može da prepozna jezik, koristi engleski
    debug: true, // Debug u konzoli (možeš isključiti)

    resources: {
      en: {
        translation: {
          inbox: 'Inbox',
          compose: 'Compose',
          send: 'Send',
        }
      },
      sr: {
        translation: {
          inbox: 'Pristigla pošta',
          compose: 'Napiši',
          send: 'Pošalji',
        }
      },
      de: {
        translation: {
          inbox: 'Posteingang',
          compose: 'Verfassen',
          send: 'Senden',
        }
      }
    }
  });

export default i18n;
