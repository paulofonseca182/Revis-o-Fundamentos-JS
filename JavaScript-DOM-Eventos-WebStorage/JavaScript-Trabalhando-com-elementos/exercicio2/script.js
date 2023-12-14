/* Crie um irmão para elementoOndeVoceEsta. */
const pai = document.getElementById('pai');

const create = document.createElement('section')
create.id = 'quintoFilho'

pai.appendChild(create)

console.log(pai)

/* Crie um filho para elementoOndeVoceEsta. */
const elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');

const create2 = document.createElement('section')

create2.id = 'filhoElementoOndeVoceEsta'

elementoOndeVoceEsta.appendChild(create2)

console.log(elementoOndeVoceEsta);

/*Crie um filho para primeiroFilhoDoFilho.  */
const filhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');

const create3 = document.createElement('section');

create3.id = 'filhoDoFilhoDoFilho';

filhoDoFilho.appendChild(create3)

/* A partir desse filho criado, acesse terceiroFilho. */

const ultimoFilho = document.getElementById('filhoDoFilhoDoFilho')

const terceiroFilho = ultimoFilho.parentElement.parentNode.nextSibling.nextSibling;