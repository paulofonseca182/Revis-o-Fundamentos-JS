const { countries } = require('./data');

const longestName = () => countries.reduce((acc, arr) => acc.name.length > arr.name.length ? acc : arr)

console.log(longestName());