import { GraphQLNonNull } from 'graphql';

const getSchemaValues = (
    accumulator,
    {
        name,
        type,
        isRequired,
        isInput,
        definition
    }
) =>
    Object.assign({}, accumulator, {
        [name]: {
            type: (isInput && isRequired) ?
                new GraphQLNonNull(type) :
                type,
            ...definition
        }
    });

export const getInputFields = fields =>
    fields
        .filter(field => field.isInput)
        .reduce((accumulator, field) => getSchemaValues(accumulator, field), {});

export const getOutputFields = fields =>
    fields
        .filter(field => field.isOutput)
        .reduce((accumulator, field) => getSchemaValues(accumulator, field), {});
