import Hapi from 'hapi';
import DotEnv from 'dotenv-safe';
import { apolloHapi, graphiqlHapi } from 'apollo-server';

import createLogger from './logger';
import graphSchema from './graphql';

DotEnv.load();

const logger = createLogger(process.env.SERVER_NAME);

const graphServer = {
    register: apolloHapi,
    options: {
        path: '/graphql',
        apolloOptions: () => ({
            pretty: true,
            schema: graphSchema
        })
    }
};
const graphiqlRegister = {
    register: graphiqlHapi,
    options: {
        path: '/graphiql',
        graphiqlOptions: {
            endpointURL: '/graphql'
        }
    }
};

const startServer = () => {
    const server = new Hapi.Server();
    server.connection({
        port: process.env.SERVER_PORT,
        routes: { cors: true }
    });
    server.register([graphiqlRegister, graphServer], () => {
        server.route({
            method: 'GET',
            path: '/',
            handler: (req, res) => res('hello!')
        });
        server.start();
        logger.info(`server started @ http://${server.info.host}:${server.info.port}`);
    });
};

// const failServer = err => logger.error(err);

startServer();
