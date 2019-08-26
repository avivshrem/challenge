import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './schemas';
import plan from '../../api/plan/plan.model'

const models = {plan};

export default app => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: async ({ req }) => {
            return {models};
        }
    });

    server.applyMiddleware({app, path: '/graphql'});
}