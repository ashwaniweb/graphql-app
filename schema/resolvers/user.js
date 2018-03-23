const model = require('./../../models');
module.exports = {
    Query: {
        users: async (obj, args, context, info) => {
            try {
                const users = await model.User.findAll();
                return users;
            } catch (error) {
                throw new Error(error);
            }
        }
    },
    Mutation: {
        signup: async (obj, args, context, info) => {
            try {
                const result = await model.User.create(args.input);
                if (result) {
                    return 'Success'
                }
            } catch (error) {
                throw new Error(error);
            }
        }
    }
}