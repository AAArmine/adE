import type { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { SearchPage } from '@/templates/SearchPage';

const Search = () => {
  return (
    <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      <SearchPage />
    </Main>
  );
};
export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  // const { data: companiesQueryData } = await client.query({
  //   query: companiesQuery,
  // });
  // const { data: manufacturersQueryData } = await client.query({
  //   query: manufacturersQuery,
  // });
  const tsl = await serverSideTranslations(locale || 'en', [
    'common',
    'search-page',
  ]);

  return {
    props: {
      ...tsl,
    },
  };
};
export default Search;
