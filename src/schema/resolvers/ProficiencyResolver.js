import { GraphQLNonNull, GraphQLID } from 'graphql';
import { fetchProficiency } from '../actions/index';
import { ProficiencyType } from '../types/index';

const ProficiencyResolver = {
    proficiency: {
        type: ProficiencyType,
        description: 'Get a single proficiency',
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLID),
                description: 'unique proficiency id'
            }
        },
        resolve: ((_, { id }) => fetchProficiency(id))
    }
};

export default ProficiencyResolver;
