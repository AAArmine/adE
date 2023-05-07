import React from 'react';
import type { CompanyMap, Manufacturer } from '@/lib/graphql/types';
import { Description } from './components/Description';
import { Location } from './components/Location/index';
import { Manufacturers } from './components/Manufacturers';
import { Title } from './components/Title';

interface HomeProps {
  manufacturers: Manufacturer[];
  companies: CompanyMap[];
}

export const Home: React.FC<HomeProps> = ({ companies, manufacturers }) => {
  return (
    <>
      <Title />
      <Manufacturers manufacturers={manufacturers} />
      <Description />
      <Location companies={companies} />
    </>
  );
};
