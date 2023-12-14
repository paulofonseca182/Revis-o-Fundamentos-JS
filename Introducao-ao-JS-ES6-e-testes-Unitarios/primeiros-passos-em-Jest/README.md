# Exercício 1
- Copie a função já implementada e desenvolva os testes. Separe a função e o teste em arquivos diferentes para evitar qualquer tipo de problema. A função removeItem(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item, caso ele exista no array.

    * Verifique se a chamada removeItem([1, 2, 3, 4], 3) retorna o array esperado.
    * Verifique se a chamada removeItem([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4].
    * Verifique se a chamada removeItem([1, 2, 3, 4], 5) retorna o array esperado.


# Exercício 2
- Copie a função já implementada e desenvolva os testes. Separe a função e o teste em arquivos diferentes para evitar qualquer tipo de problema. A função myFizzBuzz(num) recebe um número num como parâmetro. Assim:

    * Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz".
    * Caso num seja um número divisível apenas por 3, a função retorna "fizz".
    * Caso num seja um número divisível apenas por 5, a função retorna "buzz".
    * Caso num seja um número que não é divisível nem por 3 nem por 5, a função retorna o próprio número num.
    * Caso num não seja um número, a função retorna false.
- Realize os testes da função myFizzBuzz(num) para cada um dos cenários acima

# Exercício 3
- Para as funções encode e decode, crie os seguintes testes em Jest:

    * Teste se encode e decode são funções.
    * Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4, 5, respectivamente.
    * Para a função decode, teste se os números 1, 2, 3, 4, 5 são convertidos nas vogais a, e, i, o, u, respectivamente.
    * Teste se as demais letras e os demais números não são convertidos para cada caso.
    * Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.

# Exercício 4
- Utilizando o metodo TDD, crie a função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. 
    * {tech: 'nomeTecnologia',name: name,}node_modulesnode_modules

# Exercício 5
- Utilizando o metodo TDD, crie a função hydrate recebe uma string no formato “número bebida” e retorna a sugestão de quantos copos de água você deve beber para se hidratar. Para cada bebida, deve-se tomar um copo de água, a fim de evitar ressaca. 