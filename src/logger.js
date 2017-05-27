import Bunyan from 'bunyan';

const createLogger = name => Bunyan.createLogger({
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
