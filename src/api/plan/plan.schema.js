import {gql} from 'apollo-server-express';

export default gql`
extend type Query {
    AllPlans: [Plan!]
    planById(_id: ID!): Plan
}

extend type Mutation {
    createPlan(name: String!, order: Int!, places: Int!, sign: Int!): Plan!
}

type Plan {
    _id: ID!
    name: String!,
    orderPercent: Int!,
    signPercent: Int!,
    places: Int!

}
`;