import { useTranslation } from 'next-i18next';
import type { FC } from 'react';
import React, { useState } from 'react';

import { ExpandMore } from '@/assets/icons/_expandMore';
import { MainButton } from '@/components/custom/buttons/MainButton';

import styles from './AdvancedSearch.module.scss';

interface Props {
  wrapperRef: any;
  data: any;
}
interface SuggestionsOfManufacturers {
  __typename?: 'Manufacturer' | undefined;
  id: string;
  name: string;
}

export const AdvancedSearch: FC<Props> = ({ wrapperRef, data }) => {
  const { t } = useTranslation();
  const [searchManufacturer, setSearchManufacturer] = useState<string>('');
  const [suggestionsManufacturer, setSuggestionsManufacturer] = useState<
    SuggestionsOfManufacturers[] | undefined
  >([]);
  const [expandAllManufacturers, setExpandAllManufacturers] =
    useState<boolean>(false);

  const handleManufacturerSearch = (text: string) => {
    if (expandAllManufacturers) {
      setExpandAllManufacturers(false);
    }
    if (text.length === 0) {
      setSuggestionsManufacturer([]);
    }
    if (text.length > 0) {
      const matches = data?.filter((manufacturer: any) => {
        const regex = new RegExp(`${text}`, 'gi');
        return manufacturer.name.match(regex);
      });
      // eslint-disable-next-line no-console
      console.log('matches', matches);
      setSuggestionsManufacturer(matches);
    }
    setSearchManufacturer(text);
  };
  const onManufacturerSuggestion = (name: string) => {
    setSearchManufacturer(name);
    setSuggestionsManufacturer([]);
    setExpandAllManufacturers(false);
  };
  const handleExpandManufacturer = () => {
    setSuggestionsManufacturer([]);
    setExpandAllManufacturers(!expandAllManufacturers);
  };
  return (
    <div className={styles['expand-search-abs']} ref={wrapperRef}>
      <div className={styles['expand-input-wrapper']}>
        <label htmlFor="manufacturer">{t('manufacturer')}</label>
        <input
          type="text"
          className={styles['w-100']}
          placeholder={t('manufacturer')}
          id="manufacturer"
          onChange={(e) => handleManufacturerSearch(e.target.value)}
          value={searchManufacturer}
        />
        <div
          className={`${styles['expand-more-manufacturers']} ${
            expandAllManufacturers && styles.rotate
          }`}
          onClick={handleExpandManufacturer}
        >
          <ExpandMore color="#5c5d60" />
        </div>
      </div>
      <div
        className={`${styles['all-manufacturers']} ${
          !expandAllManufacturers && styles.hide
        }`}
      >
        {data.map((manufacturer: SuggestionsOfManufacturers) => (
          <div
            key={manufacturer.id}
            onClick={() => onManufacturerSuggestion(manufacturer.name)}
          >
            {manufacturer.name}
          </div>
        ))}
      </div>
      <div className={`${styles.suggestions} ${styles['pb-2']}`}>
        {suggestionsManufacturer?.map((manufacturer) => (
          <div
            key={manufacturer.id}
            onClick={() => onManufacturerSuggestion(manufacturer.name)}
          >
            {manufacturer.name}
          </div>
        ))}
      </div>

      <div className={styles['expand-input-wrapper']}>
        <label htmlFor="partName">{t('partName')}</label>
        <input
          type="text"
          className={styles['w-100']}
          placeholder={t('partName')}
          id="partName"
        />
      </div>
      <div className={styles['button-container']}>
        <MainButton text={t('search')} />
      </div>
    </div>
  );
};
