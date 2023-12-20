const people = [
  { name: 'João', age: 25 },
  { name: 'Maria', age: 30 },
  { name: 'Pedro', age: 20 },
  { name: 'Ana', age: 35 },
];


const verifyAge = (people) => {
  const verify = people.filter((a) => a.age >= 30)
  return verify;
}

console.log(verifyAge(people));