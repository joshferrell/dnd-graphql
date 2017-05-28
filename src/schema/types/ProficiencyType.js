import * as graphql from 'graphql';
import { fetchRace } from '../actions/index';
import { RaceType } from './index';

const ProficiencyType = new graphql.GraphQLObjectType({
    name: 'Proficiency',
    description: 'By virtue of your race, your character can speak, read, and write certain Proficiencies.',
    fields: () => ({
        id: {
            type: graphql.GraphQLID,
            description: 'The unique id of the proficiency'
        },
        name: {
            type: graphql.GraphQLString,
            description: 'The name of the proficiency'
        },
        type: {
            type: graphql.GraphQLString,
            description: 'The general category of the proficiency'
        },
        classes: {
            type: graphql.GraphQLString,
            description: 'Classes that start with this proficiency',
            resolve: () => 'TODO: Not yet implemented'
        },
        races: {
            type: new graphql.GraphQLList(RaceType),
            description: 'Races that start with this proficiency',
            resolve: (({ races }) =>
                Promise.all(races.map(({ url }) => {
                    const id = url.split('/').pop();
                    return fetchRace(id);
                }))
            )
        }
    })
});

export default ProficiencyType;
