import { gql } from 'apollo-server'
import  {makeExecutableSchema}  from 'graphql-tools'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
const Query = gql`
    type Query {
        users: [User],
        user(name: String, email: String): User
    }
`
const Mutation = gql`

    type Mutation {
            addUser(email: String!, password: String!, name: String!): Boolean
        }
`
export default makeExecutableSchema({
    typeDefs: [Query, Mutation, ...typeDefs],
    resolvers: resolvers
})