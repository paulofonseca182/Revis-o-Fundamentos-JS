const num_1 = 100;
const num_2 = 25;
const num_3 = 100;

if (num_1 > num_2 && num_1 > num_3) {
    console.log(`${num_1} e maior`);
} else if (num_2 > num_1 && num_2 > num_3) {
    console.log(`${num_2} e maior`);
} else if (num_3 > num_1 && num_3 > num_2) {
    console.log(`${num_3} e maior`);
} else {
    console.log('Pode ter numeros iguais');
}