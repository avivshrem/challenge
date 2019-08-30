import { model } from "mongoose";

export default {
    Query: {
        plans: async (parent, args, { models }) => {
            return await models.plan.find({});

        },
        planByID: async (parent, { _id }, { models }) => {
            return await models.plan.findById(_id);
        },
        planByName: async (parent, { name }, { models }) => {
            return await models.plan.findOne({ name });
        },
        sortByOrderPercent: async (parent, args, { models }) => {
            return await models.plan.find({}).sort({ orderPercent: "asc" });
        },
        sortByPlaces: async (parent, args, { models }) => {
            return await models.plan.find({}).sort({ places: "asc" });
        },
        sortBySignPercent: async (parent, args, { models }) => {
            return await models.plan.find({}).sort({ signPercent: "asc" });
        },
    },
}