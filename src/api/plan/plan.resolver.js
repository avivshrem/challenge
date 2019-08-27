import { model } from "mongoose";

export default {
    Query: {
        plans: async (parent, args, { models }) => {
            return await models.plan.find({});

        },
        plan: async (parent, { _id }, { models }) => {
            return await models.plan.findById(_id);
        },
        planByName: async (parent, { name }, { models }) => {
            return await models.plan.findOne({ name });
        },
        sortByOrderPercent: async (parent, args, { models }) => {
            return  [{
                id: 1,
                name: 'sortByOrderPercent',
                orderPercent: 1,
                signPercent: 1,
                places: 1
            }];
        },
        sortByPlaces: async (parent, args, { models }) => {
            return  [{
                id: 1,
                name: 'sortByPlaces',
                orderPercent: 1,
                signPercent: 1,
                places: 1
            }];
        },
        sortBySignPercent: async (parent, args, { models }) => {
            return  [{
                id: 1,
                name: 'sortBySignPercent',
                orderPercent: 1,
                signPercent: 1,
                places: 1
            }];
        },
    },
}