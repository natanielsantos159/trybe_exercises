// 1 (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
let romanAlgarisms = [
  {
    algarism: "I",
    number: 1,
  },
  {
    algarism: "V",
    number: 5,
  },
  {
    algarism: "X",
    number: 10,
  },
  {
    algarism: "L",
    number: 50,
  },
  {
    algarism: "C",
    number: 100,
  },
  {
    algarism: "D",
    number: 500,
  },
  {
    algarism: "M",
    number: 1000,
  },
];

function convertRomanAlgarism(string) {
  let splittedString = string.split("");
  let convertedArray = [];
  let sum = 0;
  for (let algarism of splittedString) {
    for (i = 0; i < romanAlgarisms.length; i++) {
      if (algarism === romanAlgarisms[i].algarism) {
        convertedArray.push(romanAlgarisms[i].number);
        break;
      }
    }
  }

  if (convertedArray.length > 1) {
    for (i = 0; i < convertedArray.length; i++) {
      if (convertedArray[i] < convertedArray[i+1]){
        let sub = convertedArray[i+1] - convertedArray[i];
        convertedArray.splice(i, 2, sub);
      }
      sum += convertedArray[i];
    }
  }
  if (convertedArray.length === 1) {
    sum += convertedArray[0];
  }

  return sum;
}
console.log(convertRomanAlgarism("DLV"));


// 2 Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function getNumerosPares(vetor){
  let arrayOfPares = []
  for (let array of vetor){
    for (let number of array){
      if (number % 2 === 0){
        arrayOfPares.push(number)
      }
    }
  }

  return arrayOfPares
}
console.log(getNumerosPares(vector))
