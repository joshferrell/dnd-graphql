import * as graphql from 'graphql';
import { SkillType } from './index';
import { fetchSkill } from '../actions/index';

const AbilityScoreType = new graphql.GraphQLObjectType({
    name: 'AbilityScore',
    description: 'Each of a creature’s abilities has a score, a number that defines the magnitude of that ability. An ability score is not just a measure of innate capabilities, but also encompasses a creature’s training and competence in activities related to that ability.',
    fields: () => ({
        id: {
            type: graphql.GraphQLID,
            description: 'The unique id of the ability score'
        },
        name: {
            type: graphql.GraphQLString,
            description: 'The short name of the ability score'
        },
        fullName: {
            type: graphql.GraphQLString,
            description: 'The full name of the ability score'
        },
        description: {
            type: graphql.GraphQLString,
            description: 'The description of the ability score'
        },
        skills: {
            type: new graphql.GraphQLList(SkillType),
            description: 'A list of skills that uses this ability score',
            resolve: (({ skills }) => Promise.all(skills.map(({ url }) => {
                const id = url.split('/').pop();
                return fetchSkill(id);
            })))
        }
    })
});

export default AbilityScoreType;
