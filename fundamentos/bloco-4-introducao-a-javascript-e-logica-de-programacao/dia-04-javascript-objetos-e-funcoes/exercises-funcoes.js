// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindromo(word) {
  let isPalindromo = false;
  let reversedWord = word.split("").reverse().join("");
  reversedWord === word ? (isPalindromo = true) : (isPalindromo = false);
  return isPalindromo;
}

console.log(verificaPalindromo("ama"));

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let array = [2, 3, 6, 7, 10, 1];
function maiorNumero(array) {
  let maiorNumeroIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[maiorNumeroIndex]) {
      maiorNumeroIndex = i;
    }
  }

  return maiorNumeroIndex;
}

console.log(maiorNumero(array));

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

array = [2, 4, 6, 7, 10, 0, -3];

function menorNumero(array) {
  let menorNumeroIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[menorNumeroIndex]) {
      menorNumeroIndex = i;
    }
  }

  return menorNumeroIndex;
}

console.log(menorNumero(array));

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

array = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];

function maiorNome(array) {
  let maiorNome;
  let maiorNomeTamanho = 0;

  for (nome of array) {
    if (nome.length > maiorNomeTamanho) {
      maiorNome = nome;
      maiorNomeTamanho = nome.length;
    }
  }

  return maiorNome;
}

console.log(maiorNome(array));

// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

array = [2, 3, 2, 5, 8, 2, 3];

function verificaNumeroMaisComum(array) {
  let numeroMaisComum;
  let numeroMaisComumCount = 0;
  for (let i = 0; i < array.length; i++) {
    let NumeroAtualCount = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j]) {
        NumeroAtualCount++;
      }
    }
    if (NumeroAtualCount > numeroMaisComumCount) {
      numeroMaisComum = array[i];
      numeroMaisComumCount = NumeroAtualCount;
    }
  }

  return numeroMaisComum;
}

console.log(verificaNumeroMaisComum(array));
