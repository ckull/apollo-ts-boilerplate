
import * as bcrypt from 'bcryptjs'
import { User } from '../entity/User'

interface UserArgs {
    name: string;
    email: string;
    password: string;
}

const resolvers = {
  Query: {
    users: async (parent: any, args: UserArgs) => {
        return User
    },
    user: async (parent: any, args: UserArgs) => {
        console.log('user')
    }
  },
  Mutation: {
    addUser: async (parent: any, args: UserArgs)=> {
        console.log('args: ', args)
      let { email, password} = args
      const hashedPassword = await bcrypt.hash(password, 10) 
      await User.create({
        email, 
        password: hashedPassword
      })
      return true
    }
  }
};

export default resolvers