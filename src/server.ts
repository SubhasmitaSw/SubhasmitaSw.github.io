import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import {gql} from '@apollo/client';
import resolvers from './resolvers';

const typeDefs = gql`
  type Article {
    id: ID!
    title: String!
    slug: String!
    dateAdded: String!
    coverImage: String!
  }

  type Query {
    articles: [Article]
  }

  schema {
    query: Query
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: {port: 4000},
});