# Exercicio 1
- Implemente uma lógica que verifique a média da pessoa estudante. Para isso, considere as seguintes informações:

    *   Escreva uma função que receba, como parâmetro, 4 valores do tipo number. Caso o valor recebido como parâmetro não seja do tipo number, lance uma exceção.

- Lembre-se de quebrar problemas grandes em partes menores, a fim de facilitar sua manutenção e seu entendimento.

# Exercicio 2  Pedido de clientes
- Imagine que você seja a pessoa responsável por cuidar de um sistema de entregas de uma loja virtual e que precise passar todas as informações para a pessoa que irá efetuar a entrega dos pedidos. 

    * A função findPersonByName() recebe um nome por parâmetro e retorna a string: 'Destinatário: Ana Santos. Endereço: Rua dos Girassóis, 1011, Barra, Salvador - BA. CEP: 34567-890 '.
        * Caso a função findPersonByName() não encontre pessoas na lista de clientes, lance uma exceção com a mensagem 'Pessoa não encontrada, tente novamente'.


    * A função findPersonByPosition() recebe uma posição (do array) por parâmetro e retorna uma string com o nome e o e-mail da pessoa. Cliente: João da Silva. email: joao.silva@gmail.com.
        * Caso a função findPersonByPosition() não localize uma pessoa por posição, lance uma exceção com a mensagem 'Posição inválida, tente novamente'.


    * A função findPeopleByState recebe um estado por parâmetro e retorna um array contendo o nome das pessoas que moram naquele estado.
        * Caso a função findPeopleByState localize nenhuma pessoa no estado, lance uma exceção com a mensagem 'Ops, nenhuma pessoa mora nesse estado, tente outro'

# Exercicio 3 Trabalhando em uma autoescola

- Suponha que você esteja trabalhando em uma autoescola e precise fazer o cadastro de uma nova pessoa que tem interesse em se tornar motorista. Para isso, o sistema que você vai desenvolver tem uma série de validações, que permitem ou não a pessoa a começar as aulas.

    * A função studentRegister() recebe dois parâmetros: name, nome da pessoa que quer começar a fazer as aulas; e age, idade da pessoa no momento do cadastro.
    
    * Caso a função não receba name ou idade (ou ambos), lance uma exceção com a mensagem 'Todas as informações são necessárias'.
    
    * Caso a função receba o nome e uma idade inferior a 18 anos, lance uma exceção com a mensagem 'Ops, infelizmente nesse momento você não pode fazer as aulas'
    
    * Caso a função receba o nome e uma idade igual ou superior a 18 anos, retorne a string: 'Nome, seja bem-vindo(a) à AuTrybe!'
