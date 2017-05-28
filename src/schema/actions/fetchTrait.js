import fetch from 'node-fetch';

const fetchTrait = id =>
    new Promise(async (resolve, reject) => {
        const url = `http://www.dnd5eapi.co/api/traits/${id}`;

        try {
            const res = await fetch(url);

            if (res.status !== 200) {
                throw new Error('Response from server not successful');
            }

            const body = await res.json();

            resolve(Object.assign({}, body, {
                id: body.index,
                description: body.desc
            }));
        } catch (e) {
            reject('Unable to access dnd api');
        }
    });

export default fetchTrait;
