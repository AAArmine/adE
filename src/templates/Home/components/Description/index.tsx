import { useTranslation } from 'next-i18next';
import type { FC } from 'react';
import React from 'react';

import { CustomWrapper } from '@/components/custom/wrappers/CustomWrapper';

import styles from './index.module.scss';

export const Description: FC = () => {
  const { t } = useTranslation('home-page');

  return (
    <section className={styles['homepage-description']}>
      <CustomWrapper>
        <h2>{t('usedCarParts')}</h2>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </CustomWrapper>
    </section>
  );
};
