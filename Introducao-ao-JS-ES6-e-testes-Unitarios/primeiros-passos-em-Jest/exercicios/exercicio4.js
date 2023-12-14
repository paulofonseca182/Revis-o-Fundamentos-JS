const techList = (lista, nome) => {
  const listaOrdenada = lista.sort()
  const novaLista = []
  for (let i = 0; i < listaOrdenada.length; i += 1) {
    const objeto = {
      tech: listaOrdenada[i],
      name: nome
    }
    
    novaLista.push(objeto);
  }
  
  try {
    if(novaLista.length === 0) {
      throw new Error('Vazio!');
    }
    return novaLista;
  } catch (error) {
    return error.message;
  }
}

module.exports = techList;

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));