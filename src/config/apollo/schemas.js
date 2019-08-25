import { gql } from 'apollo-server-express';
import { PlanSchema, PlanResolver } from '../../api/plan';

const linkSchema = gql`
type Query {
    _: Boolean
}

type Mutation {
    _: Boolean
}

type Subscription {
    _: Boolean
}
`

export const typeDefs = [
    linkSchema,
    PlanSchema
];

export const resolvers = [
    PlanResolver
];