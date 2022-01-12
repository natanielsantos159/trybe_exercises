// exercicio 1
const multiplicador = (num1, num2, num3) => {
  return new Promise((resolve, reject) => {
    if (![num1, num2, num3].every((num) => typeof num === "number")) {
      reject("Informe apenas números");
    }

    const sum = (num1 + num2) * num3;
    if (sum < 50) reject ("Valor muito baixo")
    if (sum > 50) resolve(sum)
  });
};

// exercicio 2 
const getRandomNum = () => Math.floor(Math.random() * 100 + 1);

multiplicador(getRandomNum(), getRandomNum(), getRandomNum())
  .then(console.log)
  .catch(console.error);


// exercicio 3

const getResult = async () => {
  try {
    const result = await multiplicador(getRandomNum(), getRandomNum(), getRandomNum())
    console.log(result);
  } catch(err) {
    console.log(err);
  }
}

getResult()


// exercicio 4.1
const fs = require('fs').promises;

const readSimpsons = async () => {
  try {
    const datajson = await fs.readFile('simpsons.json', 'utf8')
    const array = JSON.parse(datajson);
    array.forEach(({id, name}) => console.log(`${id} - ${name}`))
  } catch (error) {
    console.log(error)
  }
}

readSimpsons();

// exercicio 4.2

const getSimpsonById = (paramId) => {
  return new Promise((resolve, reject) => {
    fs.readFile('simpsons.json', 'utf8')
      .then((data) => JSON.parse(data))
      .then((array) => {
        array.forEach(({id, name}) => {
          if (+id === paramId) resolve(`${id} - ${name}`)
        })
        reject("id não encontrado")
      })
      .catch(reject)
  })
}

getSimpsonById(3)
  .then(console.log)
  .catch(console.error)

// exercicio 4.3

const removeCharacterById = async (...paramIDs) => {
  const data = await fs.readFile('simpsons.json', 'utf8')
  const characters = JSON.parse(data);

  let filtered = characters;
  paramIDs.forEach((currId) => {
    filtered = filtered.filter(({id}) => +id !== currId);
  })

  const JSONdata = JSON.stringify(filtered);
  fs.writeFile('simpsons.json', JSONdata);
}

removeCharacterById(10, 6)


// exercicio 4.4

const createNewSimpsonFile = async (...paramsIDs) => {
  const data = await fs.readFile('simpsons.json', 'utf8')
  const characters = JSON.parse(data);

  const filtered = characters.filter(({id}) => paramsIDs.some((paramID) => paramID === +id))
  console.log(filtered)

  const JSONdata = JSON.stringify(filtered);
  fs.writeFile('simpsonFamily.json', JSONdata);
} 

createNewSimpsonFile(1, 4)