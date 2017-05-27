import { GraphQLNonNull, GraphQLID } from 'graphql';
import { fetchRace } from '../actions/index';
import { RaceType } from '../types/index';

const RaceResolver = {
    race: {
        type: RaceType,
        description: 'Get a single race from the race id',
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLID),
                description: 'Ability Score id'
            }
        },
        resolve: ((_, { id }) => fetchRace(id))
    }
};

export default RaceResolver;
