const angulo_1 = 60;
const angulo_2 = 60;
const angulo_3 = -5;

const soma = angulo_1 + angulo_2 + angulo_3;


if (angulo_1 > 0 && angulo_2 > 0 && angulo_3 > 0) {
    if (soma === 180) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log("error: numero invalido");
}