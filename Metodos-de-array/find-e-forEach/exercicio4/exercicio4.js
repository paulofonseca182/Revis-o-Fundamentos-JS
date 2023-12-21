const { countries } = require('../data/countries')

/* Req 1 */
const addPlanet = (countries) => {
  countries.forEach((countrie) => countrie['planet'] = 'Earth')
  return countries
};

console.log('--------------Req 1---------------');
console.log(addPlanet(countries));


/* Req 2 */
const creatObject = () => {
  const newObject = [];
  countries.forEach((e) => {
    const {name, currencies} = e;
    newObject.push({ 
    name: name,
    currencyCode: currencies[0].code,
    currencyName: currencies[0].name
   })})

   return newObject
}

console.log('--------------Req 2---------------');
console.log(creatObject(countries));


/* Req - 3 */

const findCountry = (countries, name) => { 
  try {
    const findContrie = countries.find((countrie) => countrie.name === name);
    if (!findContrie) {
      throw new Error('Pais nao encontrado');
    } 
    return findContrie;
  
  } catch (error) {
    return error.message
  };
};
console.log('--------------Req 3---------------');
console.log(findCountry(countries, 'Brazil'));