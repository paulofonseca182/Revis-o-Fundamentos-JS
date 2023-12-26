const { countries } = require('./data');

const getCountrieName = (name) => countries.filter((countrie) => countrie.region === name).
reduce((acc, arr) => acc.area > arr.area ? acc : arr).name

const getCountrieArea = (name) => countries.filter((countrie) => countrie.region === name).
reduce((acc, arr) => acc.area > arr.area ? acc : arr).area



const getLargestCountriesByRegion = () => {
    const newObject = {
        Asia: {
            name: getCountrieName('Asia'),
            area: getCountrieArea('Asia')
        },
        Europe: {
            name: getCountrieName('Europe'),
            area: getCountrieArea('Europe')
        },
        Africa: {
            name: getCountrieName('Africa'),
            area: getCountrieArea('Africa')
        },
        Oceania: {
            name: getCountrieName('Oceania'),
            area: getCountrieArea('Oceania')
        },
        Americas: {
            name: getCountrieName('Americas'),
            area: getCountrieArea('Americas')
        },
    }
    return newObject
};

console.log(getLargestCountriesByRegion());