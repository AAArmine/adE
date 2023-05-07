import type { FC } from 'react';
import React from 'react';

import styles from './index.module.scss';

interface IPropsButton {
  text: string;
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
}
export const MainButton: FC<IPropsButton> = ({ text, onClick }) => {
  return (
    <button className={styles['main-button']} onClick={onClick} type="submit">
      {text}
    </button>
  );
};
