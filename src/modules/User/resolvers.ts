
import * as bcrypt from 'bcryptjs'
import { User } from '../../entity/User'

import { UserArgs } from './interface'

const resolvers = {
  Query: {
    users: async (parent: any, args: UserArgs) => {
        return await User.find()
    },
    user: async (parent: any, args: UserArgs) => {
      const { name } = args
        return await User.findOne({ where: { name }})
    }
  },
  Mutation: {
    addUser: async (parent: any, args: UserArgs)=> {
      let { email, password, name} = args
      try {
        const hashedPassword = await bcrypt.hash(password, 10) 
        const user = User.create({
          email, 
          password: hashedPassword,
          name
        })
        await User.save(user)
        return true
      } catch(err)  {
        return err
      }
    }
  }
};

export default resolvers