let btnColor = document.getElementById('btn-color') 
btnColor.addEventListener('click', function(){
  let color = document.getElementById('cor').value
  if(color !== null){
    document.body.style.backgroundColor = color
  }
})
