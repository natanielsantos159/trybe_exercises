let btnColor = document.getElementById('btn-color') 
btnColor.addEventListener('click', changeBackgroundColor)
function changeBackgroundColor(){
  let color = document.getElementById('cor').value
  if(color !== null){
    document.body.style.backgroundColor = color
    localStorage.setItem('background-color', color)
    if(color === 'black'){
      changeTextColor('white')
      localStorage.setItem('background-color', 'white')
    }
  }
}

let btnTextColor = document.getElementById('btn-text-color') 
btnTextColor.addEventListener('click', changeTextColor)
function changeTextColor(){
  let textColor = document.getElementById('text-color').value
  if(textColor !== null){
    document.body.style.color = textColor
    localStorage.setItem('text-color', textColor)
  }
}

let btnFontSize= document.getElementById('btn-font-size') 
btnFontSize.addEventListener('click', changeFontSize)
function changeFontSize(){
  let fontSize = document.getElementById('font-size').value
  if(fontSize !== null){
    document.body.style.fontSize = fontSize
    localStorage.setItem('font-size', fontSize)
  }
}
