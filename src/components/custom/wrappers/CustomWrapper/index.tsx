import type { FC } from 'react';
import React from 'react';

import styles from './index.module.scss';

interface IWrapper {
  children: React.ReactNode;
}

export const CustomWrapper: FC<IWrapper> = ({ children }) => (
  <div className={styles['custom-wrapper']}>{children}</div>
);
