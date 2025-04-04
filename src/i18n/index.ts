import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      enabled: 'Enabled',
      autoRefresh: 'Auto-refresh every 5 second',
      getCat: 'Get cat',
      title: 'Cat Image Generator'
    }
  },
  ru: {
    translation: {
      enabled: 'Включено',
      autoRefresh: 'Автообновление каждые 5 секунд',
      getCat: 'Получить кота',
      title: 'Генератор изображений котов'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;