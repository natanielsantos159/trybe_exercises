// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

let n = 9;
let arrayAsteriscos = [];

for (i = 0; i < n; i += 1) {
  arrayAsteriscos.push('*')
}

for (i = 0; i < n; i += 1) {
  console.log(arrayAsteriscos.join(''))
}

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

arrayAsteriscos = [];

for (i = 0; i < n; i += 1) {
  arrayAsteriscos.push('*')
  console.log(arrayAsteriscos.join(''))
}

// 3- Agora inverta o lado do triângulo. Por exemplo:

for (let i = 1; i <= n; i += 1){
  arrayAsteriscos = [];

  for (let j = 1; j <= n - i; j += 1){
    arrayAsteriscos.push(' ');
  }

  for (let x = 0; x < i; x += 1){
    arrayAsteriscos.push('*')
  }

  console.log(arrayAsteriscos.join(''))
}

// 4- Depois, faça uma pirâmide com n asteriscos de base:

