import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Controls.module.css';

interface ControlsProps {
  enabled: boolean;
  autoRefresh: boolean;
  onEnabledChange: (enabled: boolean) => void;
  onAutoRefreshChange: (autoRefresh: boolean) => void;
  onGetCat: () => void;
}

const Controls: React.FC<ControlsProps> = ({
  enabled,
  autoRefresh,
  onEnabledChange,
  onAutoRefreshChange,
  onGetCat
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.controls}>
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          checked={enabled}
          onChange={(e) => onEnabledChange(e.target.checked)}
        />
        {t('enabled')}
      </label>
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          checked={autoRefresh}
          onChange={(e) => onAutoRefreshChange(e.target.checked)}
        />
        {t('autoRefresh')}
      </label>
      <button className={styles.button} onClick={onGetCat}>
        {t('getCat')}
      </button>
    </div>
  );
};

export default Controls;