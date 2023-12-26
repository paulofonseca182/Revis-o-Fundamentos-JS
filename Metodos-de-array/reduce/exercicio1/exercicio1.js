const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const addEvenNumbers = numbers.reduce((acc, currentValue) => {
  if (currentValue % 2 === 0) {
    return acc + currentValue;
  } else {
    return acc;
  }
}, 0)


console.log(addEvenNumbers);



