import * as graphql from 'graphql';

const SpellType = new graphql.GraphQLObjectType({
    name: 'Spell',
    description: 'A dnd spell',
    fields: () => ({
        id: {
            type: graphql.GraphQLID,
            description: 'The unique id of the spell'
        },
        name: {
            type: graphql.GraphQLString,
            description: 'The name of the spell'
        },
        description: {
            type: graphql.GraphQLString,
            description: 'A description of the spell'
        },
        higherLevel: {
            type: graphql.GraphQLString,
            description: 'A description on how the spell performs at a higher level'
        },
        page: {
            type: graphql.GraphQLString,
            description: 'Page in the dungeons and dragon handbook of where the spell is located'
        },
        range: {
            type: graphql.GraphQLString,
            description: 'Range of the spell in feet'
        },
        components: {
            type: graphql.GraphQLString,
            description: 'Spell components'
        },
        material: {
            type: graphql.GraphQLString,
            description: 'Materials that the spell consumes'
        },
        ritual: {
            type: graphql.GraphQLBoolean,
            description: 'Determines whether or not the spell requires a ritual'
        },
        duration: {
            type: graphql.GraphQLString,
            description: 'Determines the duration that the spell takes'
        },
        concentration: {
            type: graphql.GraphQLBoolean,
            description: 'Determines whether or not the spell requires concentration'
        },
        castingTime: {
            type: graphql.GraphQLString,
            description: 'Determines the amount of time the spell takes to cast'
        },
        level: {
            type: graphql.GraphQLInt,
            description: 'Spell level'
        }
    })
});

export default SpellType;
