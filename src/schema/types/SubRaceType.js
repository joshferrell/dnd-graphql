import * as graphql from 'graphql';
import { RaceType, AbilityBonusType, ProficiencyType } from './index';
import { fetchRace, fetchProficiency } from '../actions/index';

const SubRaceType = new graphql.GraphQLObjectType({
    name: 'SubRace',
    description: 'Subraces reflect the different varieties of a certain parent race',
    fields: () => ({
        id: {
            type: graphql.GraphQLID,
            description: 'The unique id of the subrace'
        },
        name: {
            type: graphql.GraphQLString,
            description: 'The name of the subrace'
        },
        race: {
            type: RaceType,
            description: 'The parent race of this subrace',
            resolve: (({ race }) => {
                const id = race.url.split('/').pop();
                return fetchRace(id);
            })
        },
        description: {
            type: graphql.GraphQLString,
            description: 'Flavor description of this subrace'
        },
        abilityBonuses: {
            type: new graphql.GraphQLList(AbilityBonusType),
            description: 'Starting ability score bonuses available to the subrace',
            resolve: (({ abilityBonuses }) =>
                Promise.all(abilityBonuses.map((points, index) => ({
                    points,
                    id: index + 1
                })))
            )
        },
        startingProficiencies: {
            type: new graphql.GraphQLList(ProficiencyType),
            description: 'Starting proficiencies for all new characters of this subrace',
            resolve: (({ startingProficiencies }) =>
                Promise.all(startingProficiencies.map(({ url }) => {
                    const id = url.split('/').pop();
                    return fetchProficiency(id);
                }))
            )
        },
        languageChoice: {
            type: graphql.GraphQLString,
            description: 'Choice in starting languages available to the subrace',
            resolve: () => 'TODO: Implement choice type'
        },
        traitChoice: {
            type: graphql.GraphQLString,
            description: 'Choice in starting traits available to the subrace',
            resolve: () => 'TODO: Implement choice type'
        }
    })
});

export default SubRaceType;
