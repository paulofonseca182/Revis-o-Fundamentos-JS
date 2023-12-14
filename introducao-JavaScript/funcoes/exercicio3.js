const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

function addCustumers(name) {
  if (typeof name === "string") {
    trybeBankCustomers.push(name)
    console.log(trybeBankCustomers);
  } else {
    return  console.log(`${name} nao e uma string`);
  }
}

addCustumers('56');


