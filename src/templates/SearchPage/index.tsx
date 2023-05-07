import { useRouter } from 'next/router';
import React from 'react';

import { CustomWrapper } from '@/components/custom/wrappers/CustomWrapper';

import { Cards } from './components/Cards';
import { Categories } from './components/Categories';
import { Filters } from './components/Filters';

export const SearchPage = () => {
  const route = useRouter();
  return (
    <section style={{ backgroundColor: 'white' }}>
      <CustomWrapper>
        <Categories name={`${route.query.manufacturer}`} />
        <Filters />
        <Cards />
      </CustomWrapper>
    </section>
  );
};
