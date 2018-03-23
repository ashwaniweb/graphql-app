const {mergeTypes} = require('merge-graphql-schemas');
const user = require('./user');

const types = [
    user
]
module.exports = mergeTypes(types);
