import type { FC } from 'react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { ArrowForward } from '@/assets/icons/_arrowForward';

import styles from './index.module.scss';

interface ICategoriesNavProps {
  name: string | undefined;
}
export const Categories: FC<ICategoriesNavProps> = ({ name }) => {
  const { t } = useTranslation(['common']);

  return (
    <div className={styles['categories-nav-container']}>
      {/* <Link to="/"> */}
      <span className={styles['categories-nav-item']}>{t('categories')}</span>
      <span className={styles['categories-nav-arrow']}>
        <ArrowForward />
      </span>
      {/* </Link> */}
      <span className={styles['categories-nav-item']}>
        {t('manufacturer')} ({name})
      </span>
      <span className={styles['categories-nav-arrow']}>
        <ArrowForward />
      </span>
      <span className={styles['categories-nav-item']}>Model</span>
      <span className={styles['categories-nav-arrow']}>
        <ArrowForward />
      </span>
      <span className={styles['categories-nav-item']}>{t('partName')}</span>
      <span className={styles['categories-nav-arrow']}>
        <ArrowForward />
      </span>
    </div>
  );
};
