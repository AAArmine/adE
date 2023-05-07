import type { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Meta } from '@/layouts/Meta';
import { AboutPage } from '@/templates/AboutPage';
import { Main } from '@/templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <AboutPage />
  </Main>
);
export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const tsl = await serverSideTranslations(locale || 'en', [
    'common',
    'about-page',
  ]);

  return {
    props: {
      ...tsl,
    },
  };
};
export default About;
