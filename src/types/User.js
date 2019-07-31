import { gql } from 'apollo-server-express';

const User = gql`
  type User {
    username: String!
  }

  extend type Query {
    me: User
  }
`;

export default User;
