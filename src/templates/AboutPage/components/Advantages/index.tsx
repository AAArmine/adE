import React from 'react';
import { useTranslation } from 'react-i18next';

import assortment from '../../../../assets/images/assortment.png';
import picking from '../../../../assets/images/picking.png';
import sale from '../../../../assets/images/sale.png';
import shipping from '../../../../assets/images/shipping.png';
import { CustomWrapper } from '../../../../components/custom/wrappers/CustomWrapper';
import styles from './index.module.scss';

export const Advantages = () => {
  const { t } = useTranslation('about-page');
  return (
    <section className={styles['advantages-container']}>
      <CustomWrapper>
        <h2 className={styles['advantages-title']}>{t('ourAdvantages')} </h2>
        <div className={styles['advantages-flex']}>
          <div className={styles.card}>
            <div className={styles['card-header']}>{t('fastShipping')}</div>
            <img
              className={styles['card-img']}
              src={shipping.src}
              alt="ad data logo"
            />
          </div>
          <div className={styles.card}>
            <div className={styles['card-header']}>{t('discounts')}</div>
            <img
              className={styles['card-img']}
              src={sale.src}
              alt="ad data logo"
            />
          </div>
          <div className={styles.card}>
            <div className={styles['card-header']}>{t('assortment')}</div>
            <img
              className={styles['card-img']}
              src={assortment.src}
              alt="ad data logo"
            />
          </div>
          <div className={styles.card}>
            <div className={styles['card-header']}>{t('pickUp')}</div>
            <img
              className={styles['card-img']}
              src={picking.src}
              alt="ad data logo"
            />
          </div>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum Lorem ipsum, or lipsum as it is
          sometimes known, is dummy text used in laying out print, graphic or
          web designs. The passage is attributed to an unknown typesetter in the
          15th century who is thought to have scrambled parts os De Finibus
          Bonorum et Malorum for use in a type specimen book. It usually begins
          with: “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.” The
          purpose of lorem ipsum is to create a natural looking block of text
          (sentence, paragraph, page, etc.) that doesn`&apos;`t distract from
          the layout.
          <br /> <br />A practice not without controversy, laying out pages with
          meaningless filler text can be very useful when the focus is meant to
          be on design, not content. The passage experienced a surge in
          popularity during the 1960s when Letraset used it on their
          dry-transfer sheets, and again during the 90s as desktop publishers
          bundled the text with their software. <br /> <br />
          Today it&apos;s seen all around the web; on templates, websites, and
          stock designs. Use our generator to get your own, or read on for the
          authoritative history of lorem ipsum..
        </p>
      </CustomWrapper>
    </section>
  );
};
