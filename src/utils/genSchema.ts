import * as glob from 'glob';
import * as path from "path";


const genSchema = () => {
    const pathToModules = path.join(__dirname, "../modules")
    const typeDefs = glob.sync(`${pathToModules}/**/type.ts`)
    .map(i => require(i).default)

    

    const resolvers = glob
    .sync(`${pathToModules}/**/resolvers.ts`)
    .map(i => require(i).default);


    return { typeDefs, resolvers }
}

export default genSchema