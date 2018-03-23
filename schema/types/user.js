module.exports = `
type user{
    firstName:String!
    lastName:String!
    userName:String!
    email:String!
}
input signup{
    firstName:String!
    lastName:String!
    userName:String!
    email:String!
    password:String!
}
type Query {
        users: [user]
     }
type Mutation {
    signup(input: signup): String
}     
`;