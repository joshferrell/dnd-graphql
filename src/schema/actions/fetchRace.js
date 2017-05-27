import fetch from 'node-fetch';

const fetchRace = id =>
    new Promise(async (resolve, reject) => {
        const url = `http://www.dnd5eapi.co/api/races/${id}`;

        try {
            const res = await fetch(url);

            if (res.status !== 200) {
                throw new Error('Response from server not successful');
            }

            const body = await res.json();

            resolve(Object.assign({}, body, {
                id: body.index,
                abilityBonuses: body.ability_bonuses,
                sizeDescription: body.size_description,
                proficiencies: body.starting_proficiencies,
                languageDescription: body.language_desc
            }));
        } catch (e) {
            reject('Unable to access dnd api');
        }
    });

export default fetchRace;
