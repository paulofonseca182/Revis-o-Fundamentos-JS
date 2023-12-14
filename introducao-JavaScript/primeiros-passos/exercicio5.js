let peca = "Bispo"

switch (peca.toLowerCase()) {
  case "peao":
    console.log(
      `Peao: move-se sempre para frente, uma casa por vez, podendo em cada primeira jogada de cada peão
      escolher mover uma ou duas casas. O peão é a única
      peça que captura de forma diferente do seu
      movimento. Sua captura é na diagonal, uma casa por
      vez.`
    );
    break;

  case "cavalo":
    console.log(
      `Cavalo: move-se duas casas na horizontal ou na
      vertical e depois uma para o lado. O movimento
      completo do cavalo forma um «L» sobre o tabuleiro. O
      cavalo é a única peça que pode saltar sobre as
      outras.`
    );
    break;

  case "bispo":
    console.log(
      "Bispo: movimenta-se em diagonais quantas casas desejar desde que estejam livres."
    );
    break;

  case "torre":
    console.log(
      `Torre: move-se em linhas horizontais ou verticais
      quantas casas desejar desde que esteja livre.`
    );
    break;

  case "dama":
    console.log(
      `Dama: combina os movimentos do bispo e da torre:
      move-se quantas casas desejar nas retas
      horizontais, verticais e diagonais desde que
      estejam livres.`
    );
    break;

  case "rei":
    console.log(
      `Rei: move-se uma casa por vez em qualquer direção ou
      sentido.`
    );
    break;

  default:
    console.log("peca invalida");
    break;
}