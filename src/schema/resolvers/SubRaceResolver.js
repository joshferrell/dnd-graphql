import { GraphQLNonNull, GraphQLID } from 'graphql';
import { fetchSubRace } from '../actions/index';
import { SubRaceType } from '../types/index';

const SubRaceResolver = {
    subRace: {
        type: SubRaceType,
        description: 'Get a single subrace from the subrace id',
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLID),
                description: 'Subrace id'
            }
        },
        resolve: ((_, { id }) => fetchSubRace(id))
    }
};

export default SubRaceResolver;
