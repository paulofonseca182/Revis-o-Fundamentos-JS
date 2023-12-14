let balance = 0;

function add(value) {
    balance = balance + value;
    return balance
}

function rem(value) {
    balance = balance - value;
    return balance
}

function taxa(taxa) {
    balance = balance - (balance * taxa)
    return balance
}

function div(valor) {
    balance = balance / valor
    return balance
}

console.log(add(100));
console.log(rem(30));
console.log(taxa(0.1));
console.log(div(2));