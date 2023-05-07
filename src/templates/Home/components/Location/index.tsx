import { BgWrapper } from '@/components/custom/wrappers/BgWrapper';
import { CustomWrapper } from '@/components/custom/wrappers/CustomWrapper';
import type { CompanyMap } from '@/lib/graphql/types';

import styles from './index.module.scss';

interface LocationProps {
  companies: CompanyMap[];
}

export const Location: React.FC<LocationProps> = () => (
  <section className={styles['homepage-location']}>
    <BgWrapper>
      <CustomWrapper>
        <div className={styles['location-cont']}>
          {/* <Map companies={companies} /> */}
        </div>
      </CustomWrapper>
    </BgWrapper>
  </section>
);
