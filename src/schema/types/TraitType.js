import * as graphql from 'graphql';
import { RaceType } from './index';
import { fetchRace } from '../actions/index';

const TraitType = new graphql.GraphQLObjectType({
    name: 'Trait',
    description: 'Each race grants your character ability and skill bonuses as well as racial traits.',
    fields: () => ({
        id: {
            type: graphql.GraphQLID,
            description: 'Unique identifier for the trait'
        },
        name: {
            type: graphql.GraphQLString,
            descripton: 'Name of the racial trait'
        },
        race: {
            type: RaceType,
            descripton: 'Race with this trait',
            resolver: (({ race }) => {
                const id = race.url.split('/').pop();
                return fetchRace(id);
            })
        },
        description: {
            type: graphql.GraphQLString,
            description: 'A description of the racial trait'
        }
    })
});

export default TraitType;
