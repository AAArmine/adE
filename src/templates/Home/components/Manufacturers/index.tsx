import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

import { CustomWrapper } from '@/components/custom/wrappers/CustomWrapper';
import type { Manufacturer } from '@/lib/graphql/types';

import styles from './index.module.scss';

interface ManufacturersProps {
  manufacturers: Manufacturer[];
}

export const Manufacturers: FC<ManufacturersProps> = ({ manufacturers }) => {
  // const handleSearch = (manufacturer: string, idVal: string) => {};
  return (
    <section className={styles['models-cont']}>
      <CustomWrapper>
        <ul className={styles['models-wrapper']}>
          {(manufacturers || []).map(({ name, id }) => (
            <li className={styles['models-item']} key={id}>
              <Link href={`search?manufacturer=${name}&id=${id}`}>
                <div className={styles['item-border']}>
                  <a>{name}</a>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </CustomWrapper>
    </section>
  );
};
