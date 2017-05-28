import { GraphQLNonNull, GraphQLID } from 'graphql';
import { fetchTrait } from '../actions/index';
import { TraitType } from '../types/index';

const TraitResolver = {
    trait: {
        type: TraitType,
        description: 'Get a single trait from the trait id',
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLID),
                description: 'Unique identifier of the trait'
            }
        },
        resolve: ((_, { id }) => fetchTrait(id))
    }
};

export default TraitResolver;
