import * as graphql from 'graphql';
import { AbilityScoreType } from './index';
import { fetchAbilityScore } from '../actions/index';

const AbilityBonusType = new graphql.GraphQLObjectType({
    name: 'AbilityBonuses',
    description: 'A score with a related ability type. Usually bonuses given from subraces or classes',
    fields: () => ({
        points: {
            type: graphql.GraphQLInt,
            description: 'The amount of bonus applied to ability score'
        },
        abilityScore: {
            type: AbilityScoreType,
            description: 'The ability score that applies to the item',
            resolve: ({ id }) => fetchAbilityScore(id)
        }
    })
});

export default AbilityBonusType;
