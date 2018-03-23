if(process.env.NODE_ENV ==='local'){
    require('dotenv').config();
}
const app = require('express')();
const { graphqlExpress } = require('apollo-server-express');
const cors = require('cors');
const bearerToken = require('express-bearer-token');
const bodyParser = require('body-parser');
const Playground = require('graphql-playground-middleware-express').default;
const { server } = require('./config');
const LoginController = require('./controllers/login');
const schema = require('./schema');

app.use(cors());
app.use(bodyParser.json());
app.post('/login', LoginController);

app.use('/graphiql', Playground({endpoint: '/graphql'}));

app.use(bearerToken());

const buildOptions = async (req, res) => {
    return {schema, context: { user: req.token }, tracing: true}
}
app.use('/graphql', graphqlExpress(buildOptions));

app.listen(server.port, server.host, () => {
    console.log('info', `Running a GraphQL API server at http://${server.host}:${server.port}`);
});