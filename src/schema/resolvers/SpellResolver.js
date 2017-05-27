import { GraphQLNonNull, GraphQLID } from 'graphql';
import { fetchSpell } from '../actions/index';
import { SpellType } from '../types/index';

const SpellResolver = {
    spell: {
        type: SpellType,
        description: 'Get a single spell from the spell id',
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLID),
                description: 'Get spell information from the spell id'
            }
        },
        resolve: ((_, { id }) => fetchSpell(id))
    }
};

export default SpellResolver;
