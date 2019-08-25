import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './schemas';

export default app => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: async ({ req }) => {
            return {};
        }
    });

    server.applyMiddleware({app, path: '/graphql'});
}