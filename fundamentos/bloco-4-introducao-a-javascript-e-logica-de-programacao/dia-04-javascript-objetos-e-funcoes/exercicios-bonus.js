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

// 3 A partir do array de frutas basket , retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 }
//  quando passado como argumento para a função. Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...


const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

function countFruits(basket) {
  let arrayOfFruits = []

  for (let fruit of basket) {
    let currentFruitCount = 0;

    for (j=0; j < basket.length; j++){
      if (fruit === basket[j]){
        currentFruitCount++
        basket.splice(j, 1)
        j--;
      }
    }

    arrayOfFruits.push({[fruit]: currentFruitCount});
  }
  return arrayOfFruits
}
let fruitsObjects = (countFruits(basket))
console.log( "Sua cesta possui: ")
for(let fruit of fruitsObjects){
  for (fruitname in fruit ){
    console.log(fruit[fruitname], fruitname + "s")
  }
}