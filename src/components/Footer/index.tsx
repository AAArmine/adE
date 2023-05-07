import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import type { FC } from 'react';
import React from 'react';

import { LocationImg } from '@/assets/icons/LocationImg';
import { MailImg } from '@/assets/icons/MailImg';
import { TelImg } from '@/assets/icons/TelImg';
import addataLogo from '@/assets/images/addataLogo.svg';
import { CustomWrapper } from '@/components/custom/wrappers/CustomWrapper';

import styles from './index.module.scss';

export const Footer: FC = () => {
  const { t } = useTranslation();
  // @ts-ignore
  // eslint-disable-next-line unused-imports/no-unused-vars
  // const [navState, setNavState] = useState<string>('');
  const footerArr = [
    { name: `${t('aboutUs')}`, path: '/about' },
    { name: `${t('privacyPolicy')}`, path: '/privacy-policy' },
    { name: `${t('contacts')}`, path: '/contacts' },
    { name: `${t('payments')}`, path: '/payments' },
    { name: `${t('refunds')}`, path: '/refunds' },
  ];
  const router = useRouter();
  return (
    <CustomWrapper>
      <section className={styles['footer-container']}>
        <div className={styles['footer-menu']}>
          <ul>
            {footerArr.map((link, index) => (
              <li key={index}>
                <span>
                  <Link href={link.path}>
                    <a
                      className={
                        router.pathname === link.path ? styles.active : ''
                      }
                    >
                      {link.name}
                    </a>
                  </Link>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.logo}>
          <img src={addataLogo.src} alt="ad data logo" />
          <p>
            Slogon Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </div>
        <div className={styles['contacts-container']}>
          <a href="tel:+354711122 1">
            <div className={`${styles.contacts} ${styles.pointer}`}>
              <div className={styles['img-cont']}>
                <TelImg />
              </div>
              <div className={styles['text-cont']}>
                <span>+354711122 1</span>
              </div>
            </div>
          </a>
          <a href="mailto:addata2021@gmail.com">
            <div className={`${styles.contacts} ${styles.pointer}`}>
              {' '}
              <div className={styles['img-cont']}>
                <MailImg />
              </div>
              <div className={styles['text-cont']}>
                <span>addata2021@gmail.com</span>
              </div>
            </div>{' '}
          </a>
          <div className={styles.contacts}>
            <div className={styles['img-cont']}>
              <LocationImg />
            </div>
            <div className={styles['text-cont']}>
              <span>Sdr. Skovvej 35, Halling, 8543 Hornslet, Danmark</span>
            </div>
          </div>
        </div>
      </section>
    </CustomWrapper>
  );
};
