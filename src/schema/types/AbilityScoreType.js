import * as graphql from 'graphql';
import { getOutputFields } from '../../utils/index';
import { SkillType } from './index';
import { SkillResolver } from '../resolvers/index';

const fields = [
    {
        name: 'id',
        type: graphql.GraphQLID,
        definition: {
            description: 'The unique id of the ability score'
        },
        isOutput: true
    },
    {
        name: 'name',
        type: graphql.GraphQLString,
        definition: {
            description: 'The short name of the ability score'
        },
        isOutput: true
    },
    {
        name: 'fullName',
        type: graphql.GraphQLString,
        definition: {
            description: 'The full name of the ability score'
        },
        isOutput: true
    },
    {
        name: 'description',
        type: graphql.GraphQLString,
        definition: {
            description: 'The description of the ability score'
        },
        isOutput: true
    },
    {
        name: 'skills',
        type: new graphql.GraphQLList(SkillType),
        definition: {
            description: 'A list of skills that uses this ability score',
            resolve: (({ id }) => SkillResolver(id))
        },
        isOutput: true
    }
];

export const AbilityScoreType = new graphql.GraphQLObjectType({
    name: 'AbilityScore',
    description: 'Each of a creature’s abilities has a score, a number that defines the magnitude of that ability. An ability score is not just a measure of innate capabilities, but also encompasses a creature’s training and competence in activities related to that ability.',
    fields: getOutputFields(fields)
});

export default AbilityScoreType;
