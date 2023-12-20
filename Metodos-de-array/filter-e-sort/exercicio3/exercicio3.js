const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];

const orderAgeCres = (people) => people.sort((a, b) => a.age - b.age);
const orderAgeDecres = (people) => people.sort((a, b) => b.age - a.age);

console.log(orderAgeCres(people));
console.log(orderAgeDecres(people));