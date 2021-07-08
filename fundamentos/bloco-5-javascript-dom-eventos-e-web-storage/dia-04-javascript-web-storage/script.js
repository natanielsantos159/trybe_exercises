let btnColor = document.getElementById('btn-color') 
btnColor.addEventListener('click', function(){
  let color = document.getElementById('cor').value
  if(color !== null){
    document.body.style.backgroundColor = color
    if(color === 'black'){
      document.body.style.color = 'white'
    }
  }
})

let btnTextColor = document.getElementById('btn-text-color') 
btnTextColor.addEventListener('click', function (){
  let textColor = document.getElementById('text-color').value
  if(textColor !== null){
    document.body.style.color = textColor
  }
})
