const { countries } = require('./data');

const getPopulation = () => countries.reduce((acc, arr) => acc + arr.population, 0)

console.log(getPopulation());