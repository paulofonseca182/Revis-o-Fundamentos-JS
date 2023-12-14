const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valoreImpares = 0;

for (let index = 0; index < numbers.length ; index +=1) {
    if (numbers[index] % 2 !== 0) {
        valoreImpares += 1
    }
}

if (valoreImpares > 0 ) {
    console.log(`Existem ${valoreImpares} valores impares`);
} else {
    console.log("Nenhum valor impar encontrado");
}
