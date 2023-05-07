import type { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Meta } from '@/layouts/Meta';
import { client } from '@/lib/apolloClient';
import companiesQuery from '@/lib/graphql/companiesQuery.graphql';
import manufacturersQuery from '@/lib/graphql/manufacturersQuery.graphql';
import type { CompanyMap, Manufacturer } from '@/lib/graphql/types';
import { Home } from '@/templates/Home';
import { Main } from '@/templates/Main';

interface IndexProps {
  manufacturers: Manufacturer[];
  companies: CompanyMap[];
}

const Index: React.FC<IndexProps> = (props) => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <Home {...props} />
    </Main>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const { data: companiesQueryData } = await client.query({
    query: companiesQuery,
  });
  const { data: manufacturersQueryData } = await client.query({
    query: manufacturersQuery,
  });
  const tsl = await serverSideTranslations(locale || 'en', [
    'common',
    'home-page',
  ]);

  return {
    props: {
      companies: companiesQueryData.companies,
      manufacturers: manufacturersQueryData.manufacturers,
      ...tsl,
    },
  };
};

export default Index;
