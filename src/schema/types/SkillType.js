import * as graphql from 'graphql';
import { getOutputFields } from '../../utils/index';
import { AbilityScoreType } from './index';
import { AbilityScoreResolver } from '../resolvers/index';

const fields = [
    {
        name: 'id',
        type: graphql.GraphQLID,
        definition: {
            description: 'The unique id of the skill'
        },
        isOutput: true
    },
    {
        name: 'name',
        type: graphql.GraphQLString,
        definiton: {
            description: 'The name of the skill'
        },
        isOutput: true
    },
    {
        name: 'description',
        type: graphql.GraphQLString,
        definition: {
            description: 'The full description of the skill'
        },
        isOutput: true
    },
    {
        name: 'abilityScore',
        type: new graphql.GraphQLList(AbilityScoreType),
        definition: {
            description: 'A list of ability scores that this skill uses',
            resolve: (({ id }) => AbilityScoreResolver(id))
        },
        isOutput: true
    }
];

export const SkillType = new graphql.GraphQLObjectType({
    name: 'Skill',
    description: 'Each ability covers a broad range of capabilities, including skills that a character or a monster can be proficient in. A skill represents a specific aspect of an ability score, and an individual’s proficiency in a skill demonstrates a focus on that aspect.',
    fields: getOutputFields(fields)
});

export default SkillType;
