// lib/apolloClient.ts
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { HttpLink } from '@apollo/client/link/http';

export const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.WORDPRESS_API_URL,
  }),
  cache: new InMemoryCache(),
});
