const myFizzBuzz = require('./exercicio2');

describe('Teste da funcao myFizzBuzz', () => {
    test('Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz"', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });

    test('Caso num seja um número divisível apenas por 3, a função retorna "fizz"', () => {
        expect(myFizzBuzz(3)).toBe('fizz');
    });

    test('Caso num seja um número divisível apenas por 5, a função retorna "buzz"', () => {
        expect(myFizzBuzz(5)).toBe('buzz');
    });

    test('Caso num seja um número que não é divisível nem por 3 nem por 5, a função retorna o próprio número', () => {
        expect(myFizzBuzz(7)).toBe(7);
    });

    test('Caso num não seja um número, a função retorna false', () => {
        expect(myFizzBuzz('7')).toBe(false);
    });
});
