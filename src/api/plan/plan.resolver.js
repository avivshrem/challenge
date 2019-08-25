export default {
    Query: {
        plans: async (parent, args, context) => {
            return [{
                id: 1,
                name: '1',
                orderPercent: 1,
                signPercent: 1,
                places: 1
            }]
        }
    }
}