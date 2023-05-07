import './index.module.scss';

import { useState } from 'react';

import type { CompanyMap } from '@/lib/graphql/types';
import { useCompaniesQuery } from '@/lib/graphql/types';

import { CompanyDetails } from './CompanyDetails';
import { MapComponent } from './MapComponent';

interface MapProps {
  companies: CompanyMap[];
}

export const Map: React.FC<MapProps> = ({ companies }) => {
  const { data: companiesData } = useCompaniesQuery();
  const [selectedCompany, setSelectedCompany] = useState<CompanyMap>();

  if (!companiesData?.companies) {
    return null;
  }

  return (
    <>
      <MapComponent
        companies={companies}
        onSelectCompany={setSelectedCompany}
      />
      <CompanyDetails company={selectedCompany} />
    </>
  );
};
