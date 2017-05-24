import { GraphQLNonNull, GraphQLID } from 'graphql';
import fetch from 'node-fetch';
import { SpellType } from '../types/index';

const SpellResolver = {
    spell: {
        type: SpellType,
        description: 'Get a single spell from the spell id',
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLID),
                description: 'Get spell information from the spell id'
            }
        },
        resolve: ((_, { id }) => new Promise(async (resolve, reject) => {
            const url = `http://www.dnd5eapi.co/api/spells/${id}`;

            try {
                const res = await fetch(url);

                if (res.status !== 200) {
                    throw new Error('Response from server not successful');
                }

                const body = await res.json();

                resolve(Object.assign({}, body, {
                    concentration: body.concentration !== 'No',
                    ritual: body.ritual !== 'No',
                    description: body.desc,
                    higherLevel: body.higher_level,
                    castingTime: body.casting_time
                }));
            } catch (e) {
                reject('Unable to access dnd api');
            }
        }))
    }
};

export default SpellResolver;
