let states = document.getElementById('states')

let arrayOfStates = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins']

for (let state of arrayOfStates){
  let stateELement = document.createElement('option');
  stateELement.innerHTML = state

  states.appendChild(stateELement)
}

let btnSubmit = document.querySelector('#enviar')
const name = document.getElementById('name')
const cpf = document.getElementById('cpf')
const Adress = document.getElementById('adress')
const Email = document.getElementById('email')
const city = document.getElementById('city')
const state = document.getElementById('state')
const type = document.getElementById('type')
const resumo = document.getElementById('resumo')
const cargo = document.getElementById('cargo')
const desricaoCargo = document.getElementById('decricao-')
const dataInicio = document.getElementById('resumo')
const inputs = document.getElementsByTagName('input')

btnSubmit.addEventListener('click', function(event) {
  event.preventDefault();
  let dataContainer = document.createElement('div')
  console.log(inputs)
})

