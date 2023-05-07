import '@/styles/root.scss';

import { ApolloProvider } from '@apollo/client';
import { SSRProvider } from '@react-aria/ssr';
import { Provider } from '@react-spectrum/provider';
import { theme } from '@react-spectrum/theme-default';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import { client } from '../lib/apolloClient';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <SSRProvider>
    <Provider theme={theme}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  </SSRProvider>
);

export default appWithTranslation(MyApp);
