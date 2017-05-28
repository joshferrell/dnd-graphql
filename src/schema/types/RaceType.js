import * as graphql from 'graphql';
import { LanguageType, AbilityBonusType } from './index';
import { fetchLanguage } from '../actions/index';

const RaceType = new graphql.GraphQLObjectType({
    name: 'Race',
    description: 'Each race grants your character ability and skill bonuses as well as racial traits.',
    fields: () => ({
        id: {
            type: graphql.GraphQLID,
            description: 'The unique id of the race'
        },
        name: {
            type: graphql.GraphQLString,
            description: 'The name of the race'
        },
        speed: {
            type: graphql.GraphQLInt,
            description: 'Base move speed for this race (in feet per round)'
        },
        abilityBonuses: {
            type: new graphql.GraphQLList(AbilityBonusType),
            description: 'Starting ability score bonuses available to the race',
            resolve: (({ abilityBonuses }) =>
                Promise.all(abilityBonuses.map((points, index) => ({
                    points,
                    id: index + 1
                })))
            )
        },
        alignment: {
            type: graphql.GraphQLString,
            description: 'Flavor description of likely alignments this race takes.'
        },
        age: {
            type: graphql.GraphQLString,
            description: 'Flavor description of possible ages for this race'
        },
        size: {
            type: new graphql.GraphQLEnumType({
                name: 'sizes',
                values: {
                    Large: {},
                    Medium: {},
                    Small: {}
                }
            }),
            description: 'Size class of this race'
        },
        sizeDescription: {
            type: graphql.GraphQLString,
            description: 'Flavor description of height and weight for this race'
        },
        startingProficencies: {
            type: graphql.GraphQLString,
            description: 'A list of proficiencies that the race starts with',
            resolve: () => 'TODO: Need to include choice information'
        },
        languages: {
            type: new graphql.GraphQLList(LanguageType),
            description: 'A list of languages that the race starts with',
            resolve: (({ languages }) =>
                Promise.all(languages.map(({ url }) => {
                    const id = url.split('/').pop();
                    return fetchLanguage(id);
                }))
            )
        },
        languageDescription: {
            type: graphql.GraphQLString,
            description: 'Flavor description of the languages this race knows'
        },
        traits: {
            type: graphql.GraphQLString,
            description: 'Racial traits that provide benefits to its members',
            resolve: () => 'TODO: NEed to implement traits'
        },
        subraces: {
            type: graphql.GraphQLString,
            description: 'The reference object for the class\'s spellcasting. Contains information such as spells known, spellcasting ability, and cantrips knowns',
            resolve: () => 'TODO: need to implement subraces'
        }
    })
});

export default RaceType;
