import good from 'good';
import { apolloHapi, graphiqlHapi } from 'apollo-server';

export const goodLogger = logger => ({
    register: good,
    options: {
        ops: {
            interval: process.env.SERVER_HEALTH_INTERVAL
        },
        includes: {
            request: ['headers', 'payload'],
            response: ['payload']
        },
        reporters: {
            bunyan: [{
                module: 'good-bunyan',
                args: [
                    { ops: '*', request: '*', log: '*', response: '*', error: '*' },
                    {
                        logger,
                        levels: {
                            ops: 'debug',
                            request: 'info',
                            response: 'info',
                            log: 'info',
                            error: 'error'
                        }
                    }
                ]
            }]
        }
    }
});

export const createGraphServer = (schema, path) => ({
    register: apolloHapi,
    options: {
        path,
        apolloOptions: () => ({
            pretty: true,
            schema
        })
    }
});

export const registerGraphiql = (graphiqlPath, serverPath) => ({
    register: graphiqlHapi,
    options: {
        path: graphiqlPath,
        graphiqlOptions: {
            endpointURL: serverPath
        }
    }
});
