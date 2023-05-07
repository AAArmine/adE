import type { FC } from 'react';
import React from 'react';

import { Arrow } from '@/assets/icons/_arrow';

import styles from './index.module.scss';

interface PaginationProps {
  partsPerPage: number;
  totalParts: number;
  paginate: (el: number) => void;
  currentPage: number;
}
type PageNumbersArr = number[];

export const Pagination: FC<PaginationProps> = ({
  partsPerPage,
  totalParts,
  paginate,
  currentPage,
}) => {
  const pageNumbers: PageNumbersArr = [];
  for (let i = 1; i <= Math.ceil(totalParts / partsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles['pagination-container']}>
      <nav>
        {currentPage > 2 ? (
          <>
            <span
              className={`${styles['prev-next']} ${styles.prev}`}
              onClick={() => paginate(currentPage - 1)}
            >
              <Arrow /> <span className={styles.text}>Previous</span>
            </span>
            <span
              className={`${styles['terminal-page']} ${styles.first}`}
              onClick={() => paginate(1)}
            >
              1...
            </span>
          </>
        ) : (
          <span
            className={`${styles['prev-next']} ${styles.prev} ${styles.inactive}`}
          >
            <Arrow color={'#bababb'} />
            <span className={styles.text}>Previous</span>
          </span>
        )}

        {pageNumbers.map((item) => (
          <div key={item} onClick={() => paginate(item)}>
            {
              // eslint-disable-next-line no-nested-ternary
              currentPage === 1 && item < 4 ? (
                <span
                  className={
                    currentPage === item
                      ? `${styles.active} ${styles['page-item']}`
                      : styles['page-item']
                  }
                >
                  {item}
                </span>
              ) : // eslint-disable-next-line no-nested-ternary
              currentPage === pageNumbers[pageNumbers.length - 1] &&
                item > pageNumbers[pageNumbers.length - 4]! ? (
                <span
                  className={
                    currentPage === item
                      ? `${styles.active} ${styles['page-item']}`
                      : styles['page-item']
                  }
                >
                  {item}
                </span>
              ) : item + 1 === currentPage ||
                item === currentPage ||
                item - 1 === currentPage ? (
                <span
                  className={
                    currentPage === item
                      ? `${styles.active} ${styles['page-item']}`
                      : styles['page-item']
                  }
                >
                  {item}
                </span>
              ) : (
                ''
              )
            }
          </div>
        ))}
        {
          //
          pageNumbers[pageNumbers.length - 1]! - currentPage > 1 ? (
            <>
              <span
                className={`${styles['terminal-page']} ${styles.last}]`}
                onClick={() => paginate(pageNumbers[pageNumbers.length - 1]!)}
              >
                ...{pageNumbers[pageNumbers.length - 1]}
              </span>
              <span
                className={`${styles['prev-next']} ${styles.next}`}
                onClick={() => paginate(currentPage + 1)}
              >
                <span className={styles.text}>Next</span>
                <span className={styles.reverse}>
                  <Arrow />
                </span>
              </span>
            </>
          ) : (
            <span
              className={`${styles['prev-next']} ${styles.next} ${styles.inactive}`}
            >
              <span className={styles.text}>Next</span>
              <span className={styles.reverse}>
                <Arrow color={'#bababb'} />
              </span>
            </span>
          )
        }
      </nav>
    </div>
  );
};
