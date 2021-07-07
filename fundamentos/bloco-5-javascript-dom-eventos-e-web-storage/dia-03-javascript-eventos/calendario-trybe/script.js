function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Exercício 1:
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como
// filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function addDays(array) {
  let daysElement = document.getElementById("days");
  for (let day of array) {
    let dayElement = document.createElement("li");
    dayElement.className = "day";
    dayElement.innerText = day;
    switch (day) {
      case 24:
      case 31:
        dayElement.className += " holiday ";
        break;
      case 4:
      case 11:
      case 18:
        dayElement.className += " friday ";
        break;
      case 25:
        dayElement.className += " friday holiday ";
    }
    daysElement.appendChild(dayElement);
  }
}

addDays(dezDaysList);

// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function createHolidayButton(string) {
  let buttonElement = document.createElement("button");
  let buttonsContainer = document.querySelector(".buttons-container");
  buttonElement.id = "btn-holiday";
  buttonElement.innerText = string;
  buttonsContainer.appendChild(buttonElement);
}
createHolidayButton("Feriados");

// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
let buttonElement = document.getElementById("btn-holiday");
let holidayButtonIsOn = false;
buttonElement.addEventListener("click", function (button) {
  let holidays = document.getElementsByClassName("holiday");
  for (let day of holidays) {
    if (holidayButtonIsOn) {
      // se o botão estiver com o valor true
      day.style.backgroundColor = "rgb(238,238,238)";
    } else {
      // se o botão estiver com o valor false
      day.style.backgroundColor = "violet";
    }
  }
  holidayButtonIsOn = !holidayButtonIsOn // inverter valor do botao
})

// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function createFridayButton(string) {
  let buttonElement = document.createElement("button");
  let buttonsContainer = document.querySelector(".buttons-container");
  buttonElement.innerText = string
  buttonElement.id = 'btn-friday'
  buttonsContainer.appendChild(buttonElement)
}

createFridayButton('Sexta-feira')

// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
let fridayButton = document.getElementById('btn-friday')
let fridayButtonIsOn = false
fridayButton.addEventListener('click', function(button) {
  let fridays = document.getElementsByClassName('friday')
  for (let day of fridays){
    if (fridayButtonIsOn){
      day.innerText = day.innerText.replace('🎉', '')
    } else {
      day.innerText = day.innerText + ' 🎉'
    }
  }
  fridayButtonIsOn = !fridayButtonIsOn
})