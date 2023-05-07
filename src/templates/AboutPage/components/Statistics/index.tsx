import { useTranslation } from 'next-i18next';
import type { FC } from 'react';
import React from 'react';
import CountUp from 'react-countup';

import { BgWrapper } from '../../../../components/custom/wrappers/BgWrapper';
import { CustomWrapper } from '../../../../components/custom/wrappers/CustomWrapper';
import styles from './index.module.scss';
// interface IStatistics {
//   brands: number;
//   orders: number;
//   visitors: number;
//   goods: number;
// }
// type TNumberArray = Array<number>;
export const Statistics: FC = () => {
  const { t } = useTranslation('about-page');
  return (
    <section className={styles['statistics-cont']}>
      <BgWrapper>
        <div className={styles['statistics-sec']}>
          <div className={styles['statistics-title-sec']}>
            <h1>{t('welcome')} AD DATA</h1>
            <p>{t('welcomeText')}</p>
          </div>
        </div>
        <CustomWrapper>
          <div className={styles['statistics-data-sec']}>
            <div className={styles['statistics-data-item']}>
              <div className={styles['statistics-content']}>
                <CountUp end={80} duration={2} /> K+ <br />{' '}
                <span>{t('brands')}</span>
              </div>
            </div>
            <div className={styles['statistics-data-item']}>
              <div className={styles['statistics-content']}>
                <CountUp end={1.4} duration={2} separator=" " decimals={1} /> K+{' '}
                <br /> <span>{t('orders')}</span>
              </div>
            </div>
            <div className={styles['statistics-data-item']}>
              <div className={styles['statistics-content']}>
                <CountUp end={11.5} duration={2} separator=" " decimals={1} />{' '}
                K+ <br /> <span>{t('visitors')}</span>
              </div>
            </div>
            <div className={styles['statistics-data-item']}>
              <div className={styles['statistics-content']}>
                <CountUp end={140} duration={2} /> K+ <br />
                <span>{t('goods')}</span>
              </div>
            </div>
          </div>
        </CustomWrapper>
      </BgWrapper>
    </section>
  );
};
