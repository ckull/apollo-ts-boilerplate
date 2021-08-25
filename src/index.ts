import "reflect-metadata";
import { createConnection } from "typeorm";
import schema from './schema'
import { ApolloServer } from 'apollo-server'


const startServer = async () => {
    const server = new ApolloServer({ schema });

    await createConnection()

    const app = await server.listen({ port: 4000 }, () => {
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    })


    return app

}

startServer()

