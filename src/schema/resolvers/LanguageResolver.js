import { GraphQLNonNull, GraphQLID } from 'graphql';
import { fetchLanguage } from '../actions/index';
import { LanguageType } from '../types/index';

const LanguageResolver = {
    language: {
        type: LanguageType,
        description: 'Get a single language type',
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLID),
                description: 'language id'
            }
        },
        resolve: ((_, { id }) => fetchLanguage(id))
    }
};

export default LanguageResolver;
