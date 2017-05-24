import * as graphql from 'graphql';
import { getInputFields, getOutputFields } from '../../utils/index';

const fields = [
    {
        name: 'id',
        type: graphql.GraphQLID,
        definition: {
            description: 'The unique id of the spell'
        },
        isOutput: true
    },
    {
        name: 'name',
        type: graphql.GraphQLString,
        definition: {
            description: 'The name of the spell'
        },
        isOutput: true
    },
    {
        name: 'description',
        type: graphql.GraphQLString,
        definition: {
            description: 'A description of the spell'
        },
        isOutput: true
    },
    {
        name: 'higherLevel',
        type: graphql.GraphQLString,
        definition: {
            description: 'A description on how the spell performs at a higher level'
        },
        isOutput: true
    },
    {
        name: 'page',
        type: graphql.GraphQLString,
        definition: {
            description: 'Page in the dungeons and dragon handbook of where the spell is located'
        },
        isOutput: true
    },
    {
        name: 'range',
        type: graphql.GraphQLString,
        definition: {
            description: 'Range of the spell in feet'
        },
        isOutput: true
    },
    {
        name: 'components',
        type: graphql.GraphQLString,
        definition: {
            description: 'Spell components'
        },
        isOutput: true
    },
    {
        name: 'material',
        type: graphql.GraphQLString,
        definition: {
            description: 'Materials that the spell consumes'
        },
        isOutput: true
    },
    {
        name: 'ritual',
        type: graphql.GraphQLBoolean,
        definition: {
            description: 'Determines whether or not the spell requires a ritual'
        },
        isOutput: true
    },
    {
        name: 'duration',
        type: graphql.GraphQLString,
        definition: {
            description: 'Determines the duration that the spell takes'
        },
        isOutput: true
    },
    {
        name: 'concentration',
        type: graphql.GraphQLBoolean,
        definition: {
            description: 'Determines whether or not the spell requires concentration'
        },
        isOutput: true
    },
    {
        name: 'castingTime',
        type: graphql.GraphQLString,
        defintion: {
            description: 'Determines the amount of time the spell takes to cast'
        },
        isOutput: true
    },
    {
        name: 'level',
        type: graphql.GraphQLInt,
        definition: {
            description: 'Spell level'
        },
        isOutput: true
    }
];

export const SpellType = new graphql.GraphQLObjectType({
    name: 'Spell',
    description: 'A dnd spell',
    fields: getOutputFields(fields)
});

export default SpellType;
