import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  link: createHttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_SERVICE_URL,
    headers: { Authorization: process.env.NEXT_PUBLIC_GRAPHQL_AUTH_TOKEN },
  }),
  cache: new InMemoryCache(),
});
