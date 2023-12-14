const salarioBrunto = 3000.00;
let livreInss = 0;
let livreIr = 0;
let taxaInss = 0;
let taxaIr = 0;
let salarioLiquido = 0;

if (salarioBrunto <= 1556.94){
    taxaInss = salarioBrunto * 0.08
    livreInss = salarioBrunto - taxaInss
} else if (salarioBrunto >= 1556.94 && salarioBrunto <= 2594.92) {
    taxaInss = salarioBrunto * 0.09
    livreInss = salarioBrunto - taxaInss
} else if (salarioBrunto >= 2594.93 && salarioBrunto <= 5189.82) {
    taxaInss = salarioBrunto * 0.11
    livreInss = salarioBrunto - taxaInss
} else if (salarioBrunto >= 5189.82) {
    taxaInss = 570.88
    livreInss = salarioBrunto - taxaInss
}

if (livreInss <= 1903.98) {
    taxaIr = 0
    livreIr = livreInss - taxaIr
    salarioLiquido = livreIr
} else if (livreInss >= 1903.99 && livreInss <= 2826.65) {
    taxaIr = (livreInss * 0.075) - 142.80
    livreIr = livreInss - taxaIr
    salarioLiquido = livreIr
} else if (livreInss >= 2826.66 && livreInss <= 3751.05) {
    taxaIr = (livreInss * 0.15) - 354.80
    livreIr = livreInss - taxaIr
    salarioLiquido = livreIr
} else if (livreInss >= 3751.06 && livreInss <= 4664.68) {
    taxaIr = (livreInss * 0.225) - 636.13
    livreIr = livreInss - taxaIr
    salarioLiquido = livreIr
} else if (livreInss > 4664.68) {
    taxaIr = (livreInss * 0.275) - 869.36
    livreIr = livreInss - taxaIr
    salarioLiquido = livreIr
}

console.log(
    `
    Salario Bruto = ${salarioBrunto.toFixed(2)} \n
    Taxa Inss = ${taxaInss.toFixed(2)} \n
    Livre de Inss = ${livreInss.toFixed(2)} \n
    Taxa de Ir = ${taxaIr.toFixed(2)} \n
    Livre de Ir = ${livreIr.toFixed(2)} \n
    Salario Liquido = ${salarioLiquido.toFixed(2)}
    `
);