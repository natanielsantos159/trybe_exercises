//5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
]

function containsA() {
  const regex = /[Aa]/g

  return names.reduce((acc, curr) => {
    let lettersA = curr.match(regex)

    if(lettersA){
      return acc + lettersA.length 
    }
  }, 0)
}

assert.deepStrictEqual(containsA(), 20);