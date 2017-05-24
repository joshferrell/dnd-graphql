import Hapi from 'hapi';
import DotEnv from 'dotenv-safe';

DotEnv.load();

const startServer = () => {
    const server = new Hapi.Server();
    server.connection({
        port: process.env.SERVER_PORT,
        routes: { cors: true }
    });
    server.register([], () => {
        server.route({
            method: 'GET',
            path: '/',
            handler: (req, res) => res('hello!')
        });
        server.start();
        console.log(
          `server started @ http://${server.info.host}:${server.info.port}`);
    });
};

// const failServer = err => logger.error(err);

startServer();
