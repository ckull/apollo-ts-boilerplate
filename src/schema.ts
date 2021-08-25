import { gql } from 'apollo-server'
import  {makeExecutableSchema}  from 'graphql-tools'
import typeDefs from './typeDefs'
import resolvers from './resolvers'

const Query = gql`
  type Query {
    _empty: String
  }
`;

const Mutation = gql`
  type Mutation {
    _empty: String
  }
`;


export default makeExecutableSchema({
    typeDefs: [Query, Mutation, ...typeDefs],
    resolvers: resolvers
})