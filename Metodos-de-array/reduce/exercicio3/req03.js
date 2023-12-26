const { countries } = require('./data');

const totalAreaByRegion = (region = 'Europe') => countries.filter((countrie) => countrie.region === region).reduce((acc, arr) => acc + arr.area, 0)

console.log(totalAreaByRegion());
console.log(totalAreaByRegion('Africa'));