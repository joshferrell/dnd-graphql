import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { SpellResolver } from './resolvers/index';

const query = new GraphQLObjectType({
    name: 'QueryType',
    description: 'The root query type',
    fields: {
        ...SpellResolver
    }
});

const schema = new GraphQLSchema({
    query
});

export default schema;
