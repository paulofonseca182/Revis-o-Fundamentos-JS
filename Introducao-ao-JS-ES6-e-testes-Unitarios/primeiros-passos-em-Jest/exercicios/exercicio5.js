const hydrate = (frase) => {
  const numerosExtraidos = frase.match(/\d+/g).map(Number);
  let totalBebida = 0;
  for (let i = 0; i < numerosExtraidos.length; i += 1) {
    totalBebida += numerosExtraidos[i]
  }
  if (totalBebida <= 1) {
    return `${totalBebida} copo de água`
  } else {
    return `${totalBebida} copos de água`
  }
}

module.exports = hydrate
