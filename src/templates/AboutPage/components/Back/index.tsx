import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import type { FC } from 'react';
import React from 'react';

import { ArrowForward } from '@/assets/icons/_arrowForward';
import { CustomWrapper } from '@/components/custom/wrappers/CustomWrapper';

export const Back: FC = () => {
  const { t } = useTranslation(['common', 'about-page']);

  return (
    <CustomWrapper>
      <Link
        href="/"
        style={{
          color: '#717276',
        }}
      >
        <a>
          <span style={{ paddingRight: '0.5rem', fontSize: '12px' }}>
            {t('home')}
          </span>
          <ArrowForward />
        </a>
      </Link>
    </CustomWrapper>
  );
};
