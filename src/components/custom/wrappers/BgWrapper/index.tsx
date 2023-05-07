import type { FC } from 'react';
import React from 'react';

import styles from './index.module.scss';

interface IWrapper {
  children: React.ReactNode;
}

export const BgWrapper: FC<IWrapper> = ({ children }) => {
  return (
    <div className={styles['background-wrapper']}>
      <div className={styles.layer}>{children}</div>
    </div>
  );
};
