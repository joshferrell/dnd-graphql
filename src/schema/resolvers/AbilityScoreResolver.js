import { GraphQLNonNull, GraphQLID } from 'graphql';
import { fetchAbilityScore } from '../actions/index';
import { AbilityScoreType } from '../types/index';

const AbilityScoreResolver = {
    abilityScore: {
        type: AbilityScoreType,
        description: 'Get a single ability score from the ability score id',
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLID),
                description: 'Ability Score id'
            }
        },
        resolve: ((_, { id }) => fetchAbilityScore(id))
    }
};

export default AbilityScoreResolver;
