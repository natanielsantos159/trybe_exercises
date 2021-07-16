windows.onload = function () {
  
}

let btnColor = document.getElementById("btn-color");
btnColor.addEventListener("click", changeBackgroundColor);
function changeBackgroundColor() {
  let color = document.getElementById("cor").value;
  if (color !== null) {
    document.body.style.backgroundColor = color;
    localStorage.setItem("background-color", color);
    if (color === "black") {
      changeTextColor("white");
      localStorage.setItem("background-color", "white");
    }
  }
}

let btnTextColor = document.getElementById("btn-text-color");
let textElement = document.getElementById("text");
btnTextColor.addEventListener("click", changeTextColor);
function changeTextColor() {
  let textColor = document.getElementById("text-color").value;
  if (textColor !== null) {
    textElement.style.color = textColor;
    localStorage.setItem("text-color", textColor);
  }
}

let btnFontSize = document.getElementById("btn-font-size");
btnFontSize.addEventListener("click", changeFontSize);
function changeFontSize() {
  let fontSize = document.getElementById("font-size").value;
  if (fontSize !== null) {
    textElement.style.fontSize = fontSize;
    localStorage.setItem("font-size", fontSize);
  }
}

let btnLineHeight = document.getElementById("btn-line-height");
btnLineHeight.addEventListener("click", changeLineHeight);
function changeLineHeight() {
  let lineHeight = document.getElementById("line-height").value;
  if (lineHeight !== null) {
    textElement.style.lineHeight = lineHeight;
    localStorage.setItem("line-height", lineHeight);
  } else {
    lineHeight = 'normal'
  }
}
