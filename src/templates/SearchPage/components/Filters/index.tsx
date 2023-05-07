// import {
//   defaultTheme,
//   Form,
//   Item,
//   Picker,
//   Provider,
//   TextField,
// } from '@adobe/react-spectrum';
// import { defaultTheme } from '@react-spectrum/defaultTheme';
// import { Form } from '@react-spectrum/Form';
// import { Item } from '@react-spectrum/Item';
// import { Picker } from '@react-spectrum/Picker';
// import { TextField } from '@react-spectrum/TextField';
import { useTranslation } from 'next-i18next';
import type { FC } from 'react';
import React from 'react';

import styles from './index.module.scss';

export const Filters: FC = () => {
  const { t } = useTranslation('search-page');
  return (
    // <Provider theme={defaultTheme}>
    <section className={styles['filters-sec']}>
      {/* <Form> */}
      <div className={styles['filters-cont']}>
        <div className={styles['min-max-price']}>
          <span className={styles.price}>{t('price')}</span>
          <input placeholder="min" />
          <span className={styles.dash}>-</span>
          <input placeholder="max" />
        </div>
        <div className={`${styles['filter-first']} ${styles.filter}`}>
          <select>
            <option hidden>{t('orderBy')}</option>
            <option value="opt1">Option 1</option>
            <option value="opt2">Option 2</option>
            <option value="opt3">Option 3</option>
          </select>
        </div>
        <div className={`${styles['filter-first']} ${styles.filter}`}>
          <select>
            <option hidden>{t('orderBy')}</option>
            <option value="opt1">Option 1</option>
            <option value="opt2">Option 2</option>
            <option value="opt3">Option 3</option>
          </select>
        </div>
      </div>
      {/* </Form> */}
    </section>
    // </Provider>
  );
};
