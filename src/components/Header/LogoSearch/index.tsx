/* eslint-disable consistent-return */
import { Form } from '@react-spectrum/form';
import Router from 'next/router';
import { useTranslation } from 'next-i18next';
import React, { useEffect, useRef, useState } from 'react';

import { ExpandMore } from '@/assets/icons/_expandMore';
import addataLogo from '@/assets/images/addataLogo.svg';
import { MainButton } from '@/components/custom/buttons/MainButton';
import { useManufacturersQuery } from '@/lib/graphql/types';

import { AdvancedSearch } from './AdvancedSearch';
import styles from './index.module.scss';

// eslint-disable-next-line @typescript-eslint/naming-convention
type suggestionsOfManufacturers = {
  __typename?: 'Manufacturer' | undefined;
  id: string;
  name: string;
};
// type submittedSearchValue = {
//   name: string;
//   id: string;
// };
export const LogoSearch = () => {
  const { t } = useTranslation();
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const { data } = useManufacturersQuery();
  const [expandAdvancedSearch, setExpandAdvancedSearch] =
    useState<boolean>(false);

  const [search, setSearch] = useState<string>('');
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const [suggestionsSearch, setSuggestionsSearch] = useState<
    suggestionsOfManufacturers[] | undefined
  >([]);

  const handleExpandClick = (): void => {
    if (!expandAdvancedSearch) {
      setExpandAdvancedSearch(true);
    }
  };

  const useOutsideAlerter = (ref: any) => {
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setExpandAdvancedSearch(false);
          setShowSearch(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };
  useOutsideAlerter(wrapperRef);
  const handleSearchInputChange = (text: string) => {
    const searchValue = text;
    setSearch(searchValue);
    if (searchValue.length > 0) {
      const matches = data?.manufacturers.filter((manufacturer: any) => {
        const regex = new RegExp(`${searchValue}`, 'gi');
        return manufacturer.name.match(regex);
      });
      setSuggestionsSearch(matches);
      setShowSearch(true);
    } else {
      setSuggestionsSearch([]);
      setShowSearch(false);
    }
  };
  const onSearchSuggestionClick = (name: string) => {
    setSearch(name);
    setSuggestionsSearch([]);
  };
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search.length > 0) {
      // eslint-disable-next-line array-callback-return
      const match = data?.manufacturers.filter((manufacturer: any) => {
        if (manufacturer.name === search.toUpperCase()) {
          return manufacturer;
        }
      });
      if (match) {
        // console.log('match', match);
        Router.push(`search?manufacturer=${match[0]?.name}&id=${match[0]?.id}`);
        setSearch('');
      }
    }
  };
  return (
    <section className={styles['logo-search-flex']}>
      <div className={styles.logo}>
        <img src={addataLogo.src} alt="ad data logo" />
      </div>
      <div className={styles['search-advance-cont']}>
        <div className={styles.search}>
          <Form onSubmit={handleSearch}>
            <div className={styles['search-input']}>
              <input
                placeholder={t('inputSearchPlaceholder')}
                onChange={(e) => handleSearchInputChange(e.target.value)}
                value={search}
              />
              <MainButton text={t('search')} />
              {suggestionsSearch!.length > 0 && showSearch ? (
                <div className={styles.suggestions} ref={wrapperRef}>
                  {suggestionsSearch?.map((manufacturer) => (
                    <div
                      onClick={() => onSearchSuggestionClick(manufacturer.name)}
                      key={manufacturer.name}
                    >
                      {manufacturer.name}
                    </div>
                  ))}
                </div>
              ) : (
                ''
              )}
            </div>
          </Form>
          <div
            onClick={handleExpandClick}
            className={`${styles['advanced-search']} ${
              expandAdvancedSearch && styles.inactive
            }`}
          >
            <span className={styles.advanced}>{t('advanced')}</span>
            <span
              className={`${styles.expand} ${
                expandAdvancedSearch && styles.rotate
              }`}
            >
              <ExpandMore color="#EB2C33" />
            </span>
          </div>
          {expandAdvancedSearch && (
            <Form>
              <AdvancedSearch
                wrapperRef={wrapperRef}
                data={data?.manufacturers}
              />
            </Form>
          )}
        </div>
      </div>
      <div className={styles.advice}>
        {t('needAdvice')} <span>{t('clickHere')} </span>
      </div>
    </section>
  );
};
