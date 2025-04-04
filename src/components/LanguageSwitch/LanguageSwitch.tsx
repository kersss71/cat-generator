import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitch.module.css';

const LanguageSwitch: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.languageSwitch}>
      <button
        className={`${styles.languageButton} ${i18n.language === 'en' ? styles.active : ''}`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
      <button
        className={`${styles.languageButton} ${i18n.language === 'ru' ? styles.active : ''}`}
        onClick={() => changeLanguage('ru')}
      >
        RU
      </button>
    </div>
  );
};

export default LanguageSwitch;