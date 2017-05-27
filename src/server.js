import Hapi from 'hapi';
import DotEnv from 'dotenv-safe';

import { goodLogger, createGraphServer, registerGraphiql } from './plugins';
import createLogger from './logger';
import schema from './schema/index';

DotEnv.load();

const logger = createLogger(process.env.SERVER_NAME);
const graphServer = createGraphServer(schema, '/graphql');
const graphiql = registerGraphiql('/graphiql', '/graphql');
const good = goodLogger(logger);

const startServer = () => {
    const server = new Hapi.Server();
    server.connection({
        port: process.env.SERVER_PORT,
        routes: { cors: true }
    });
    server.register([graphiql, graphServer, good], () => {
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
