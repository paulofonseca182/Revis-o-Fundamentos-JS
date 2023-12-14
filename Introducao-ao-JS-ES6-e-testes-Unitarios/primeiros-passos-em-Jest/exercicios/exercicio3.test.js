const { decode, encode } = require('./exercicio3');

describe('Teste das funcoes encode e decode', () => {
    it('Teste se encode e decode são funções', () => {
        expect(typeof decode).toBe('function');
        expect(typeof encode).toBe('function');
    });

    it('Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4, 5, respectivamente', () => {
        expect(encode('aeiou')).toBe('12345');
    });

    it('Para a função decode, teste se os números 1, 2, 3, 4, 5 são convertidos nas vogais a, e, i, o, u, respectivamente.', () => {
        expect(decode('12345')).toBe('aeiou');
    });

    it('Teste se as demais letras e os demais números não são convertidos para cada caso.', () => {
        expect(encode('paulo')).toBe('p15l4');
        expect(decode('158372')).toBe('au8i7e');
    });

    it('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.', () => {
        const newString = 'paulo'
        const newStringlength = newString.length
        expect(encode(newString)).toHaveLength(newStringlength);
        expect(decode(newString)).toHaveLength(newStringlength);
    });

    
})