import { gql } from 'apollo-server'
import  {makeExecutableSchema}  from 'graphql-tools'
import genSchema from './utils/genSchema'
const merge = require("lodash.merge");
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
    resolvers: merge(genSchema().resolvers)
})