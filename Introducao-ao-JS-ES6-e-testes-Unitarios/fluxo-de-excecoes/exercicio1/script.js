const mediaNota = (nota1, nota2, nota3, nota4) => {
    try {
        checkValidRange(nota1);
        checkValidRange(nota2);
        checkValidRange(nota3);
        checkValidRange(nota4);
        const totalNota = nota1 + nota2 + nota3 + nota4 
        return totalNota / 4 
    } catch (error) {
        return error.message
    }

};

const checkValidRange = (nota) => {
    if (nota > 10 || nota < 1 ) {
        throw new Error('O valor digitado deve estar entre 1 e 10.')
    }
};

console.log(mediaNota(5, 5, 22, 7));