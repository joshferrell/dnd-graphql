import Bunyan from 'bunyan';

export const createLogger = name => Bunyan.createLogger({
    name,
    serializers: {
        err: Bunyan.stdSerializers.err
    },
    streams: [
        { stream: process.stdout }
    ],
    level: 'trace'
});

export default createLogger;
