import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import {
    SpellResolver,
    SkillResolver,
    AbilityScoreResolver,
    ProficiencyResolver,
    RaceResolver,
    LanguageResolver,
    TraitResolver,
    SubRaceResolver
} from './resolvers/index';

const query = new GraphQLObjectType({
    name: 'QueryType',
    description: 'The root query type',
    fields: {
        ...SpellResolver,
        ...SkillResolver,
        ...AbilityScoreResolver,
        ...ProficiencyResolver,
        ...RaceResolver,
        ...LanguageResolver,
        ...TraitResolver,
        ...SubRaceResolver
    }
});

const schema = new GraphQLSchema({
    query
});

export default schema;
