const { countries } = require('../data/countries')

const buildString = (countries, name, ...properties) => {
    const result = countries.find((country) => country.name === name);
    return `${result.name} - ${properties}`;
  };
  
  countries.forEach((country) => {
    const string = buildString(countries, country.name, country.capital, country.currencies[0].code, country.currencies[0].name);
    console.log(string.split(',').join(' - '));
  });