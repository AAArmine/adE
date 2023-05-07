import { useTranslation } from 'next-i18next';
import type { FC } from 'react';

import type { CompanyMap } from '@/lib/graphql/types';

import styles from './index.module.scss';

interface CompanyDetailsProps {
  company?: CompanyMap;
}

export const CompanyDetails: FC<CompanyDetailsProps> = ({ company }) => {
  const { t } = useTranslation('home-page');
  const lineBreak = '\n';

  return (
    <div className={styles['location-details']}>
      <h3>{t('cantFind', { lineBreak })}</h3>
      <div className={styles['location-content']}>
        <h2>{company ? company.fullName : 'Default Company name'}</h2>
        <address>
          {company
            ? company.address1
            : 'Dansk - Tysk Autolager, Stiftsvej 49, 7120 Vejle Ø, Danmark'}
        </address>

        <a
          href={`tel:${company ? company.phone : '+354711122 1'}`}
          className={styles['call-us']}
        >
          {t('callUs')}
          {company ? company.phone : '+354711122 1'}
        </a>
        {/* <div className="web">
            {clickedLocationId ? clickedLocationId.web : ""}
          </div> */}
        <div>
          <a href={`https://${company ? company.web : ''}`}>
            {company ? company.web : ''}
          </a>
        </div>
      </div>
    </div>
  );
};
