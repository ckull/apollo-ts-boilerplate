import { gql } from 'apollo-server'
import  {makeExecutableSchema}  from 'graphql-tools'
import genSchema from './utils/genSchema'

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
    typeDefs: [Query, Mutation, genSchema().typeDefs],
    resolvers: genSchema().resolvers
})