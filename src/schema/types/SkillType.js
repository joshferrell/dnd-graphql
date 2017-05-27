import * as graphql from 'graphql';
import { AbilityScoreType } from './index';
import { fetchAbilityScore } from '../actions/index'

const SkillType = new graphql.GraphQLObjectType({
    name: 'Skill',
    description: 'Each ability covers a broad range of capabilities, including skills that a character or a monster can be proficient in. A skill represents a specific aspect of an ability score, and an individual’s proficiency in a skill demonstrates a focus on that aspect.',
    fields: () => ({
        id: {
            type: graphql.GraphQLID,
            description: 'The unique id of the skill'
        },
        name: {
            type: graphql.GraphQLString,
            description: 'The name of the skill'
        },
        description: {
            type: graphql.GraphQLString,
            description: 'The full description of the skill'
        },
        abilityScore: {
            type: AbilityScoreType,
            description: 'A list of ability scores that this skill uses',
            resolve: (({ ability_score }) => {
                const id = ability_score.url.split('/').pop();
                return fetchAbilityScore(id);
            })
        }
    })
});

export default SkillType;
