import { model } from "mongoose";

export default {
    Query: {
        AllPlans: async (parent, args, { models }) => {
            return await models.plan.find({});

        },
        planById: async (parent, {_id}, { models }) => {
            const array = await models.plan.find({});
            var result = array.find(function (plan) {
                return plan._id == _id
            });
            return result;
        },
    },
}