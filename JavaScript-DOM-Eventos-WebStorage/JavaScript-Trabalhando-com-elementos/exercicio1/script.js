/* Acesse o elemento where-are-you.*/
const elemento = document.getElementById('where-are-you');

/* Acesse parent a partir de where-are-you e adicione uma color a ele. */
const parentElemento = elemento.parentElement;
parentElemento.style.color = "green"


/* Acesse o first-child-of-child e adicione um texto a ele. */
const firstChild = document.getElementById('first-child-of-child');
firstChild.innerText = "boa noite"

/* Acesse o first-child a partir de parent. */
const parente = document.getElementById('parent');
const parentFirstChild = parente.firstElementChild

/*Acesse o first-child a partir de where-are-you.*/
const whereAreYou = elemento.previousElementSibling

/* Acesse o texto Attention! a partir de where-are-you */
const attention = elemento.nextSibling

/* Acesse o third-child a partir de where-are-you. */
const thirdChild = elemento.nextElementSibling

/* Acesse o third-child a partir de parent. */

const thirdChildParent = parente.lastElementChild.previousElementSibling;

console.log(thirdChildParent);