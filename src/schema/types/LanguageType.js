import * as graphql from 'graphql';

const LanguageType = new graphql.GraphQLObjectType({
    name: 'LanguageType',
    description: 'By virtue of your race, your character can speak, read, and write certain languages.',
    fields: () => ({
        id: {
            type: graphql.GraphQLID,
            description: 'The unique id of the language'
        },
        name: {
            type: graphql.GraphQLString,
            description: 'The name of the language'
        },
        type: {
            type: graphql.GraphQLString,
            description: 'Whether the language is standard or exotic'
        },
        typicalSpeakers: {
            type: graphql.GraphQLString,
            description: 'Races that tend to speak this language',
            resolve: () => 'TODO: Implement race type'
        },
        script: {
            type: graphql.GraphQLString,
            description: 'The script used for writing in this language'
        }
    })
});
