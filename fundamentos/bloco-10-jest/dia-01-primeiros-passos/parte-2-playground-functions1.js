// Desafio 9
function encode(string) {
  let splittedString = string.split('');
  let newString = '';

  for (let letter of splittedString) {
    switch (letter) {
      case 'a':
        newString += '1';
        break;
      case 'e':
        newString += '2';
        break;
      case 'i':
        newString += '3';
        break;
      case 'o':
        newString += '4';
        break;
      case 'u':
        newString += '5';
        break;
      default:
        newString += letter;
    }
  }
  return newString;
}

function decode(string) {
  let splittedString = string.split('');
  let newString = '';

  for (let letter of splittedString) {
    switch (letter) {
      case '1':
        newString += 'a';
        break;
      case '2':
        newString += 'e';
        break;
      case '3':
        newString += 'i';
        break;
      case '4':
        newString += 'o';
        break;
      case '5':
        newString += 'u';
        break;
      default:
        newString += letter;
    }
  }
  return newString;
}

function hydrate(string) {
  let regexp = /\d+/g;
  let arrayOfNumbers = string.match(regexp);
  let total = 0;
  for (let number of arrayOfNumbers) {
    number = parseInt(number);
    total += number;
  }
  return total > 1? total + ' copos de água': total + ' copo de água'
}

function techList(array, name) {
  if (array.length === 0) return 'Vazio!';
  array.sort();

  const arrayOfObjects = array.reduce((acc, tech) => {
      acc.push({tech, name});
      return acc;
  }, [])

  return arrayOfObjects;
}

module.exports = {
  decode,
  encode,
  hydrate,
  techList,
};
