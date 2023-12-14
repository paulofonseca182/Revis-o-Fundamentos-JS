const palavra = "banana"
const separa = palavra.split('')
const junta = separa.reverse()

console.log(junta.join(""));

/* OUUU */

const palavra2 = "trybe"
let a = ''


for (let index = palavra2.length -1 ; index >= 0 ; index -= 1) {
    a += palavra2[index]    
}

console.log(a);