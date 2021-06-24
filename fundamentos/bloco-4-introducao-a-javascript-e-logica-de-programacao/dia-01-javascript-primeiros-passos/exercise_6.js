// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

let peca = "torre";

switch (peca.toLowerCase) {
  case "rei":
  case "king":
    console.log("Rei(King): horizontal, vertical ou diagonal");
    break;
  case "rainha":
  case "queen":
    console.log("Rainha(Queen): horizontal, vertical ou diagonal");
    break;
  case "cavalo":
  case "knight":
    console.log(
      "Cavalo(Knight): dois quadrados verticalmente e um quadrado horizontalmente, ou dois quadrados horizontalmente e um quadrado verticalmente (ambos formando a forma de um L )."
    );
    break;
  case "bispo":
  case "bishop":
    console.log("Bispo(Bishop): diagonal");
    break;
  case "tower":
  case "torre":
    console.log("Torre(Tower): diagonal e vertical");
    break;
}
