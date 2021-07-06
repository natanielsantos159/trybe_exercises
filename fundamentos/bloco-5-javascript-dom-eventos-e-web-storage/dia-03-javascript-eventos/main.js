const firstDiv = document.getElementById("first-div");
const secondDiv = document.getElementById("second-div");
const thirdDiv = document.getElementById("third-div");
const input = document.getElementById("input");
const myWebpage = document.getElementById("my-spotrybefy");

/*
 1 Copie esse arquivo e edite apenas ele;
 */

// 2 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1 Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function addClassTech(element) {
  let techClasses = document.getElementsByClassName("tech");
  if (techClasses.length > 0) {
    for (let classes of techClasses) {
      removerClassTech(classes)
    }
  }
  element.className = "tech";
}
function removerClassTech(element) {
  element.className = "";
}
// 3 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

input.addEventListener("keypress", getInput);

function getInput(element) {
  let classTech = document.getElementsByClassName("tech")[0];
  if (element.key === "Enter") {
    /* Referencia: https://stackoverflow.com/questions/14542062/eventlistener-enter-key */
    classTech.innerText = element.target.value;
    element.target.value = "";
    changePlaceholder(element)
  }
}

function changePlaceholder(element) {
  if (element.target.placeholder.includes("primeira")) {
    element.target.placeholder = element.target.placeholder.replace("primeira", "segunda");
    addClassTech(secondDiv)
  } else if (element.target.placeholder.includes("segunda")) {
    element.target.placeholder = element.target.placeholder.replace("segunda", "terceira");
    addClassTech(thirdDiv)
  } else if (element.target.placeholder.includes("terceira")) {
    element.target.placeholder = element.target.placeholder.replace("terceira", "primeira");
    removerClassTech(thirdDiv)
  }
}
// 4 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1 Que tal redirecionar para seu portifólio?
myWebpage.addEventListener('dblclick', function() {
  windows.location.replace("https://natanielsantos159.github.io/")
})
// 5 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = "Opção reiniciada";
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstDiv.addEventListener("dblclick", resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.
