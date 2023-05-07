import { useTranslation } from 'next-i18next';
import React from 'react';

import { CustomWrapper } from '@/components/custom/wrappers/CustomWrapper';

import styles from './index.module.scss';

export const Title = () => {
  const { t } = useTranslation('home-page');
  return (
    <section className={styles['title-container-homepage']}>
      <div className={styles['title-cont']}>
        <CustomWrapper>
          <h1>AD DATA</h1>
          <h2>{t('usedParts')}</h2>
        </CustomWrapper>
      </div>
    </section>
  );
};
