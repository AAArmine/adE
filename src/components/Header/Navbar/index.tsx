import Link from 'next/link';
import { useRouter } from 'next/router';
import { i18n, useTranslation } from 'next-i18next';
import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';

import DanishFlag from '@/assets/icons/danish.svg';
import EnglishFlag from '@/assets/icons/english.svg';

import styles from './index.module.scss';

export const Navbar: FC = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [activeNav, setActiveNav] = useState<number>(1);
  const [activeLang, setActiveLang] = useState<string | undefined>('en');
  const [toggleMobileMenu, setToggleMobileMenu] = useState<boolean>(false);

  const navArr1 = [
    { name: `${t('home')}`, path: '/' },
    { name: `${t('allParts')}`, path: '/all-parts' },
    { name: `${t('aboutUs')}`, path: '/about' },
    { name: `${t('contacts')}`, path: '/contacts' },
  ];
  const handleLangClick = (lang: string) => {
    i18n?.changeLanguage(lang);
    document.cookie = `i18next=${lang}`;
    setActiveLang(lang);
    router.push(`${router.asPath}`, `${router.asPath}`, { locale: lang });
  };
  const toggleMobileMenuHandle = () => {
    setToggleMobileMenu(!toggleMobileMenu);
  };
  const handleMobNavClick = (item: number) => {
    setActiveNav(item + 1);
    setToggleMobileMenu(false);
  };

  useEffect(() => {
    const langCookieValue = document.cookie
      .split('; ')
      .find((row) => row.startsWith('i18next'))
      ?.split('=')[1];
    console.log('langCookieValue', langCookieValue);
    setActiveLang(langCookieValue);
    i18n?.changeLanguage(langCookieValue);
  }, []);

  const handleNavClick = (index: number) => {
    setActiveNav(index);
  };
  return (
    <section className={styles['navbar-language-cont']}>
      <div className={styles['navbar-item']}>
        <ul className={styles['nav-item-cont']}>
          {navArr1.map((item, index) => (
            <li
              className={styles.item}
              onClick={() => handleNavClick(index + 1)}
              key={item.name}
            >
              <span className={activeNav === index + 1 ? 'active' : ''}>
                <Link href={item.path}>
                  <a
                    className={
                      router.pathname === item.path ? styles.active : ''
                    }
                  >
                    {item.name}
                  </a>
                </Link>
              </span>
            </li>
          ))}
        </ul>
      </div>
      {/* mobile */}
      <div className={styles['menu-mobile']}>
        <FaBars onClick={toggleMobileMenuHandle} />

        <div className={styles['mob-menu-content-wrapper']}>
          <ul
            className={`${styles['mobile-menu-content']} ${
              toggleMobileMenu && styles.active
            }`}
          >
            {navArr1.map((item, index) => (
              <Link passHref key={index} href={item.path}>
                <li
                  className={styles.item}
                  onClick={() => handleMobNavClick(index)}
                  key={item.name}
                >
                  <a
                    className={
                      router.pathname === item.path ? styles.active : ''
                    }
                  >
                    {item.name}
                  </a>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.language}>
        <span>
          <img
            className={
              activeLang === 'en' ? styles.pressed : styles['not-pressed']
            }
            src={EnglishFlag.src}
            alt="English"
            onClick={() => handleLangClick('en')}
          />
        </span>
        <span>
          <img
            src={DanishFlag.src}
            alt="Danish"
            className={
              activeLang === 'da' ? styles.pressed : styles['not-pressed']
            }
            onClick={() => handleLangClick('da')}
          />
        </span>
      </div>
    </section>
  );
};
