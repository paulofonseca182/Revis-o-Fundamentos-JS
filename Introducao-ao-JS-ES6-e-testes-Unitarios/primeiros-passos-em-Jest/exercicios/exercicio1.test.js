const removeItem  = require('./exercicio1');


describe('Testes da funcao removeItem', () => {
    it('Verifica se a chamada da funcao removeItem([1, 2, 3, 4], 3) retorna [1, 2, 4]', () => {
        expect(removeItem([1, 2, 3, 4], 3)).toStrictEqual([ 1, 2, 4 ])
    });

    it('Verifica se a chamada da funcao removeItem([1, 2, 3, 4], 3) nao retorna [1, 2, 3, 4]', () => {
        expect(removeItem([1, 2, 3, 4], 3)).not.toStrictEqual([ 1, 2, 3, 4 ])
    });

    it('Verifica se a chamada da funcao removeItem([1, 2, 3, 4], 5) retorna removeItem([1, 2, 3, 4])', () => {
        expect(removeItem([1, 2, 3, 4], 3)).toStrictEqual([ 1, 2, 4 ])
    });
});