// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 101];

for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
}

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let sum = 0;
for (let i = 0; i < numbers.length; i += 2) {
  sum = numbers[i] + numbers[i + 1];
}

console.log("soma de todos os elementos do array:" + sum);

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
let media = sum / numbers.length;
console.log("media aritmética: " + media);

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (media <= 20) {
  console.log("valor menor ou igual a 20");
} else {
  console.log("valor maior que 20");
}

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maiorNumeroIndex = 0;
for (i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > numbers[maiorNumeroIndex]) {
    maiorNumeroIndex = i;
  }
}
console.log(" o maior numero é " + numbers[maiorNumeroIndex]);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let countImpar = 0;
for (var i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 !== 0) {
    countImpar++;
  }
}

if (countImpar > 0) {
  console.log("existem " + countImpar + " numeros impares no array.");
} else {
  console.log("nenhum numero impar encontrado");
}

// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menorNumeroIndex = 0;
for (i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < numbers[menorNumeroIndex]) {
    menorNumeroIndex = i;
  }
}
console.log(" o menor numero é " + numbers[menorNumeroIndex]);

// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let array = [];
for (i = 0; i < 25; i++) {
  array.push(i + 1);
}

console.log("array de 1 até 25: [" + array + "]");

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

for (var i = 0; i < array.length; i++){
  array[i] = array[i] / 2;
}

console.log("cada elemento do array por dois: [" + array + "]");
