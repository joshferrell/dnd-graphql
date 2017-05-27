import fetch from 'node-fetch';

const fetchSkill = id =>
    new Promise(async (resolve, reject) => {
        const url = `http://www.dnd5eapi.co/api/skills/${id}`;

        try {
            const res = await fetch(url);

            if (res.status !== 200) {
                throw new Error('Response from server not successful');
            }

            const body = await res.json();

            resolve(Object.assign({}, body, {
                id: body.index,
                fullName: body.full_name,
                description: body.desc
            }));
        } catch (e) {
            reject('Unable to access dnd api');
        }
    });

export default fetchSkill;
