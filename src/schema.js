import { gql } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import User from './types/User';
import userQueries from './queries/user';

const Root = gql`
  type Query {
    _: Boolean
  }

  schema {
    query: Query
  }
`;

const resolvers = {
  ...userQueries,
};

export default makeExecutableSchema({ typeDefs: [User, Root], resolvers });
