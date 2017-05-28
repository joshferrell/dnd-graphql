import fetch from 'node-fetch';

export const fetchRace = id =>
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

export const searchRace = string =>
    new Promise(async (resolve, reject) => {
        const apiUrl = 'http://www.dnd5eapi.co/api/races';
        try {
            const res = await fetch(apiUrl);

            if (res.status !== 200) {
                throw new Error('Response from server not successful');
            }

            const body = await res.json();

            const id = body.results
                .filter(({ name }) => string.includes(name))
                .map(({ url }) => url.split('/').pop());

            const race = await fetchRace(id[0]);

            resolve(race);
        } catch (e) {
            reject('Unable to access dnd api');
        }
    });
