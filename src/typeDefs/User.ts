import { gql } from 'apollo-server'

const User = gql`
    type User {
        name: String!,
        email: String!,
        password: String!,
    }

    extend type Query {
        users: [User],
        user(name: String!): User
    }

    extend type Mutation {
        addUser(email: String!, password: String!, name: String!): Boolean 
    }
`

export default User