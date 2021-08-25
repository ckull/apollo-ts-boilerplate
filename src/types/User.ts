import { gql } from 'apollo-server'

const User = gql`
    type User {
        name: String!,
        email: String!,
        password: String!,
    }
`

export default User

