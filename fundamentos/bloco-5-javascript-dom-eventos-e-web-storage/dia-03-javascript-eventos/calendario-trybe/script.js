function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Exercício 1:
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como 
// filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function addDays(array){
  let daysElement = document.getElementById('days')
  for (let day of array) {
    let dayElement = document.createElement('li')
    dayElement.className = 'day';
    dayElement.innerText = day;
    switch (day){
      case 24:
      case 31:
        dayElement.className += ' holiday ';
        break;
      case 4:
      case 11:
      case 18:
        dayElement.className += ' friday ';
        break;
      case 25:
        dayElement.className += ' friday holiday ';
    }
    daysElement.appendChild(dayElement);
  }
}

addDays(dezDaysList)