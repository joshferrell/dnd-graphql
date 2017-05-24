import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt
} from 'graphql';

const count = 0;

const graphSchema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            count: {
                type: GraphQLInt,
                resolve: () => count
            }
        }
    })
});

export default graphSchema;
