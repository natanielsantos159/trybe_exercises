//Dado um array de pessoas, identifique qual tem a maior idade e retorne o nome da pessoa e sua idade.

//A saída deve ser da seguinte forma: 'X tem a maior idade, com X anos'

const pessoas = [
  { nome: 'Ramon', idade: 35 },
  { nome: 'José', idade: 28 },
  { nome: 'Amanda', idade: 19 },
  { nome: 'Tamires', idade: 22 },
  { nome: 'Xablau', idade: 42 },
  { nome: 'Lucas', idade: 37 },
  { nome: 'Oswaldo', idade: 13 },
  { nome: 'Enzo', idade: 13 },
  { nome: 'Marilia', idade: 21 },
  { nome: 'Gabriela', idade: 25 },
  { nome: 'Silvia', idade: 43 },
  { nome: 'Gabriel', idade: 25 },
  { nome: 'Ricardo', idade: 51 },
  { nome: 'Joaquim', idade: 99 },
  { nome: 'Ronald', idade: 18 },
  { nome: 'Paulo', idade: 27 },
  { nome: 'Emilia', idade: 45 },
];

function findOldest(pessoas){
  let oldest = 0;
  let oldestPersonName;
  for (let pessoa of pessoas){
    if(pessoa.idade > oldest){
      oldest = pessoa.idade;
      oldestPersonName = pessoa.nome;
    }
  }

  return oldestPersonName + ' tem a maior idade, com ' + oldest + ' anos' ;
}

console.log(findOldest(pessoas))

// ----------------------------------

// Você é responsável pelo sistema de um novo jogo de fantasia medieval. 
// Crie um algoritmo que recebe uma Classe e retorna os pontos de vida do(a) personagem, com base na tabela a seguir:
//   Classe   | Pontos de Vida 
//    Mago           5PV                
//  Arqueiro         10PV              
//  Guerreiro        15PV               
//  Cavaleiro        20PV           
// O retorno deve ser no seguinte formato:
// Mago, 5PV.
// Arqueiro, 10PV.
// Desafio: faça sem usar estruturas condicionais (ifs ou switchs)

let personagens = [
  { clase: 'Mago', pontosDeVida: '5PV'}, 
  { clase: 'Arqueiro', pontosDeVida: '10PV'},
  { clase: 'Guerreiro', pontosDeVida: '15PV'},
  { clase: 'Cavaleiro', pontosDeVida: '20PV'},
]
function getPontosDeVida(personagens){
  console.table(personagens)
}

getPontosDeVida(personagens)