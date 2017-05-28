import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import {
    SpellResolver,
    SkillResolver,
    AbilityScoreResolver,
    ProficiencyResolver,
    RaceResolver,
    LanguageResolver,
    TraitResolver
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
        ...TraitResolver
    }
});

const schema = new GraphQLSchema({
    query
});

export default schema;
